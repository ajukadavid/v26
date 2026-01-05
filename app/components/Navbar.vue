<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/logo.png" alt="V26 Logo" class="h-10 md:h-12 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <a href="#vault" class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            The Vault
          </a>
          <a href="#about" class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            About
          </a>
          <a href="#community" class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            Community Page
          </a>
          <a href="#store" class="text-white hover:text-green-bright transition-colors font-medium text-sm tracking-wide uppercase">
            Store
          </a>
          
          <!-- Cart Icon -->
          <button class="relative text-white hover:text-green-bright transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <!-- Cart Badge -->
            <span class="absolute -top-2 -right-2 bg-green-bright text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-if="isMenuOpen"
        class="md:hidden border-t border-white/10 py-4"
      >
        <div class="flex flex-col space-y-4">
          <a 
            href="#vault" 
            class="text-white hover:text-green-bright transition-colors font-medium uppercase"
            @click="isMenuOpen = false"
          >
            The Vault
          </a>
          <a 
            href="#about" 
            class="text-white hover:text-green-bright transition-colors font-medium uppercase"
            @click="isMenuOpen = false"
          >
            About
          </a>
          <a 
            href="#community" 
            class="text-white hover:text-green-bright transition-colors font-medium uppercase"
            @click="isMenuOpen = false"
          >
            Community Page
          </a>
          <a 
            href="#store" 
            class="text-white hover:text-green-bright transition-colors font-medium uppercase"
            @click="isMenuOpen = false"
          >
            Store
          </a>
          
          <!-- Cart Button Mobile -->
          <button class="flex items-center justify-between text-white hover:text-green-bright transition-colors">
            <span class="font-medium uppercase">Cart</span>
            <span class="bg-green-bright text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>
