
import { useSSRContext } from 'nuxt/dist/app/compat/capi';
<template>
  <div class="about-us-header h-[550px] sm:h-[500px] lg:h-[600px]">
    <div class="custom-container h-full">
      <div class="grid grid-cols-12 items-center h-full">
        <div class="col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-7 bg-gray-200 rounded-2xl p-4">
          <div class="bg-white rounded-2xl px-6 sm:px-10 md:px-12 py-8 lg:py-14">
            <h1 class="mb-3 lg:mb-4">About Webiizard</h1>
            <p class="text-[15px] sm:text-base">Webiizard is the place, where creativity meets technology to craft exceptional digital experiences. We are a passionate team of web designers and developers dedicated to transforming your ideas into stunning, functional websites that leave a lasting impression.</p>
            <p class="text-[15px] sm:text-base">Two different kind of services we provide for our respectable clients and users. One can book services for one's personal or professional business websites and students/learners can find their desired web solutions to build their own websites.</p>
            <div class="mt-6 lg:mt-10">
              <div class="flex gap-4 sm:gap-6 items-center">
                <div class="flex gap-1 sm:gap-2 items-center">
                  <NuxtImg src="/images/about-us/services.svg" alt="Webiizard services" class="h-7 sm:h-10" />
                  <AppButton route-path="#" :buttonProps="serviceButtonProps" />
                </div>
                <div class="flex gap-1 sm:gap-[10px] items-center">
                  <NuxtImg src="/images/about-us/solution.svg" alt="Webiizard services" class="h-7 sm:h-10" />
                  <AppButton route-path="#" :buttonProps="solutionButtonProps" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const serviceButtonProps = {
    btnName: 'Get Services',
    btnBg : 'bg-gray-100',
    btnColor: 'text-brand',
    btnBorder: 'border-0',
    btnHeight: 'h-9 md:h-11',
    btnWidth: 'min-w-[120px] sm:min-w-[170px]',
    btnFont: 'text-sm sm:text-base',
    btnFw: 'font-semibold',
    textTransform: 'capitalize',
    btnPadding: 'p-4',
    btnHover: 'hover:tracking-wider hover:text-appSecondary',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
}
const solutionButtonProps = {
    btnName: 'Get Solutions',
    btnBg : 'bg-gray-100',
    btnColor: 'text-brand',
    btnBorder: 'border-0',
    btnHeight: 'h-9 md:h-11',
    btnWidth: 'min-w-[120px] sm:min-w-[170px]',
    btnFont: 'text-sm sm:text-base',
    btnFw: 'font-semibold',
    textTransform: 'capitalize',
    btnPadding: 'p-4',
    btnHover: 'hover:tracking-wider hover:text-appSecondary',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
}
</script>

<style scoped>
.about-us-header{
  background:linear-gradient(0deg, rgb(11, 25, 62, 0.3), rgb(11, 25, 62, 0.2)), url('/images/about-us/header.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  color: rgb(11, 25, 62);
  background-position: center center;
}
</style>