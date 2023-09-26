<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <slot />
  </transition>
</template>

<script setup>
 const beforeEnter = (el) => {
    return el.style.opacity = 0;
 }
 const enter = (el) => {
    el.style.transition = 'opacity 0.4s ease-in-out';
    getComputedStyle(el);
    setTimeout(() => {
      el.style.opacity = 1;
    }, 1000)
    
 }
</script>

