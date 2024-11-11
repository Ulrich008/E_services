<template>
  <footer class="mb-16 bg-black text-gray-300 p-8">
    <div class="container mx-auto grid gap-8 md:grid-cols-3">
      <div class="about">
        <h3 class="text-xl font-semibold mb-4">À propos de IoT Solutions</h3>
        <p class="text-gray-400 leading-relaxed">IoT Solutions offre des services de surveillance et de gestion d'appareils connectés, apportant des solutions innovantes pour l'Internet des objets.</p>
      </div>
      <div class="contact-info">
        <h3 class="text-xl font-semibold mb-4">Contact</h3>
        <ul class="space-y-2">
          <li><i class="fas fa-envelope text-blue-500"></i> <span>Email : contact@iotsolutions.com</span></li>
          <li><i class="fas fa-phone-alt text-blue-500"></i> <span>Téléphone : +33 1 23 45 67 89</span></li>
          <li><i class="fas fa-map-marker-alt text-blue-500"></i> <span>Adresse : 123 Rue de l'Innovation, Paris, France</span></li>
        </ul>
      </div>
      <div class="social-media">
        <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
        <div class="flex gap-6 justify-center md:justify-start">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-blue-500 transition-colors duration-300">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="hover:text-blue-400 transition-colors duration-300">
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="hover:text-blue-700 transition-colors duration-300">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-pink-500 transition-colors duration-300">
            <i class="fab fa-instagram-square fa-2x"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom Section -->
    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
      <p>&copy; 2024 IoT Solutions. Tous droits réservés.</p>
      <p class="text-sm mt-2">
        <a href="#" class="text-blue-400 hover:underline">Politique de confidentialité</a> | 
        <a href="#" class="text-blue-400 hover:underline">Conditions d'utilisation</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer a {
  transition: color 0.3s ease;
}
.footer a:hover {
  color: #60a5fa; /* Light blue hover */
}
.footer .icon {
  transition: transform 0.2s ease;
}
.footer .icon:hover {
  transform: scale(1.1); /* Slight scaling effect on hover */
}
</style>
