<template>
  <div class="custom-container mt-12">
    <h1 class="text-center mb-6">A Glimpse into Our Projects</h1>
    <p class="text-center px-0 xl:px-32">Our gallery of stunning websites and web applications that showcase our passion for design, creativity, and technological expertise. Each project is a testament to our commitment to transforming ideas into captivating online experiences. Discover the artistry and innovation behind our web solutions</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-14 mt-16">
      <div v-for="project in projectData" :key="project.id" class="relative min-h-[400px] project-card cursor-pointer">
        <NuxtImg :src="project.img" :alt="project.name" class="h-full w-full object-cover" />
        <div class="project-hover-content bg-appSecondary bg-opacity-80 h-16 absolute bottom-5 w-[90%] left-[50%] translate-x-[-50%]">
          <div class="flex justify-between h-full items-center">
            <p class="text-white font-bold text-xl pl-2">{{ project.name }}</p>
            <div class="bg-white w-10 h-full flex items-center justify-center"><img class="h-6" src="/images/home/right-arrow.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between items-center">
      <div class="border border-t-gray-300 border-b-0 w-full"></div>
      <AppButton route-path="#" :buttonProps="buttonProps" />
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

const buttonProps = {
    btnName: 'Explore More',
    btnBorder: 'border border-gray-300 rounded-sm',
    btnHeight: 'h-9 md:h-12',
    btnWidth: 'min-w-[170px]',
    btnFw: 'font-semibold',
    btnHover: 'hover:tracking-wider hover:text-appSecondary'
}
</script>

<style scoped>
.project-card:hover .project-hover-content{
  opacity: 1;
  transition: all 0.5s ease;
}
.project-hover-content{
  opacity: 0;
}
</style>