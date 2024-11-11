<script setup>
import { ref } from 'vue';

const usesCases = ref([
    {
        id: 1,
        title: "Agriculture Intelligente",
        description: "Optimisez les ressources en surveillant les conditions environnementales."
    },
    {
        id: 2,
        title: "Santé connectée",
        description: "Surveillez les signes vitaux et les appareils médicaux à distance."
    },
    {
        id: 3,
        title: "Villes intelligentes",
        description: "Améliorez l'efficacité urbaine grâce à la surveillance des infrastructures."
    },
    {
        id: 4,
        title: "Industrie 4.0",
        description: "Automatisez et optimisez les processus industriels avec des données en temps réel."
    }
]);
</script>

<style scoped>
.use-case-card {
    transition: transform 0.3s ease;
}
.use-case-card:hover {
    transform: translateY(-10px);
}
.scroll-container {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 1rem;
    scroll-behavior: smooth;
}
.scroll-container::-webkit-scrollbar {
    display: none;
}
</style>

<template>
    <section id="use-case" class="py-16 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center text-blue-600 mb-8">Cas d'Usage</h2>
            <div class="scroll-container space-x-4 px-8">
                <div v-for="caseItem in usesCases" :key="caseItem.id" class="use-case-card flex-shrink-0 w-80 h-full p-6 bg-white shadow-md rounded-lg snap-start">
                    <h3 class="text-xl text-center font-semibold mb-2">{{ caseItem.title }}</h3>
                    <p class="text-gray-600 text-center">{{ caseItem.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
