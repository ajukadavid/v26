<template>
  <nav
    :class="['fixed top-0 left-0 right-0 z-50 transition-colors duration-300', isScrolled ? 'bg-black' : 'bg-transparent']">
    <div class="px-8 md:px-16 lg:px-24 py-2">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="/logo.png" alt="V26 Logo" class="h-10 md:h-12 w-auto" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <NuxtLink to="/"
            class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            The Vault
          </NuxtLink>
          <NuxtLink to="/about"
            class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            About
          </NuxtLink>
          <NuxtLink to="/community"
            class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            Community Page
          </NuxtLink>
          <NuxtLink to="/vault"
            class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            Store
          </NuxtLink>

          <!-- Cart Icon -->
          <button class="relative text-white hover:text-green-bright transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <!-- Cart Badge -->
            <span
              class="absolute -top-2 -right-2 bg-green-bright text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation with Transition -->
      <Transition name="slide-fade">
        <div v-if="isMenuOpen"
          class="md:hidden fixed left-0 top-20 bg-black/80 backdrop-blur-sm rounded-r-lg overflow-hidden w-full shadow-2xl">
          <div class="flex flex-col space-y-1 py-6 px-4 items-start">
            <NuxtLink to="/"
              class="text-white hover:text-green-bright transition-colors font-medium uppercase py-3 px-4 hover:bg-white/5 rounded-lg text-left w-full"
              @click="isMenuOpen = false">
              The Vault
            </NuxtLink>
            <NuxtLink to="/about"
              class="text-white hover:text-green-bright transition-colors font-medium uppercase py-3 px-4 hover:bg-white/5 rounded-lg text-left w-full"
              @click="isMenuOpen = false">
              About
            </NuxtLink>
            <NuxtLink to="/community"
              class="text-white hover:text-green-bright transition-colors font-medium uppercase py-3 px-4 hover:bg-white/5 rounded-lg text-left w-full"
              @click="isMenuOpen = false">
              Community Page
            </NuxtLink>
            <NuxtLink to="/vault"
              class="text-white hover:text-green-bright transition-colors font-medium uppercase py-3 px-4 hover:bg-white/5 rounded-lg text-left w-full"
              @click="isMenuOpen = false">
              Store
            </NuxtLink>

            <!-- Cart Button Mobile -->
            <button
              class="flex items-center justify-between text-white hover:text-green-bright transition-colors py-3 px-4 hover:bg-white/5 rounded-lg mt-2 border-t border-white/10 pt-5 w-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span
                class="bg-green-bright text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Slide and fade animation from left */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
