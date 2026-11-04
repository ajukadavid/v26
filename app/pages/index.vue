<template>
  <div class="bg-black h-[100svh] w-full flex flex-col items-center justify-center px-6 overflow-hidden">
    <video autoplay muted loop playsinline preload="auto" poster="/vault-figure-poster.jpg"
      class="h-[45svh] max-h-[28rem] w-auto object-contain pointer-events-none select-none" aria-hidden="true">
      <source src="/vault-figure.webm" type="video/webm" />
      <source src="/vault-figure.mp4" type="video/mp4" />
    </video>

    <NuxtLink to="/home"
      class="enter-link mt-6 md:mt-10 text-white font-bold text-base md:text-lg px-8 py-4 uppercase tracking-wider hover:opacity-70 transition-opacity">
      Enter the Vault
    </NuxtLink>
    <p class="enter-link -mt-2 text-green-bright text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
      Possess the Culture
    </p>
  </div>
</template>

<script setup>
useHead({
  title: 'V26 - Possess The Culture'
})
</script>

<style scoped>
.enter-link {
  animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
