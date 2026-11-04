<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img src="/hero.png" alt="Hero Background" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">
      <!-- Main Hero Content -->
      <div class="flex-1 flex flex-col justify-center">
        <NuxtLink to="/vault"
          class="bg-white text-black font-bold text-lg px-8 py-4 w-fit hover:opacity-90 transition-opacity inline-block">
          ACCESS THE DROP
        </NuxtLink>
      </div>

      <!-- Bottom Text -->
      <div class="mb-8">
        <p class="text-white text-sm md:text-base font-light max-w-xs leading-relaxed">
          V26 IS MORE THAN CLOTHING.<br />
          WE ARE A HAVEN FOR THOSE<br />
          BUILDING QUIETLY.
        </p>
      </div>
    </div>
  </div>
</template>
