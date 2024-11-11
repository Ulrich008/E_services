<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<style scoped>
header {
    transition: background 0.3s ease;
}
</style>

<template>
    <header class="flex justify-between items-center p-4 bg-black fixed w-full z-10 shadow-md">
        <div class="text-2xl font-bold text-blue-600">IoT Solutions</div>

        <nav class="hidden md:flex space-x-8">
            <a href="#features" class="text-white hover:text-blue-600 active:text-blue-800">Solutions</a>
            <a href="#use-case" class="text-white hover:text-blue-600 active:text-blue-800">Cas d'usage</a>
            <a href="#docs" class="text-white hover:text-blue-600 active:text-blue-800">Documentations</a>
            <a href="#contact" class="text-white hover:text-blue-600 active:text-blue-800">Contact</a>
        </nav>

        <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
            <span v-if="!isMobileMenuOpen" class="text-3xl">&#9776;</span>
            <span v-else class="text-3xl">&times;</span> 
        </button>

        <nav v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8">
            <a href="#features" class="text-white text-2xl hover:text-blue-600" @click="toggleMobileMenu">Solutions</a>
            <a href="#use-case" class="text-white text-2xl hover:text-blue-600" @click="toggleMobileMenu">Cas d'usage</a>
            <a href="#docs" class="text-white text-2xl hover:text-blue-600" @click="toggleMobileMenu">Documentations</a>
            <a href="#contact" class="text-white text-2xl hover:text-blue-600" @click="toggleMobileMenu">Contact</a>
            <button @click="toggleMobileMenu" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
                Commencer
            </button>
        </nav>
        <button class="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Commencer</button>
    </header>
</template>
