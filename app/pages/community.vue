<template>
    <div class="bg-black min-h-screen text-white font-sans flex flex-col relative overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0 bg-dot-pattern animate-wave"></div>
        </div>

        <main class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-20">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-center mb-4">
                Welcome to the Vault
            </h1>
            <p class="text-white/60 text-sm md:text-base text-center mb-12 md:mb-16 uppercase tracking-[0.2em]">
                Inside the culture
            </p>

            <div class="masonry mx-auto w-full max-w-5xl">
                <article
                    v-for="(item, index) in media"
                    :key="item.src"
                    class="masonry-item group"
                    :class="{ 'masonry-item--wide': item.wide }"
                    :style="{ animationDelay: `${index * 80}ms` }"
                >
                    <div class="relative overflow-hidden bg-zinc-900">
                        <video
                            v-if="item.type === 'video'"
                            :ref="(el) => setVideoRef(el, index)"
                            class="w-full h-auto block cursor-pointer"
                            :poster="item.poster"
                            playsinline
                            loop
                            muted
                            preload="metadata"
                            @click="toggleVideo(index)"
                        >
                            <source :src="item.src" :type="item.mime" />
                        </video>

                        <img
                            v-else
                            :src="item.src"
                            :alt="item.alt"
                            class="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />

                        <button
                            v-if="item.type === 'video'"
                            type="button"
                            class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                            :aria-label="playing[index] ? 'Pause' : 'Play'"
                            @click.stop="toggleVideo(index)"
                        >
                            <svg v-if="!playing[index]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-0.5">
                                <path d="M8 5.14v14l11-7-11-7z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
                            </svg>
                        </button>
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

useHead({
    title: 'Community - Welcome to The Vault',
    meta: [
        { name: 'description', content: 'Inside the V26 culture — community, drops, and life in the Vault.' }
    ]
})

const media = [
    {
        type: 'image',
        src: '/community/community-1.jpg',
        alt: 'V26 community — staircase editorial'
    },
    {
        type: 'image',
        src: '/community/community-2.jpg',
        alt: 'V26 community — AV26 drop editorial'
    },
    {
        type: 'video',
        src: '/community/community-clip.mp4',
        mime: 'video/mp4',
        poster: '/community/community-clip-poster.jpg',
        alt: 'V26 community clip',
        wide: true
    },
    {
        type: 'video',
        src: '/v26video.webm',
        mime: 'video/webm',
        poster: '',
        alt: 'Welcome to the Vault'
    }
]

const videoRefs = ref([])
const playing = reactive({})

const setVideoRef = (el, index) => {
    if (el) videoRefs.value[index] = el
}

const toggleVideo = async (index) => {
    const video = videoRefs.value[index]
    if (!video) return

    if (video.paused) {
        try {
            await video.play()
            playing[index] = true
        } catch {
            playing[index] = false
        }
    } else {
        video.pause()
        playing[index] = false
    }
}

onMounted(() => {
    // Autoplay muted landscape clip for atmosphere
    const clipIndex = media.findIndex(item => item.src.includes('community-clip'))
    const clip = videoRefs.value[clipIndex]
    if (clip) {
        clip.muted = true
        clip.play().then(() => {
            playing[clipIndex] = true
        }).catch(() => {})
    }
})
</script>

<style scoped>
.masonry {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-content: center;
}

@media (min-width: 640px) {
    .masonry {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
    }
}

.masonry-item {
    opacity: 0;
    animation: rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media (min-width: 640px) {
    .masonry-item--wide {
        grid-column: 1 / -1;
    }
}

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(24px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.bg-dot-pattern {
    background-image: radial-gradient(circle, gray 2px, transparent 2px);
    background-size: 50px 50px;
}

@keyframes wave {
    0% { background-position: 0% 50%; }
    25% { background-position: 25% 45%; }
    50% { background-position: 50% 55%; }
    75% { background-position: 75% 45%; }
    100% { background-position: 100% 50%; }
}

.animate-wave {
    animation: wave 20s ease-in-out infinite alternate;
}
</style>
