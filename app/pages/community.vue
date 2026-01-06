<template>
    <div class="bg-black min-h-screen text-white font-sans flex flex-col relative overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0 bg-dot-pattern animate-wave"></div>
        </div>

        <!-- Main Content -->
        <main
            class="main-container flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-20 w-full mx-auto text-center relative z-10">
            <h1 class="page-title text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16">
                WELCOME TO THE VAULT
            </h1>

            <!-- Premium Video Player -->
            <div class="video-container mx-auto desktop-video">
                <video ref="videoPlayer" class="premium-video-player" preload="metadata" playsinline loop autoplay
                    :poster="videoPoster" @loadedmetadata="onVideoLoaded" @error="onVideoError" @click="togglePlay">
                    <source src="/v26video.webm" type="video/webm">
                    <p class="text-gray-400">Your browser doesn't support HTML5 video.</p>
                </video>

                <!-- Custom Mute/Unmute Button -->
                <button @click="toggleMute" class="mute-button" :class="{ 'muted': isMuted }" aria-label="Toggle mute">
                    <svg v-if="!isMuted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                </button>

                <!-- Loading Indicator -->
                <!-- <div v-if="isLoading" class="loading-overlay">
                    <div class="loading-spinner"></div>
                </div> -->
            </div>


        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Video player state
const videoPlayer = ref(null)
const isLoading = ref(true)
const videoPoster = ref('')
const isMuted = ref(false)

// Set page meta
useHead({
    title: 'Community - Welcome to The Vault',
    meta: [
        { name: 'description', content: 'Our commitment to sustainability and ethical fashion.' }
    ]
})

// Video event handlers
const onVideoLoaded = () => {
    isLoading.value = false
}

const onVideoError = (error) => {
    console.error('Video loading error:', error)
    isLoading.value = false
}

// Toggle mute/unmute
const toggleMute = () => {
    if (videoPlayer.value) {
        videoPlayer.value.muted = !videoPlayer.value.muted
        isMuted.value = videoPlayer.value.muted
    }
}

// Toggle play/pause
const togglePlay = () => {
    if (videoPlayer.value) {
        if (videoPlayer.value.paused) {
            videoPlayer.value.play()
        } else {
            videoPlayer.value.pause()
        }
    }
}

// Optional: Auto-play on mount (with user interaction)
onMounted(() => {
    // Ensure video plays automatically
    if (videoPlayer.value) {
        // Try to play unmuted first
        const playPromise = videoPlayer.value.play()

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Video is playing unmuted successfully
                    console.log('Video autoplay started with sound')
                })
                .catch((error) => {
                    // Autoplay with sound was prevented, try muted
                    console.log('Autoplay with sound blocked, trying muted:', error)
                    videoPlayer.value.muted = true
                    isMuted.value = true
                    videoPlayer.value.play()
                        .then(() => {
                            console.log('Video autoplay started muted')
                        })
                        .catch((err) => {
                            console.error('Autoplay failed completely:', err)
                        })
                })
        }
    }
})
</script>

<style scoped>
/* Ensure legible text on small screens */
p {
    font-weight: 300;
}

/* Video Container */
.video-container {
    position: relative;
    width: 100%;
    margin: 2rem auto;
}

/* Desktop: Wide layout (80% width) */
.desktop-video {
    width: 80%;
    max-width: 80vw;
}

/* Premium Video Player Styling */
.premium-video-player {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(34, 197, 94, 0.2),
        0 0 80px rgba(34, 197, 94, 0.15);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    object-fit: cover;
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(30, 30, 30, 0.95) 100%);
    cursor: pointer;
}

.premium-video-player:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.6),
        0 0 60px rgba(34, 197, 94, 0.3),
        0 0 120px rgba(34, 197, 94, 0.2);
}

/* Custom Mute Button */
.mute-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 20;
}

.mute-button:hover {
    background: rgba(16, 185, 129, 0.8);
    border-color: rgba(16, 185, 129, 1);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.mute-button:active {
    transform: scale(0.95);
}

.mute-button.muted {
    background: rgba(34, 197, 94, 0.6);
    border-color: rgba(34, 197, 94, 0.4);
}

.mute-button.muted:hover {
    background: rgba(34, 197, 94, 0.8);
    border-color: rgba(34, 197, 94, 1);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
}

/* Loading Overlay */
.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 24px;
    backdrop-filter: blur(10px);
    z-index: 10;
}

/* Loading Spinner */
.loading-spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #9333ea;
    border-right: 4px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {

    /* Mobile: Portrait layout (narrower, taller) */
    .main-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .page-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .desktop-video {
        width: 95%;
        max-width: 500px;
        margin: 0 auto;
    }

    .premium-video-player {
        border-radius: 16px;
        height: 65vh;
        min-height: 50vh;
        max-height: 65vh;
        object-fit: cover;
    }

    .premium-video-player:hover {
        transform: translateY(-2px) scale(1.005);
    }

    .mute-button {
        width: 48px;
        height: 48px;
        bottom: 16px;
        right: 16px;
    }
}

.bg-dot-pattern {
    background-image: radial-gradient(circle, gray 2px, transparent 2px);
    background-size: 50px 50px;
}

@keyframes wave {
    0% {
        background-position: 0% 50%;
    }

    25% {
        background-position: 25% 45%;
    }

    50% {
        background-position: 50% 55%;
    }

    75% {
        background-position: 75% 45%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.animate-wave {
    animation: wave 20s ease-in-out infinite alternate;
}
</style>
