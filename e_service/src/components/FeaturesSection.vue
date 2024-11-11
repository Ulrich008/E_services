<script setup>
import { ref } from 'vue';
import AnalyseIcon from '../assets/analyse.png';
import databaseIcon from '../assets/database.png';
import SimplicityIcon from '../assets/simplicity.png';

const features = ref([
    {
        title: "Suivie en temps réel",
        description: "Visualisez les donées de vos appareils instaténement",
        icon: AnalyseIcon,
    },
    {
        title: "Collete de données",
        description: "Stockez et analysez les informations de vos dispositifs Iot",
        icon: databaseIcon,
    },
    {
        title: "Gestion à distance",
        description: "Prenez le contrôle de vos apparareil où que vous soyez",
        icon: SimplicityIcon
    }
])
</script>
<style scoped>
.feature-card{
    border:1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s ease;
}
.feature-card{
    transform: translateY(-5px);
}
</style>



<template>
    <section id="features" class="py-16 bg-white">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center text-blue-600 mb-8">Functionnalités Clés</h2>
            <div class="grid gap-8 md:grid-cols-3">
                <div class="features-card" v-for="feature in features" :key="feature.title">
                    <img :src="feature.icon" alt="" class="w-12 h-12 mx-auto mb-4"/>
                    <h3 class="text-xl font-semibold text-center">{{ feature.title }}</h3>
                    <p class="text-center text-gray-600">{{ feature.description }}</p>
                </div>
            </div>

        </div>

    </section>
</template>