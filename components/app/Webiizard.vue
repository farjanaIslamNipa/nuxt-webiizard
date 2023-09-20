<template>
      <div class="bg-white rounded-2xl px-6 sm:px-10 md:px-12 py-8 lg:py-14">
        <h1 class="mb-3 lg:mb-4">About Webiizard</h1>
        <p class="text-[15px] sm:text-base">Webiizard is the place, where creativity meets technology to craft exceptional digital experiences. We are a passionate team of web designers and developers dedicated to transforming your ideas into stunning, functional websites that leave a lasting impression.</p>
        <p class="text-[15px] sm:text-base">Two different kind of services we provide for our respectable clients and users. One can book services for one's personal or professional business websites and students/learners can find their desired web solutions to build their own websites.</p>
        <div class="mt-6 lg:mt-10">
          <div class="sm:flex gap-4 sm:gap-6 items-center">
            <div class="flex gap-1 sm:gap-2 items-center mb-3 sm:mb-0">
              <NuxtImg src="/images/about-us/services.svg" alt="Webiizard services" class="h-7 sm:h-9" />
              <AppButton route-path="#" :buttonProps="serviceButtonProps" />
            </div>
            <div class="flex gap-1 sm:gap-2 items-center">
              <NuxtImg src="/images/about-us/solution.svg" alt="Webiizard services" class="h-7 sm:h-8" />
              <AppButton route-path="#" :buttonProps="solutionButtonProps" />
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
const serviceButtonProps = {
    btnName: 'Get Services',
    btnBg : 'bg-gray-100',
    btnBorder: 'border-0',
    btnHeight: 'h-9 md:h-11',
    btnWidth: 'min-w-[120px] sm:min-w-[170px]',
    btnFont: 'text-sm sm:text-base',
    btnFw: 'font-semibold',
    btnHover: 'hover:tracking-wider hover:text-appSecondary'
}
const solutionButtonProps = {
    btnName: 'Get Solutions',
    btnBg : 'bg-gray-100',
    btnBorder: 'border-0',
    btnHeight: 'h-9 md:h-11',
    btnWidth: 'min-w-[120px] sm:min-w-[170px]',
    btnFont: 'text-sm sm:text-base',
    btnFw: 'font-semibold',
    btnHover: 'hover:tracking-wider hover:text-appSecondary'
}
</script>