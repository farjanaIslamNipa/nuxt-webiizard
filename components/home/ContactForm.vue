<template>
  <div class="mt-20 bg-gray-100 pt-12 pb-16 md:pb-20">
    <div class="custom-container">
      <h1 class="text-center">Have Questions? Contact us</h1>
      <div class="mt-8 md:mt-14 bg-white mx-0 sm:mx-10 md:mx-0 xl:mx-20 2xl:mx-36 rounded-2xl pl-8 lg:pl-10 2xl:pl-20 pr-8 lg:pr-16 2xl:pr-24 py-12">
        <div class="grid grid-cols-12 gap-0 md:gap-8">
          <div class="col-span-5 hidden lg:block">
            <NuxtImg src="/images/home/phone-3.webp" alt="Contact us" class="p-0 xl:p-4" /> 
          </div>
          <div class="col-span-12 lg:col-span-7 pt-0 md:pt-2 xl:pt-8">
            <div class="">
              <p class="font-semibold text-xl mb-3 ">Fill this form, it's easy</p>
              <div class="mb-3">
                <label for="">Name</label>
                <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your name">
              </div>
              <div class="mb-3">
                <label for="">Email</label>
                <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address">
              </div>
              <div class="mb-5">
                <label for="">Message</label>
                <textarea name="" id="" cols="30" rows="3" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address"></textarea>
              </div>
              <button class="brand-outline-button text-appSecondary">Send Message</button>
            </div>
          </div>
        </div>
        <div class="block space-y-4 md:space-y-0 md:flex justify-between items-center pt-14 pb-2">
          <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src="/images/home/map.svg" alt="Webiizard Location" class="h-8 lg:h-10">
            <p>Road-9, South Banasree, Dhaka</p>
          </div>
          <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src="/images/home/email.svg" alt="Webiizard email" class="h-8 lg:h-10">
            <a href="emailTo:webiizard@gmail.com">webiizard@gmail.com</a>
          </div>
          <div class="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src="/images/home/phone.svg" alt="Webiizard phone" class="h-8 lg:h-10">
            <a href="tel:01700557663">01700557663</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.contact-form-left-side{
  background-image: url('/images/home/ab-1.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
  border-radius: 16px 0 0 0;

}
.contact-card{
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
}
/* py-8 lg:py-12 px-4 lg:px-12 */
</style>