<template>
  <section class="why-choose-bg mt-14 md:mt-20 lg:mt-32">
    <div class="custom-container">
      <div class="pt-md-5 pt-sm-4 pt-0 xl:pb-8 lg:pb-3 pb-0">
        <div class="hidden lg:flex justify-end"><NuxtImg src="/images/home/choose-2.webp" alt="Why choose us" class="why-choose-img h-[600px]" /></div>
        <div class="why-choose-box bg-white py-6 sm:py-14 mb-4 px-5 sm:px-10 rounded-3xl w-full lg:w-[700px] xl:w-[800px]">
          <div class="why-choose-title ml-3 md:ml-6 mb-4 md:mb-6"><h1 class="pt-3">Why choose us?</h1></div>
          <div class="sm:px-5 px-2">
            <p class="text-base md:text-lg">Your satisfaction is our goal. If you’re not happy. Please let us know, we will work with you to make it right. </p>
            <div class="grid grid-cols-2 gap-0 sm:gap-6 mt-5 md:mt-8">
              <div class="bg-white light-box-shadow h-full py-5 px-1 md:px-4">
                <div class="flex items-center">
                  <div><NuxtImg src="/images/home/re-search.svg" alt="Resource research" class="h-10 md:h-12" /></div>
                  <p class="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Resource <br>Research</p>
                </div>
              </div>
              <div class="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div class="flex items-center">
                  <div><NuxtImg class="h-10 md:h-12" src="/images/home/24-seven.svg" alt="24/7 Support" /></div>
                  <p class="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">24/7 <br>Support</p>
                </div>
              </div>
              <div class="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div class="flex items-center">
                  <div><NuxtImg class="h-10 md:h-12" src="/images/home/expert.svg" alt="Expert Professional" /></div>
                  <p class="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Expert  <br>Professional</p>
                </div>
              </div>
              <div class="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div class="flex items-center">
                  <div><NuxtImg class="h-10 md:h-12" src="/images/home/re-work.svg" alt="Rework Assurance" /></div>
                  <p class="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Rework  <br>Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.why-choose-title {
    width: 100%;
    position: relative;
}

.why-choose-title:after {
    content: '';
    width: 100px;
    border-bottom: solid 3px var(--secondaryColor);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
}

.why-choose-title h1 {
    background-color: white;
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 80px;
}
.why-choose-box{
  margin-top: -280px;
  position: relative;
}
.light-box-shadow{
  box-shadow: rgba(78, 78, 78, 0.09) 0 3px 12px 0;
}
@media(max-width:1023px){
  .why-choose-title:after {
    width: 60px;
    top: 55%;
}
  .why-choose-box{
    margin-top: 0;
    box-shadow: rgba(11, 25, 62, 0.1) 0px 10px 50px;
  }
}
@media(max-width: 639px){
  .light-box-shadow{
    box-shadow: none;
  }
}
</style>