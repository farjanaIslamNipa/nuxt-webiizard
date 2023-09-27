<template>
  <div class="custom-container mt-14 sm:mt-20 mb-10 md:mb-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      <div class="order-2 lg:order-1">
        <h3 class="text-2xl font-bold mb-4">Our Services</h3>
        <p>Our design team crafts visually stunning websites that captivate your audience and reflect your brand's personality. Our developers bring your vision to life with robust, user-friendly websites that function seamlessly.</p>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-4 xl:gap-6 mt-8">
          <div v-for="tech in techData" :key="tech.id" class="flex items-center gap-3 rounded-full py-3 px-4 bg-white service-card" data-aos="zoom-in-down" data-aos-delay="300" data-aos-duration="800">
            <div class="text-appPrimary font-bold bg-brand h-7 w-7 text-lg rounded-full flex justify-center items-center">w</div>
            <p class="font-semibold">{{ tech.name }}</p>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2">
        <NuxtImg src="/images/about-us/about-service.webp" />
      </div>
    </div>
  </div>
</template>

<script setup>
const techData = [
  {
    id:1,
    name: 'Web Design'
  },
  {
    id:2,
    name: 'Web Development'
  },
  {
    id:3,
    name: 'E-commerce Solutions'
  },
  {
    id:4,
    name: 'Maintenance and Support',
  },
  {
    id:5,
    name: 'Image Processing'
  }
]
</script>

<style scoped>
.service-card{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>