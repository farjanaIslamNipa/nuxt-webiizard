<template>
  <div class="custom-container">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-10 mt-4 md:mt-10 lg:mt-12 xl:mt-14">
      <div class="">
        <NuxtImg src="/images/home/header.webp" alt="Webiizard" :placeholder="[850, 550, 75, 5]" />
      </div>
      <div class="pl-0 md:pl-4 xl:pl-10 2xl:pl-20 text-brand">
        <h1>Elevate your online</h1>
        <h1>presence to new heights</h1>
        <div class="pl-1 my-4 lg:my-6">
          <p class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4d4d4d" height="17px" width="17px" version="1.1" id="Layer_1" viewBox="0 0 329.954 329.954" xml:space="preserve">
            <path id="XMLID_224_" d="M325.56,73.335l-42.427-42.426c-5.857-5.857-15.355-5.858-21.213,0L110.461,182.37l-42.428-42.428  c-2.813-2.813-6.628-4.394-10.606-4.394c-3.978,0-7.794,1.581-10.607,4.394L4.393,182.369c-5.857,5.858-5.857,15.355,0,21.213  l95.457,95.463c2.813,2.813,6.629,4.393,10.607,4.393c3.978,0,7.794-1.581,10.606-4.393L325.56,94.548  c2.813-2.813,4.394-6.628,4.394-10.606C329.954,79.963,328.373,76.148,325.56,73.335z M110.458,267.225l-74.245-74.249  l21.214-21.214l42.428,42.428c2.813,2.813,6.628,4.394,10.606,4.394c3.979,0,7.793-1.581,10.607-4.394L272.527,62.728l21.213,21.213  L110.458,267.225z"/>
            </svg>
            <span class="text-base lg:text-lg">Web design and development</span>
          </p>
          <p class="flex gap-2 items-center my-2 lg:my-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4d4d4d" height="17px" width="17px" version="1.1" id="Layer_1" viewBox="0 0 329.954 329.954" xml:space="preserve">
            <path id="XMLID_224_" d="M325.56,73.335l-42.427-42.426c-5.857-5.857-15.355-5.858-21.213,0L110.461,182.37l-42.428-42.428  c-2.813-2.813-6.628-4.394-10.606-4.394c-3.978,0-7.794,1.581-10.607,4.394L4.393,182.369c-5.857,5.858-5.857,15.355,0,21.213  l95.457,95.463c2.813,2.813,6.629,4.393,10.607,4.393c3.978,0,7.794-1.581,10.606-4.393L325.56,94.548  c2.813-2.813,4.394-6.628,4.394-10.606C329.954,79.963,328.373,76.148,325.56,73.335z M110.458,267.225l-74.245-74.249  l21.214-21.214l42.428,42.428c2.813,2.813,6.628,4.394,10.606,4.394c3.979,0,7.793-1.581,10.607-4.394L272.527,62.728l21.213,21.213  L110.458,267.225z"/>
            </svg>
            <span class="text-base lg:text-lg">Web solution</span>
          </p>
          <p class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4d4d4d" height="17px" width="17px" version="1.1" id="Layer_1" viewBox="0 0 329.954 329.954" xml:space="preserve">
            <path id="XMLID_224_" d="M325.56,73.335l-42.427-42.426c-5.857-5.857-15.355-5.858-21.213,0L110.461,182.37l-42.428-42.428  c-2.813-2.813-6.628-4.394-10.606-4.394c-3.978,0-7.794,1.581-10.607,4.394L4.393,182.369c-5.857,5.858-5.857,15.355,0,21.213  l95.457,95.463c2.813,2.813,6.629,4.393,10.607,4.393c3.978,0,7.794-1.581,10.606-4.393L325.56,94.548  c2.813-2.813,4.394-6.628,4.394-10.606C329.954,79.963,328.373,76.148,325.56,73.335z M110.458,267.225l-74.245-74.249  l21.214-21.214l42.428,42.428c2.813,2.813,6.628,4.394,10.606,4.394c3.979,0,7.793-1.581,10.607-4.394L272.527,62.728l21.213,21.213  L110.458,267.225z"/>
            </svg>
            <span class="text-base lg:text-lg">And much more</span>
          </p>
        </div>
        <div class="inline-block">
          <AppButton route-path="/services" :buttonProps="buttonProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const buttonProps = {
    btnName: 'Explore Services',
    btnBorder: 'border border-gray-400 rounded-sm',
    btnHeight: 'h-9 md:h-12',
    btnWidth: 'min-w-[170px] lg:min-w-[200px]',
    btnFw: 'font-semibold',
    btnPadding: 'p-4',
    btnHover: 'hover:tracking-wider hover:text-appSecondary',
}
</script>
<style>

</style>