<script setup>
import { ref } from 'vue';

const testimonials = ref([
    {
        name: "Alice Dupont",
        position: "Directrice Technique",
        message: "La plateforme IoT a révolutionné notre façon de surveiller nos dispositifs en temps réel",
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
        name: "Marc Lemoine",
        position: "Ingénieur IoT",
        message: "Une solution incroyablement simple pour connecter et gérer nos appareils à distance",
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: "Sophie Martin",
        position: "Chef de projet IT",
        message: "L'intégration et la collecte des données se font sans effort. Une excellente plateforme !",
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
]);
</script>

<template>
    <section id="testimonials" class="py-16 bg-white">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center text-blue-600 mb-8">Ce que les utilisateurs disent</h2>
            <div class="grid gap-8 md:grid-cols-3">
                <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
                    <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full mb-4"/>
                    <p class="text-gray-700 italic text-center mb-4">"{{ testimonial.message }}"</p>
                    <h3 class="font-semibold text-center">{{ testimonial.name }}</h3>
                    <p class="text-sm text-gray-500 text-center">{{ testimonial.position }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonial-card {
    transition: transform 0.3s ease;
}
.testimonial-card:hover {
    transform: translateY(-5px);
}
</style>
