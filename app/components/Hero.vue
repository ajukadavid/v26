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
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
          POSSESS<br />
          THE CULTURE
        </h1>

        <NuxtLink to="/vault"
          class="bg-green-bright text-black font-bold text-lg px-8 py-4 w-fit hover:opacity-90 transition-opacity inline-block">
          ENTER THE VAULT
        </NuxtLink>
      </div>

      <!-- Bottom Text -->
      <div class="mb-20">
        <p class="text-white text-sm md:text-base font-light max-w-xs leading-relaxed">
          V26 IS MORE THAN CLOTHING.<br />
          WE ARE A HAVEN FOR THOSE<br />
          BUILDING QUIETLY.
        </p>
      </div>
    </div>

    <!-- Scrolling Ticker at Bottom -->
    <div
      class="absolute bottom-0 left-0 right-0 bg-green-bright text-black py-3 overflow-hidden z-20 -rotate-2 transform origin-bottom-left">
      <div class="ticker-wrapper">
        <div class="ticker-content">
          <span class="ticker-item">RESPONSIBLY MADE</span>
          <span class="ticker-item">BUILT FOR THE STREETS</span>
          <span class="ticker-item">LIMITED DROPS ONLY</span>
          <span class="ticker-item">DESIGNED FOR EVERYDAY WEAR</span>
          <span class="ticker-item">MODERN STREETWEAR</span>
          <span class="ticker-item">RESPONSIBLY MADE</span>
          <span class="ticker-item">BUILT FOR THE STREETS</span>
          <span class="ticker-item">LIMITED DROPS ONLY</span>
          <span class="ticker-item">DESIGNED FOR EVERYDAY WEAR</span>
          <span class="ticker-item">MODERN STREETWEAR</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticker-wrapper {
  width: 100%;
  overflow: hidden;
}

.ticker-content {
  display: flex;
  animation: scroll 30s linear infinite;
  white-space: nowrap;
}

.ticker-item {
  display: inline-block;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0 1rem;
}

.ticker-item::after {
  content: "";
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  background-image: url('/v26logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(0);
  vertical-align: middle;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@media (min-width: 768px) {
  .ticker-item {
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  .ticker-item::after {
    width: 2rem;
    height: 2rem;
    margin-left: 1.5rem;
  }
}
</style>