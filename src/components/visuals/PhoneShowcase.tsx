'use client';

import {
  Mic,
  Send,
  Sparkles,
  Truck,
  Search,
  ShoppingBag,
  RotateCcw,
} from 'lucide-react';
import Image from 'next/image';

function PhoneFrame({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-island" />
      <div className="phone-screen">{children}</div>
      <div className="phone-home-indicator" />
    </div>
  );
}

export function PhoneShowcase() {
  return (
    <div
      className="phone-showcase"
      aria-label="Zekvian AI grocery ordering app preview"
      role="img"
    >
      <div className="phone-glow" />
      <PhoneFrame className="phone-primary">
        <div className="phone-status">
          <span>9:41</span>
          <span>● ● ▰</span>
        </div>
        <div className="app-header">
          <span className="app-mark">
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
              width={22}
              height={22}
              style={{ borderRadius: '7px', objectFit: 'cover' }}
            />
          </span>
          <span className="app-name">ZEKVIAN</span>
          <span className="app-avatar">A</span>
        </div>
        <div className="orb-wrap">
          <div className="ai-orb">
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
              width={56}
              height={56}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <span className="orb-spark spark-a">✦</span>
          <span className="orb-spark spark-b">✦</span>
        </div>
        <div className="phone-greeting">
          <strong>
            Hello! <span aria-hidden="true">👋</span>
          </strong>
          <span>How can I help you today?</span>
        </div>
        <div className="quick-actions">
          <div>
            <ShoppingBag size={13} />
            <span>
              <b>Order Groceries</b>
              <small>Regular groceries, instantly.</small>
            </span>
          </div>
          <div>
            <Truck size={13} />
            <span>
              <b>Track My Order</b>
              <small>See where it is now.</small>
            </span>
          </div>
          <div>
            <RotateCcw size={13} />
            <span>
              <b>Repeat My Order</b>
              <small>Reorder in one tap.</small>
            </span>
          </div>
          <div>
            <Search size={13} />
            <span>
              <b>Find Products</b>
              <small>Search naturally.</small>
            </span>
          </div>
        </div>
        <div className="chat-input">
          <span>Ask ZEKVIAN anything...</span>
          <Mic size={14} />
          <Send size={14} className="send-icon" />
        </div>
      </PhoneFrame>

      <PhoneFrame className="phone-secondary">
        <div className="phone-status">
          <span>9:41</span>
          <span>● ● ▰</span>
        </div>
        <div className="chat-header">
          <span className="app-mark">
            <Image
              src="/Zekvian%20Z.jpeg"
              alt="ZEKVIAN"
              width={22}
              height={22}
              style={{ borderRadius: '7px', objectFit: 'cover' }}
            />
          </span>
          <span>
            <b>ZEKVIAN AI</b>
            <small>Online now</small>
          </span>
          <Sparkles size={15} />
        </div>
        <div className="chat-body">
          <div className="chat-date">TODAY, 9:41 AM</div>
          <div className="message customer">
            I need milk, bread, eggs and bananas delivered today.
          </div>
          <div className="message bot">
            <span className="mini-orb">Z</span>
            <span>Your items have been added to cart.</span>
          </div>
          <div className="order-items">
            <div>
              <span>🥛</span>
              <b>Fresh milk</b>
              <em>₹62</em>
            </div>
            <div>
              <span>🍞</span>
              <b>Whole wheat bread</b>
              <em>₹48</em>
            </div>
            <div>
              <span>🍌</span>
              <b>Bananas</b>
              <em>₹45</em>
            </div>
            <div>
              <span>🥚</span>
              <b>Farm eggs · 6 pack</b>
              <em>₹54</em>
            </div>
          </div>
          <div className="message bot confirm">
            <span className="mini-orb">✓</span>
            <span>
              Your order is confirmed.
              <small>Arriving today · 12:30 - 1:00 PM</small>
            </span>
          </div>
          <div className="delivery-card">
            <Truck size={16} />
            <span>
              <b>Order update</b>
              <small>Live tracking is on</small>
            </span>
            <span className="live-dot" />
          </div>
        </div>
        <div className="chat-input">
          <span>Reply to ZEKVIAN...</span>
          <Mic size={14} />
          <Send size={14} className="send-icon" />
        </div>
      </PhoneFrame>
    </div>
  );
}
