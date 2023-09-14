<template>
  <div class="custom-container mt-10">
    <h1 class="text-center mb-6">A Glimpse into Our Projects</h1>
    <p class="text-center px-32">Our gallery of stunning websites and web applications that showcase our passion for design, creativity, and technological expertise. Each project is a testament to our commitment to transforming ideas into captivating online experiences. Discover the artistry and innovation behind our web solutions</p>
    <div class="grid grid-cols-3 gap-14 mt-16">
      <div v-for="project in projectData" :key="project.id" class="relative min-h-[400px]">
        <img :src="project.img" :alt="project.name" class="h-full w-full object-cover" >
        <div class="project-hover-content bg-appSecondary bg-opacity-50 p-5 absolute bottom-5 w-[90%] mx-auto">
          <p>{{ project.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const projectData =ref([
  {
    id: 1,
    img: '/images/home/volunteer.jpg',
    name: 'Micro tech service provider',
    tools: ['Nuxt.js', 'Tailwind CSS'],
    link: ''
  },
  {
    id: 2,
    img: '/images/home/power.jpg',
    name: 'Freelance task service',
    tools: ['Nuxt.js', 'Bootstrap 5'],
    link: ''
  },
  {
    id: 3,
    img: '/images/home/online-course.jpg',
    name: 'Learning Platform',
    tools: ['React.js', 'Bootstrap 4', 'Node.js', 'MongoDB'],
    link: ''
  },
  {
    id: 4,
    img: '/images/home/power.jpg',
    name: 'Micro tech service provider',
    tools: ['Nuxt.js', 'Tailwind CSS'],
    link: ''
  },
  {
    id: 5,
    img: '/images/home/travel-guru.jpg',
    name: 'Micro tech service provider',
    tools: ['Nuxt.js', 'Tailwind CSS'],
    link: ''
  },
  {
    id: 6,
    img: '/images/home/volunteer.jpg',
    name: 'Micro tech service provider',
    tools: ['Nuxt.js', 'Tailwind CSS'],
    link: ''
  }
])
</script>

<style scoped>

</style>