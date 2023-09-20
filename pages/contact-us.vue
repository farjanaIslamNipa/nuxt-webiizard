<template>
  <ContactHeader />
  <div class="custom-container mt-14">
    <div class="info-wrapper overflow-hidden relative py-10 px-10">
      <div class="block space-y-4 md:space-y-0 md:flex justify-between items-center">
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
          <NuxtImg src="/images/home/map.svg" alt="Webiizard Location" class="h-8 lg:h-10" />
          <p>Road-9, South Banasree, Dhaka</p>
        </div>
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
          <NuxtImg src="/images/home/email.svg" alt="Webiizard email" class="h-8 lg:h-10" />
          <a href="emailTo:webiizard@gmail.com">webiizard@gmail.com</a>
        </div>
        <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
          <NuxtImg src="/images/home/phone.svg" alt="Webiizard phone" class="h-8 lg:h-10" />
          <a href="tel:01700557663">01700557663</a>
        </div>
      </div>
    </div>
  </div>
  <HomeBlogs />
</template>

<script setup>

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