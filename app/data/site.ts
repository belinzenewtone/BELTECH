export const site = {
  name: 'BELTECH',
  location: 'Nairobi, Kenya',
  eyebrow: 'Backend and cloud engineering',
  headline: 'Dependable backend and cloud systems for telecom and connectivity businesses.',
  intro:
    'We design, build and operate the APIs and AWS infrastructure your services rely on, so your teams can focus on customers.',
  description:
    'BELTECH is a backend and cloud engineering company in Nairobi, Kenya. We build and operate Python APIs and AWS infrastructure for telecom and connectivity businesses.',
  social: [{ label: 'GitHub', href: 'https://github.com/belinzenewtone' }]
}

export const glance = [
  { label: 'Based in', value: 'Nairobi, Kenya' },
  { label: 'Industry focus', value: 'Telecom and connectivity' },
  { label: 'Core stack', value: 'Python, FastAPI, AWS, Terraform' }
]

// TODO(content): review the deliverables below so they match what BELTECH offers.
export const services = [
  {
    name: 'Backend APIs',
    description: 'Python and FastAPI services with clear contracts, tests and documentation.',
    points: ['API design and implementation', 'Authentication and access control', 'Automated tests and documentation']
  },
  {
    name: 'Cloud infrastructure',
    description: 'AWS environments defined in Terraform, with repeatable deployments.',
    points: ['Infrastructure as code', 'Containerised builds and CI/CD', 'Environments that match from test to production']
  },
  {
    name: 'Cloud computing services',
    description: 'Compute, storage and serverless workloads on AWS, sized and secured for the load.',
    points: ['Compute and storage architecture', 'Serverless workloads', 'Security and cost review']
  },
  {
    name: 'Service monitoring',
    description: 'Health checks and alerts for services and networks, built to point to a cause.',
    points: ['Uptime and health checks', 'Actionable alerting', 'Dashboards for operations teams']
  }
]

export const approach = [
  { step: 'Discover', text: 'We learn your systems, constraints and goals before proposing anything.' },
  { step: 'Design', text: 'We agree an architecture and plan, with the trade-offs written down.' },
  { step: 'Deliver', text: 'We ship in small, tested releases you can review as we go.' },
  { step: 'Operate', text: 'We monitor, document and hand over, or keep running it with you.' }
]

export const reasons = [
  {
    title: 'Focused on your industry',
    text: 'Our work is centred on telecom and connectivity platforms, where reliability is not optional.'
  },
  {
    title: 'Engineering discipline',
    text: 'Infrastructure as code, automated tests and CI/CD are how we work by default.'
  },
  {
    title: 'Clear communication',
    text: 'Plain language, written decisions and a single point of contact from start to handover.'
  }
]

// TODO(content): replace with real case studies. Entries with an `href` render as links.
export const work: { client: string; title: string; summary: string; stack: string; href?: string }[] = [
  {
    client: '[Client or sector]',
    title: '[Project name]',
    summary: '[The problem, what we built and the result for the client.]',
    stack: '[Python, AWS, Terraform]'
  },
  {
    client: '[Client or sector]',
    title: '[Project name]',
    summary: '[The problem, what we built and the result for the client.]',
    stack: '[FastAPI, Docker, CI/CD]'
  },
  {
    client: '[Client or sector]',
    title: '[Project name]',
    summary: '[The problem, what we built and the result for the client.]',
    stack: '[Serverless, AWS Lambda]'
  }
]

export const about = {
  lead: 'BELTECH is a backend and cloud engineering company based in Nairobi. We work with telecom and connectivity teams that need dependable systems and a partner who communicates clearly.',
  // TODO(content): founding story, leadership, experience.
  body: '[Add: company background, leadership, years of experience and the sectors you have worked in.]'
}

// TODO(content): state a real response time.
export const contact = {
  title: 'Talk to us about your project',
  text: 'Tell us what you are building and where it needs to be reliable. [Response-time promise.]'
}
