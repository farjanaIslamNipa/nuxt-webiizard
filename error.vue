<template>
    <div style="height: 100vh; overflow: hidden;">
      <div class="custom-container flex justify-center items-center h-full">
        <div>
          <h1 class="text-center mb-6">SORRY!! Page not found: {{ error.statusCode }}</h1>
          <img src="/images/global/error.jpg" class="h-[600px] error-img" />
         <div class="flex justify-center mt-6"><NuxtLink to="/" class="border border-gray-400 rounded-sm px-12 py-4 font-semibold">Back to home</NuxtLink></div>
        </div>
      </div>

    </div>
</template>

<script setup>
const error = useError();
</script>

<style>
@media (max-width:1023px){
.error-img{
  height: auto !important;
}
}
</style>