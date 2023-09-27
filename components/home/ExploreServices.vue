<template>
  <div class="custom-container mt-14 md:mt-20">
    <h1 class="text-center capitalize mb-4">Explore our offerings</h1>
    <p class="text-center text-lg leading-[25px]">we offer three several kind services for your personal and professional use. <br> Choose your desirable service and step ahead to your goal</p>
    <div class="grid grid-cols-12 gap-4 xl:gap-6 2xl:gap-8 mt-14 px-0 sm:px-20 md:px-0 xl:px-20 place-content-center">
      <div v-for="(service, index) in serviceDetails" :key="service.id" class="bg-white rounded-3xl card-shadow-lg p-2 cursor-pointer service-card lg:col-span-4" :class="index === 2 ? 'col-span-full md:col-span-full' : 'col-span-full md:col-span-6'" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
        <div class="bg-[#F7F9FD] p-5 relative rounded-3xl h-full">
          <div class="top-block text-center font-bold"><p class="opacity-0 highlight text-[#0b193ee5]">{{ service.serviceBtn }}</p></div>
          <div class="text-center mt-10">
            <NuxtImg :src="service.img" :alt="service.name" class="mx-auto h-24" />
            <h3 class="text-[22px] font-bold mt-5">{{ service.name }}</h3>
            <div v-if="service.features" class="space-y-2 lg:space-y-3 mt-5 pb-4 lg:pb-8">
              <P v-for="(feature, index) in service.features" :key="index">{{ feature }}</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const serviceDetails = ref([
  {
    id:1,
    bannerImg: '/images/home/service-details.svg',
    img: '/images/home/web-dev.svg',
    name: 'Web design and development',
    description:' Our expert team crafts visually stunning and user-friendly websites tailored to your brand, ensuring seamless functionality and top-notch performance. From eye-catching designs to responsive coding, we bring your digital vision to life. Transform your online presence with our comprehensive web design and development services.',
    features: [
      'Complete responsive layout',
      'Smooth functionality',
      'SEO optimized',
      'Smooth transition effects',
      'Free 6 months support',
      'On time delivery',
      'Best service in lowest price'
    ],
    serviceBtn: 'Book Service'
  },
  {
    id:2,
    bannerImg: '/images/home/service-details.svg',
    img: '/images/home/web-solution.svg',
    name: 'Web solution for learners',
    description:'Elevate your projects with our coding solution service. We provide expert programming and development expertise to tackle your toughest challenges. From custom software development to bug fixes, we deliver efficient, reliable, and scalable solutions that drive your success.',
    features: [
      'Smart and effective solutions',
      'No need to login or register',
      'solution for different languages',
      'Component based solutions',
      'Clean & professional codes',
      'free service/no charge applicable',
      'Easy to use'
    ],
    serviceBtn: 'Get Solution'
  },
  {
    id:3,
    bannerImg: '/images/home/service-details.svg',
    img: '/images/home/img-process.svg',
    name: 'Image editing/processing',
    description:'Unlock the full potential of your visuals with our professional image editing services. Our skilled team enhances and retouches your photos to perfection, ensuring they captivate and impress. From removing imperfections to adding artistic flair, we breathe life into your images, making them truly unforgettable.',
    features: [
      'Image manipulation',
      'Shadow Recreation',
      'Retouching and recoloring',
      'Image resizing',
      'Enhance image quality',
      'Adding reflection',
      'Background removal'
    ],
    serviceBtn: 'Place Order'
  },
])
</script>

<style scoped>
.top-block{
  position: absolute;
  min-height: 25px;
  width: 60%;
  background-color: white;
  border-radius: 0 0 30px 30px;
  top: 0;
  left: 50%;
  translate: -50% 0;
  transition: all 0.5s ease-out;
}
.service-card:hover .top-block{
  background-color: rgba(1, 194, 207, 0.1);
}
.service-card:hover .highlight{
  opacity: 1 !important;
  transition: all 0.5s ease-out;
}
</style>