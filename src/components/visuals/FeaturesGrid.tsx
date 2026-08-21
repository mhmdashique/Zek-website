'use client';

const FEATURES = [
  {
    title: 'Multi-Tenant Management',
    desc: 'Run multiple tenants from a single platform with complete data isolation.',
    tag: 'isolation',
  },
  {
    title: 'Haversine Auto-Allocation',
    desc: 'Orders route to the closest in-stock shop using great-circle distance math.',
    tag: 'routing',
  },
  {
    title: 'N8n Automation Agents',
    desc: 'Trigger visual workflows on any order event, no code required.',
    tag: 'automation',
  },
  {
    title: 'MCP-Compatible API',
    desc: 'LLM agents can query orders, inventory, and trigger allocation natively.',
    tag: 'api',
  },
  {
    title: 'Real-Time Inventory Sync',
    desc: 'Stock levels update across all shops instantly on every fulfillment.',
    tag: 'sync',
  },
  {
    title: 'RBAC & Audit Logs',
    desc: 'Role-based access control with immutable logs for full compliance.',
    tag: 'security',
  },
];

export function FeaturesGrid() {
  return (
    <div
      className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
      style={{ background: 'var(--line)' }}
    >
      {FEATURES.map((f) => (
        <div
          key={f.title}
          className="interactive-card p-8"
          style={{
            background: 'var(--paper)',
            transition: 'background 0.15s var(--ease-std)',
            cursor: 'default',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'var(--badge-bg)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'var(--paper)')
          }
        >
          <div
            className="mb-4 inline-block rounded px-2 py-0.5 font-mono text-xs"
            style={{
              background: 'var(--badge-bg)',
              color: 'var(--pulse)',
            }}
          >
            {f.tag}
          </div>
          <h3
            className="font-display mb-2 text-lg"
            style={{ color: 'var(--mist)' }}
          >
            {f.title}
          </h3>
          <p
            className="text-sm"
            style={{ color: 'var(--mist)', opacity: 0.6, lineHeight: 1.6 }}
          >
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
