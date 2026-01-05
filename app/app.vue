<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister()
      }
    })
  }
})
</script>

<template>
  <div class="bg-black min-h-screen">
    <div>
      <Navbar />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>
