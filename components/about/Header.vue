<template>
  <div class="about-us-header py-4 sm:py-10 lg:py-16">
    <div class="custom-container">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-7 bg-gray-200 rounded-2xl p-4">
          <AppWebiizard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us-header{
  background:linear-gradient(0deg, rgb(11, 25, 62, 0.3), rgb(11, 25, 62, 0.2)), url('/images/about-us/header.webp');
  background-repeat: no-repeat;
  background-size:cover;
  color: rgb(11, 25, 62);
  background-position: bottom center;
}
</style>