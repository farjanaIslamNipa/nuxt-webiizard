<template>
  <div class="custom-container mt-20">
    <div class="flex justify-between items-end">
      <h3 class="text-2xl font-bold">Blog Bytes</h3>
      <AppButton route-path="#" :buttonProps="buttonProps" />
    </div>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
      <div v-for="blog in blogData" :key="blog.id" class="bg-white blog-card">
        <div class="bg-white h-60 w-full mb-6 overflow-hidden"><img :src="blog.img" alt="Webiizard Blog" class="h-full w-full object-cover blog-img"></div>
        <h4 class="text-lg font-bold min-h-[70px] px-4">{{ blog.title }}</h4>
        <div class="mt-4 px-4 pb-8">
          <div class="flex items-center w-1/2 mb-1">
            <div class="round"></div> <div class="line w-full"></div>
          </div>
            <NuxtLink to="#" class="font-semibold text-sm text-appSecondary w-1/2 ml-auto hover:text-brand transition-all delay-200">View Blog</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const buttonProps = {
    btnName: 'Explore More',
    btnBg : 'bg-transparent',
    btnColor: 'text-brand',
    btnBorder: 'border-0',
    btnHeight: 'h-auto',
    btnWidth: 'w-auto',
    btnFont: 'text-base',
    btnFw: 'font-semibold',
    textTransform: 'capitalize',
    btnPadding: 'pr-2',
    btnHover: 'hover:text-appSecondary',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
    icon: true,
    iconPosition: 'right',
    iconSrc: '/images/home/right-arrow.png',
    iconHeight: 'h-4',
    iconWidth: 'w-4',
    customBtnIcon: 'button-icon'
}

const blogData = ref([
  {
    id: 1,
    img: '/images/home/js.jpg',
    title: 'Main features of javascript: you must know',
    description: 'JavaScript is a lightweight scripting language developed mainly for data handling in browsers. Because it is not a general-purpose language, it has a limited number of libraries. The lightweight nature of JavaScript Code is also a good feature because it is only intended for client-side execution, specifically for web apps.',
    slug: 'main-features-of-javascript-you-must-know',
    link: '',
    date: '10-09-2023'
  },
  {
    id: 2,
    img: '/images/home/css.jpg',
    title: 'CSS tips for advanced layouts and effects',
    description: 'Knowledge of CSS is a fundamental skill in the web development space. However, implementing certain web design patterns with just CSS can be a frustrating task, and often requires an in-depth understanding of it.In this article, Toptal Freelance Web Developer Rico Mossesgeld shares several CSS tips and tricks that take advantage of lesser-known CSS features to solve real layout and design problems.',
    slug: 'css-tips-for-advanced-layouts-and-effects',
    link: '',
    date: '12-09-2023'
  },
  {
    id: 3,
    img: '/images/home/web.jpg',
    title: 'Why every business needs A website',
    description: 'The short answer is that there has never been a better or more important time to invest in a website for your business. A website offers a wide variety of benefits for small businesses, and most of these benefits increase in value exponentially year over year, just like the Internet itself.',
    slug: 'Why-every-business-needs-a-website',
    link: '',
    date: '13-09-2023'
  },
  {
    id: 4,
    img: '/images/home/img.jpg',
    title: 'Creative ways to display images on your website',
    description: 'For photography on a website to be effective, it has to be HD. You have one shot at making a good impression, and it starts here. Make sure the photos you use are top-notch quality. You’re aiming for a sophisticated look that will also reflect you as a professional. Having a blurry image will likely make your visitors question the quality of your services.',
    slug: 'creative-ways-to-display-images-on-your-website',
    link: '',
    date: '10-09-2023'
  }
])
</script>

<style scoped>
.round {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--secondaryColor);
}
.line{
    border-top: 1px solid var(--secondaryColor);
}
.blog-card{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* transition: transform 0.5s ease-in; */

}
.blog-img{
  -webkit-transition: 0.8s;
    -moz-transition: 0.8s;
    -o-transition: 0.8s;
    -ms-transition: 0.8s;
    transition: 0.8s;
}
.blog-card:hover .blog-img{
  -moz-transform: scale(1.5) rotate(0deg);
  -webkit-transform: scale(1.5) rotate(0deg);
  -o-transform: scale(1.5) rotate(0deg);
  -ms-transform: scale(1.5) rotate(0deg);
  transform: scale(1.5) rotate(0deg);
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;
  -o-transition: 0.8s;
  -ms-transition: 0.8s;
  transition: 0.8s;
}
</style>