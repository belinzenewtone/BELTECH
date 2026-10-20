<script setup lang="ts">
import { about, approach, contact, glance, reasons, services, site, work } from '~/data/site'

const { public: config } = useRuntimeConfig()
const canonical = config.siteUrl ? config.siteUrl.replace(/\/$/, '') + '/' : undefined

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`

useHead({
  title: `${site.name} | Backend and cloud engineering`,
  link: canonical ? [{ rel: 'canonical', href: canonical }] : [],
  script: [{ innerHTML: themeScript, tagPosition: 'head', tagPriority: 'critical' }]
})
useSeoMeta({
  description: site.description,
  ogTitle: `${site.name} | Backend and cloud engineering`,
  ogDescription: site.description,
  ogType: 'website',
  ogUrl: canonical,
  twitterCard: 'summary'
})

const year = new Date().getFullYear()
const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' }
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="container site-header__inner">
      <a class="wordmark" href="#top" aria-label="BELTECH, back to top">{{ site.name }}</a>
      <nav class="site-nav" aria-label="Primary">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <div class="site-header__actions">
        <ThemeToggle />
        <a class="button button--primary button--small" href="#contact">Contact us</a>
      </div>
    </div>
  </header>

  <main id="main">
    <section id="top" class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <p class="eyebrow">{{ site.eyebrow }}</p>
          <h1>{{ site.headline }}</h1>
          <p class="lead">{{ site.intro }}</p>
          <div class="actions">
            <a class="button button--primary" href="#contact">Talk to us</a>
            <a class="button" href="#services">Our services</a>
          </div>
        </div>
        <aside class="glance" aria-label="Company at a glance">
          <dl>
            <div v-for="item in glance" :key="item.label" class="glance__row">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section id="services" class="section" aria-labelledby="services-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">What we do</h2>
        </header>
        <div class="grid grid--2">
          <article v-for="service in services" :key="service.name" class="card">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
            <ul class="checklist">
              <li v-for="point in service.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="approach" class="section section--alt" aria-labelledby="approach-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow">Approach</p>
          <h2 id="approach-title">How we work</h2>
        </header>
        <ol class="steps">
          <li v-for="(item, i) in approach" :key="item.step" class="step">
            <span class="step__number" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ item.step }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section" aria-labelledby="why-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow">Why BELTECH</p>
          <h2 id="why-title">What you can expect from us</h2>
        </header>
        <div class="grid grid--3">
          <div v-for="reason in reasons" :key="reason.title" class="reason">
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="section section--alt" aria-labelledby="work-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow">Work</p>
          <h2 id="work-title">Selected projects</h2>
        </header>
        <div class="grid grid--3">
          <article v-for="(project, i) in work" :key="i" class="card card--case">
            <p class="card__meta">{{ project.client }}</p>
            <h3>
              <a v-if="project.href" :href="project.href" rel="noopener">{{ project.title }}</a>
              <template v-else>{{ project.title }}</template>
            </h3>
            <p>{{ project.summary }}</p>
            <p class="card__stack">{{ project.stack }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container about">
        <header class="section__head">
          <p class="eyebrow">About</p>
          <h2 id="about-title">A focused engineering partner</h2>
        </header>
        <div class="prose">
          <p>{{ about.lead }}</p>
          <p>{{ about.body }}</p>
        </div>
      </div>
    </section>

    <section id="contact" class="section section--cta" aria-labelledby="contact-title">
      <div class="container contact">
        <div class="contact__intro">
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">{{ contact.title }}</h2>
          <p class="lead">{{ contact.text }}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div>
        <p class="wordmark">{{ site.name }}</p>
        <p class="site-footer__note">Backend and cloud engineering. {{ site.location }}.</p>
      </div>
      <nav aria-label="Footer">
        <ul class="site-footer__links">
          <li v-for="item in nav" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
          <li><a href="#contact">Contact</a></li>
          <li v-for="link in site.social" :key="link.label">
            <a :href="link.href" rel="noopener">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container site-footer__legal">© {{ year }} {{ site.name }}. All rights reserved.</div>
  </footer>
</template>
