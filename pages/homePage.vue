<template>
  <div>
    <HomeHeader />
    <HomeSpecialCard />
    <HomeUsedTechnology />
  </div>
</template>

<script setup>

</script>

<style scoped>
.service-img{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: saturate(0.4);
  transition: all 0.3s ease;
  cursor: pointer;
}
.service-img:hover{
  opacity: 0.9;
}
</style>