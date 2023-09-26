<template>
    <div class="mt-24 mb-14 md:mb-20">
      <div class="text-center">
        <h1>Technology we used</h1>
        <p class="text-xl font-semibold mt-1">To give you better experience</p>
      </div>
      <div class="bg-gray-50 mt-16 py-14 md:py-20">
        <div class="custom-container">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
            <div class="grid grid-cols-2 gap-3 lg:gap-4 xl:gap-6">
              <div v-for="tech in techData" :key="tech.id" class="flex items-center gap-3 border border-gray-200 rounded-full py-2 px-4 bg-white">
                <div><NuxtImg :src="tech.imgRgb" :alt="tech.name" :class="tech.imgHeight"  loading="lazy" /></div>
                <div>{{ tech.name }}</div>
              </div>
            </div>
            <div class="hidden md:flex justify-end">
              <NuxtImg src="/images/home/tech-1.webp" alt="Webiizard solutions" class="technology-img" :placeholder="[560, 500, 75, 5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const techData = ref([
  {
    id:1,
    name: 'React',
    imgHeight: 'h-8',
    img: '/images/home/react.svg',
    imgRgb: '/images/home/react-col.svg'
  },
  {
    id:2,
    name: 'Next',
    imgHeight: 'h-8',
    img: '/images/home/next-1.svg',
    imgRgb: '/images/home/next-2.svg'
  },
  {
    id:3,
    name: 'Redux',
    imgHeight: 'h-8',
    img: '/images/home/redux.svg',
    imgRgb: '/images/home/redux-col.svg'
  },
  {
    id:4,
    name: 'Vue',
    imgHeight: 'h-8',
    img: '/images/home/vue-2.svg',
    imgRgb: '/images/home/vue-col.svg'
  },
  {
    id:5,
    name: 'Nuxt',
    imgHeight: 'h-8',
    img: '/images/home/nuxt.svg',
    imgRgb: '/images/home/nuxt-col.svg'
  },
  {
    id:6,
    name: 'Typescript',
    imgHeight: 'h-8',
    img: '/images/home/typescript.svg',
    imgRgb: '/images/home/typescript-col.svg'
  },
  {
    id:7,
    name: 'Laravel',
    imgHeight: 'h-9',
    img: '/images/home/laravel.svg',
    imgRgb: '/images/home/laravel-col.svg'
  },
  {
    id:8,
    name: 'Node',
    imgHeight: 'h-8',
    img: '/images/home/node.svg',
    imgRgb: '/images/home/node-col.svg'
  },
  {
    id:9,
    name: 'MongoDB',
    imgHeight: 'h-8',
    img: '/images/home/mongo-db.svg',
    imgRgb: '/images/home/mongo-col.svg'
  },
  {
    id:10,
    name: 'Javascript',
    imgHeight: 'h-8',
    img: '/images/home/js.svg',
    imgRgb: '/images/home/js-col.svg'
  },
  {
    id:11,
    name: 'Tailwind',
    imgHeight: 'h-8',
    img: '/images/home/tailwind-2.svg',
    imgRgb: '/images/home/tailwind-col.svg'
  },
  {
    id:12,
    name: 'HTML',
    imgHeight: 'h-8',
    img: '/images/home/html.svg',
    imgRgb: '/images/home/html-col.svg'
  },
  {
    id:13,
    name: 'CSS',
    imgHeight: 'h-8',
    img: '/images/home/css.svg',
    imgRgb: '/images/home/css-col.svg'
  },
  {
    id:14,
    name: 'Bootstrap',
    imgHeight: 'h-7 mr-1',
    img: '/images/home/bootstrap.svg',
    imgRgb: '/images/home/bootstrap-col.svg'
  },
])
</script>