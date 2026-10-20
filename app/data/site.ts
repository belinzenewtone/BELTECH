export const site = {
  name: 'BELTECH',
  location: 'Nairobi, Kenya',
  headline: 'Backend and cloud engineering for telecom and connectivity platforms.',
  intro: 'BELTECH builds Python APIs and AWS infrastructure, and keeps them running. Based in Nairobi, Kenya.',
  description:
    'BELTECH is a backend and cloud engineering practice in Nairobi, Kenya, building Python APIs and AWS infrastructure for telecom and connectivity platforms.',
  social: [
    { label: 'GitHub', href: 'https://github.com/belinzenewtone' }
  ]
}

export const services = [
  {
    name: 'Backend APIs',
    description: 'Python and FastAPI services with clear contracts, tests and documentation.'
  },
  {
    name: 'Cloud infrastructure',
    description: 'AWS environments defined in Terraform, with repeatable deployments.'
  },
  {
    name: 'Cloud computing services',
    description: 'Compute, storage and serverless workloads on AWS, sized and secured for the load.'
  },
  {
    name: 'Service monitoring',
    description: 'Health checks and alerts for services and networks, built to point to a cause.'
  }
]

// TODO(content): replace with real projects. Entries with a `href` render as links.
export const work: { name: string; summary: string; stack: string; href?: string }[] = [
  {
    name: '[Project name]',
    summary: '[What it does and the result for the client.]',
    stack: '[Python, AWS, Terraform]'
  },
  {
    name: '[Project name]',
    summary: '[What it does and the result for the client.]',
    stack: '[FastAPI, Docker, CI/CD]'
  },
  {
    name: '[Project name]',
    summary: '[What it does and the result for the client.]',
    stack: '[Serverless, AWS Lambda]'
  }
]

export const about = {
  lead: 'BELTECH is an engineering practice in Nairobi that works with telecom and connectivity teams.',
  // TODO(content): who you are, experience, sectors.
  body: '[Add: who you are, years of experience, and the sectors you have worked in.]'
}

// TODO(content): state a real response time.
export const contactNote = 'Tell us what you are building. [Response-time promise.]'
