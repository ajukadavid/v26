<script setup>
import { computed, onMounted } from 'vue'

const route = useRoute()
const isEntryPage = computed(() => route.path === '/')

useHead({
  script: [
    {
      src: 'https://app.ecwid.com/script.js?129348323&data_platform=code',
      defer: true
    },
    {
      innerHTML: `
        window.ecwid_script_defer = true;
        window.ecwid_dynamic_menu = true;
        window.Ecwid && window.Ecwid.OnAPILoaded && window.Ecwid.OnAPILoaded.add(function() {
          if (document.getElementById('ecwid-initialization-widget')) {
            xMinicart("id=ecwid-initialization-widget");
          }
        });
      `,
      type: 'text/javascript'
    }
  ]
})

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
      <Navbar v-if="!isEntryPage" />
      <NuxtPage />
      <Footer v-if="!isEntryPage" />
    </div>

    <!-- Hidden Ecwid Cart Widget for API Initialization -->
    <div id="ecwid-initialization-widget" style="display: none !important;"></div>
  </div>
</template>
