<template>
  <ContactHeader />
  <div class="custom-container mt-14">
    <div class="info-wrapper overflow-hidden relative py-10 px-10">
      <div class="block space-y-4 md:space-y-0 md:flex justify-between items-center">
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1200">
          <NuxtImg src="/images/home/map.svg" alt="Webiizard Location" class="h-8 lg:h-10" />
          <p>Road-9, South Banasree, Dhaka</p>
        </div>
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2" data-aos="fade-right" data-aos-delay="400" data-aos-duration="900">
          <NuxtImg src="/images/home/email.svg" alt="Webiizard email" class="h-8 lg:h-10" />
          <a href="mailto:webiizar08d@gmail.com">webiizard08@gmail.com</a>
        </div>
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
          <NuxtImg src="/images/home/phone.svg" alt="Webiizard phone" class="h-8 lg:h-10" />
          <a href="tel:01700557663">01700557663</a>
        </div>
      </div>
    </div>
  </div>
  <div class="custom-container mt-16 mb-10 md:mb-20">
    <h2 class="mb-4 text-3xl font-bold">Find us on google</h2>
    <img class="w-full" src="/images/contact-us/map.jpg" alt="">
  </div>
  <!-- <HomeBlogs /> -->
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<style scoped>
.info-wrapper{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.info-wrapper::after{
  position: absolute;
  content: '';
  height: 220px;
  width: 220px;
  border-radius: 50%;
  background-color: #01c1cf3d;
  bottom: -120px;
  right: -135px;
}
</style>