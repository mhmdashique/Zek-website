import Link from 'next/link';

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'N8n',
      category: 'Automation',
      description:
        'Build and deploy visual automation workflows that trigger on order events, inventory changes, and fulfillment milestones. Use pre-built ZEKVIAN workflow templates or create your own.',
      badge: 'Differentiator',
    },
    {
      name: 'MCP API',
      category: 'AI & Agents',
      description:
        'Model Context Protocol compatible API allows LLM-powered agents to query inventory, route orders, and interact with your tenant programmatically.',
      badge: 'Differentiator',
    },
    {
      name: 'Prisma',
      category: 'Database ORM',
      description:
        'ZEKVIAN uses Prisma for type-safe database access, enabling consistent data models across multi-tenant environments.',
    },
    {
      name: 'Nx',
      category: 'Monorepo Build',
      description:
        'The platform is built with Nx for modular, cacheable builds — making it easy to extend or white-label for enterprise customers.',
    },
    {
      name: 'ChatGPT UI',
      category: 'AI Interface',
      description:
        'Embed a natural-language interface for order queries and shop status updates directly in your operations workflow.',
    },
    {
      name: 'Webhooks',
      category: 'Events',
      description:
        'Subscribe to real-time events: order.created, order.allocated, fulfillment.completed. Works with any HTTP endpoint.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 sm:px-8">
      <h1 className="mb-4 text-4xl font-bold text-gray-950">Integrations</h1>
      <p className="mb-12 max-w-2xl text-lg text-gray-600">
        ZEKVIAN connects with the tools your ops team already uses — and extends
        with an MCP-compatible API for AI-native workflows.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((intg) => (
          <div
            key={intg.name}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-indigo-100"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="mb-1 text-xs font-medium text-gray-500">
                  {intg.category}
                </div>
                <h3 className="text-xl font-bold text-gray-950">{intg.name}</h3>
              </div>
              {intg.badge && (
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold whitespace-nowrap text-indigo-700">
                  {intg.badge}
                </span>
              )}
            </div>
            <p className="flex-1 text-sm text-gray-600">{intg.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border bg-slate-50 p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold">Need a custom integration?</h2>
        <p className="mb-6 text-gray-600">
          Our REST API and webhook system make it straightforward to connect to
          any tool in your stack.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Talk to our team
        </Link>
      </div>
    </div>
  );
}
