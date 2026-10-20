<script setup lang="ts">
import { about, contactNote, services, site, work } from '~/data/site'

const { public: config } = useRuntimeConfig()
const canonical = config.siteUrl ? config.siteUrl.replace(/\/$/, '') + '/' : undefined

useHead({
  title: `${site.name} | Backend and cloud engineering`,
  link: canonical ? [{ rel: 'canonical', href: canonical }] : []
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
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="container">
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="BELTECH, back to top">{{ site.name }}</a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="main">
      <section id="top" class="hero">
        <h1>{{ site.headline }}</h1>
        <p>{{ site.intro }}</p>
        <div class="actions">
          <a class="button button--primary" href="#contact">Start a project</a>
          <a class="button" href="#work">View work</a>
        </div>
      </section>

      <section id="services" class="section" aria-labelledby="services-title">
        <h2 id="services-title" class="section-title">Services</h2>
        <ul class="rows">
          <li v-for="service in services" :key="service.name" class="row">
            <h3 class="row-name">{{ service.name }}</h3>
            <p class="row-text">{{ service.description }}</p>
          </li>
        </ul>
      </section>

      <section id="work" class="section" aria-labelledby="work-title">
        <h2 id="work-title" class="section-title">Work</h2>
        <ul class="rows">
          <li v-for="(project, i) in work" :key="i" class="row">
            <h3 class="row-name">
              <a v-if="project.href" :href="project.href" rel="noopener">{{ project.name }}</a>
              <template v-else>{{ project.name }}</template>
            </h3>
            <p class="row-text">{{ project.summary }}</p>
            <p class="row-meta">{{ project.stack }}</p>
          </li>
        </ul>
      </section>

      <section id="about" class="section" aria-labelledby="about-title">
        <h2 id="about-title" class="section-title">About</h2>
        <div class="prose">
          <p>{{ about.lead }}</p>
          <p>{{ about.body }}</p>
        </div>
      </section>

      <section id="contact" class="section" aria-labelledby="contact-title">
        <div class="contact">
          <div class="contact-intro">
            <h2 id="contact-title" class="section-title" style="margin-bottom: 1.25rem">Contact</h2>
            <p>{{ contactNote }}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>© {{ year }} {{ site.name }}. {{ site.location }}.</span>
      <ul>
        <li v-for="link in site.social" :key="link.label">
          <a :href="link.href" rel="noopener">{{ link.label }}</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
