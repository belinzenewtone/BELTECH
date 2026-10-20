<script setup lang="ts">
const { public: config } = useRuntimeConfig()

type Status = 'idle' | 'sending' | 'sent' | 'error'
const status = ref<Status>('idle')
const form = reactive({ name: '', email: '', message: '', website: '' })

const hasEndpoint = computed(() => Boolean(config.formEndpoint))
const hasEmail = computed(() => Boolean(config.contactEmail))
const enabled = computed(() => hasEndpoint.value || hasEmail.value)

async function submit() {
  // Honeypot: bots fill the hidden field.
  if (form.website) return

  if (hasEndpoint.value) {
    status.value = 'sending'
    try {
      const res = await fetch(config.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      })
      if (!res.ok) throw new Error(String(res.status))
      status.value = 'sent'
      Object.assign(form, { name: '', email: '', message: '' })
    } catch {
      status.value = 'error'
    }
    return
  }

  const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
  window.location.href = `mailto:${config.contactEmail}?subject=${subject}&body=${body}`
}
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <label class="field">
      Name
      <input v-model="form.name" type="text" name="name" autocomplete="name" required>
    </label>
    <label class="field">
      Email
      <input v-model="form.email" type="email" name="email" autocomplete="email" required>
    </label>
    <label class="field">
      Message
      <textarea v-model="form.message" name="message" rows="5" required />
    </label>
    <label class="honeypot" aria-hidden="true">
      Website
      <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
    </label>
    <button class="button button--primary" type="submit" :disabled="!enabled || status === 'sending'">
      {{ status === 'sending' ? 'Sending…' : 'Send message' }}
    </button>
    <p v-if="!enabled" class="form-status" role="status">
      The contact form is not configured yet.
    </p>
    <p v-else-if="status === 'sent'" class="form-status" role="status">
      Thanks. Your message has been sent.
    </p>
    <p v-else-if="status === 'error'" class="form-status form-status--error" role="alert">
      The message could not be sent. Please try again.
    </p>
  </form>
</template>
