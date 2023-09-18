<template>
  <div>
    <HomeHeader />
    <HomeSpecialCard />
    <HomeUsedTechnology />
    <section class="service-solution h-[250px] lg:h-[300px] xl:h-[400px]">
      <div class="custom-container text-appPrimary h-full flex items-center justify-center">
        <div class="text-center text-3xl lg:text-4xl font-medium capitalize">
          <h2>smart services & solution</h2>
          <h2>all you need</h2>
          <div class="flex items-center justify-center mt-4 lg:mt-6">
            <AppButton route-path="/about-us" :buttonProps="servicesButtonProps" />
            <AppButton route-path="/about-us" :buttonProps="solutionButtonProps" />
          </div>
        </div>
      </div>
    </section>
    <HomeExploreServices />
    <HomeWhoWeAre />
    <HomeProjects />
    <HomeContactForm />
    <HomeBlogs />
  </div>
</template>

<script setup>
const servicesButtonProps = {
    btnName: 'Services',
    btnBg : 'bg-transparent',
    btnColor: 'text-appSecondary',
    btnBorder: 'border border-appSecondary border-t-0 border-b-0 border-l-0',
    btnHeight: 'h-9 md:h-10',
    btnWidth: 'min-w-[80px] md:min-w-[160px]',
    btnFont: 'text-base lg:text-xl',
    btnFw: 'font-medium',
    textTransform: 'capitalize',
    btnPadding: 'py-1 md:py-[6px] px-4 md:px-6',
    btnHover: 'hover:bg-brand hover:border hover:border-appSecondary',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
}
const solutionButtonProps = {
    btnName: 'Solutions',
    btnBg : 'bg-transparent',
    btnColor: 'text-appSecondary',
    btnBorder: 'border-0',
    btnHeight: 'h-9 md:h-10',
    btnWidth: 'min-w-[80px] md:min-w-[160px]',
    btnFont: 'text-base lg:text-xl',
    btnFw: 'font-medium',
    textTransform: 'capitalize',
    btnPadding: 'py-1 md:py-[6px] px-4 md:px-6',
    btnHover: 'hover:bg-brand hover:border hover:border-appSecondary',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
}
</script>

<style scoped>
.service-solution{
  background:linear-gradient(0deg, rgb(11, 25, 62, 0.9), rgb(11, 25, 62, 0.8)), url('/images/home/team-1.webp');
  background-size:cover;
  color: rgb(11, 25, 62);
  background-attachment: fixed;
}
</style>