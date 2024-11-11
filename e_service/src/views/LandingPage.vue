<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Use Cases Section -->
    <UseCasesSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Call to Action -->
    <CallToAction />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import UseCasesSection from '@/components/UseCasesSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import CallToAction from '@/components/CallToAction.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f7fa;
  color: #333;
  margin: 0;
  padding: 0;
}
</style>
