import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendEmail } from '@/lib/resend';

const TEAM_EMAIL = 'official.zekvian@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone ?? 'Not provided');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    await sendEmail({
      to: TEAM_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#0f0f0f">
          <div style="background:#4169E1;color:#fff;padding:24px 28px;border-radius:14px 14px 0 0">
            <div style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:.8">ZEKVIAN CONTACT</div>
            <h2 style="margin:8px 0 0;font-size:24px">New message from your website</h2>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:0;padding:28px;border-radius:0 0 14px 14px">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <div style="margin-top:24px;padding:18px;background:#4169E1;color:#fff;border-radius:10px;line-height:1.6">
              ${safeMessage}
            </div>
            <p style="color:#6b7280;font-size:13px;margin-top:24px">Reply directly to this email to contact ${safeName}.</p>
          </div>
        </div>
      `,
    });

    if (process.env.RESEND_SEND_CLIENT_CONFIRMATION === 'true') {
      await sendEmail({
        to: email,
        subject: 'Thanks for reaching out to ZEKVIAN',
        html: `<h2>Hi ${safeName},</h2><p>Thanks for getting in touch with ZEKVIAN. Our team will reply within 1 business day.</p><p>Talk soon,<br/>The ZEKVIAN Team</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] email failed', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}