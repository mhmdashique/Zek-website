const solutions: Record<
  string,
  {
    title: string;
    problem: string;
    solution: string;
    stat: string;
    statLabel: string;
    quote: string;
    quoteName: string;
    quoteRole: string;
  }
> = {
  'retail-chains': {
    title: 'Retail Chains',
    problem:
      'Managing orders across dozens of physical stores leads to routing errors, stock inconsistencies, and slow fulfillment as operations scale.',
    solution:
      'ZEKVIAN gives retail chains a single multi-tenant control plane. Auto-allocation routes each order to the nearest in-stock shop using haversine distance logic.',
    stat: '42%',
    statLabel: 'Reduction in routing time',
    quote:
      'We went from manual dispatch to fully automated routing in under 2 weeks. The time savings have been massive.',
    quoteName: 'Operations Manager',
    quoteRole: 'Regional Retail Chain',
  },
  'dark-stores': {
    title: 'Dark Stores',
    problem:
      'Dark store networks require precise, real-time inventory visibility and instant order assignment to meet sub-30-minute delivery SLAs.',
    solution:
      "ZEKVIAN's real-time inventory sync and allocation engine ensure that each order goes to the closest dark store with verified stock — automatically.",
    stat: '99.4%',
    statLabel: 'On-time fulfillment rate',
    quote:
      "The allocation engine handles our peak surges without manual intervention. It's become core to our operations.",
    quoteName: 'Head of Fulfillment',
    quoteRole: 'Dark Store Operator',
  },
  'local-delivery': {
    title: 'Local Delivery',
    problem:
      'Local delivery businesses face demand spikes that overwhelm dispatch teams, leading to delays and customer churn.',
    solution:
      'N8n automation agents triggered by ZEKVIAN handle routine dispatch communications and escalations, freeing up your team for exception management.',
    stat: '3×',
    statLabel: 'Delivery volume increase, same team size',
    quote:
      "We tripled our order volume without hiring a single extra dispatcher. ZEKVIAN's automation made it possible.",
    quoteName: 'CEO',
    quoteRole: 'Local Delivery Company',
  },
  'franchise-management': {
    title: 'Franchise Management',
    problem:
      'Franchisors struggle to maintain visibility and control across independently-operated franchise locations without being able to impose uniform processes.',
    solution:
      "ZEKVIAN's RBAC model lets franchisors set system-level rules while franchise owners manage their own shop-level configuration within defined guardrails.",
    stat: '100%',
    statLabel: 'Audit log compliance across all franchises',
    quote:
      'We finally have real-time visibility across all our franchise locations in a single dashboard.',
    quoteName: 'Franchise Director',
    quoteRole: 'National Franchise Network',
  },
};

export async function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions[slug];

  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-950">Solution not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-8">
      <div className="mb-2 text-xs font-semibold tracking-wider text-indigo-600 uppercase">
        Solution
      </div>
      <h1 className="mb-6 text-4xl font-bold text-gray-950">
        {solution.title}
      </h1>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-950">
          The Challenge
        </h2>
        <p className="text-lg text-gray-600">{solution.problem}</p>
      </section>

      {/* Solution */}
      <section className="mb-12">
        <h2 className="mb-3 text-xl font-semibold text-gray-950">
          How ZEKVIAN Solves It
        </h2>
        <p className="text-lg text-gray-600">{solution.solution}</p>
      </section>

      {/* Stat Block */}
      <section className="mb-12">
        <div className="rounded-2xl bg-indigo-600 p-8 text-center text-white shadow-sm">
          <div className="mb-2 text-6xl font-extrabold">{solution.stat}</div>
          <div className="text-lg text-indigo-100">{solution.statLabel}</div>
        </div>
      </section>

      {/* Quote */}
      <section className="mb-12">
        <blockquote className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-4 text-lg text-gray-700 italic">
            &ldquo;{solution.quote}&rdquo;
          </p>
          <div className="font-semibold text-gray-950">
            {solution.quoteName}
          </div>
          <div className="text-sm text-gray-500">{solution.quoteRole}</div>
        </blockquote>
      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href={`/contact?use_case=${slug}`}
          className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Request a Tailored Demo →
        </a>
      </div>
    </div>
  );
}
