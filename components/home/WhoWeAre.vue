<template>
  <section class="why-choose-bg mt-28">
    <div class="custom-container">
      <div class="pt-md-5 pt-sm-4 pt-0 pb-xl-5 pb-lg-3 pb-0">
        <div class="flex justify-end"><img src="/images/home/who-we-are.jpg" alt="Why choose us" class="why-choose-img h-[600px]" /></div>
        <div class="grid grid-cols-12 justify-content-xl-start justify-center">
          <div class="xl:col-span-6 lg:col-span-8 md:col-span-10">
            <div class="why-choose-box bg-white sm:pt-4 pt-0 pb-3 mb-4">
              <div class="why-choose-title"><h2 class="pl-3 pt-3">Why choose us?</h2></div>
              <div class="sm:px-5 px-2">
                <p class="text-lg">Your satisfaction is our goal. If you’re not happy. Please let us know, we will work with you to make it right. </p>
                <div class="grid grid-cols-1 md:grid-cols-2 mt-4">
                  <div class="mb-4">
                    <div class="bg-white light-box-shadow h-full py-4 px-2">
                      <div class="flex items-center justify-center">
                        <div><img src="/images/home/background-check-icon.webp" alt="check" /></div>
                        <p style="color: #000000" class="mb-0 ml-3 font-medium">Background <br>Check</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="bg-white light-box-shadow h-full py-4 px-2">
                      <div class="flex items-center justify-center">
                        <div><img class="shield-icon" src="/images/home/support-icon.webp" alt="24/7 Support" /></div>
                        <p style="color: #000000" class="mb-0 ml-3 font-medium">24/7 <br>Support</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="bg-white light-box-shadow h-full py-4 px-2">
                      <div class="flex items-center justify-center">
                        <div><img class="shield-icon" src="/images/home/professional icon.webp" alt="Expert Professional" /></div>
                        <p style="color: #000000" class="mb-0 ml-3 font-medium">Expert  <br>Professional</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="bg-white light-box-shadow h-full py-4 px-2">
                      <div class="flex items-center justify-center">
                        <div><img class="shield-icon" src="/images/home/assurance-icon.webp" alt="Rework Assurance" /></div>
                        <p style="color: #000000" class="mb-0 ml-3 font-medium">Rework  <br>Assurance</p>
                      </div>
                    </div>
                  </div>
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
.shield-icon{
  height: 63px;
  width: 50px;
}
.why-choose-bg{
  background-image: url('/images/home/why-choose-bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}
.why-choose-title {
    width: 100%;
    position: relative;
}

.why-choose-title:after {
    content: '';
    width: 100px;
    border-bottom: solid 2px var(--brandColor);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
}

.why-choose-title h2 {
    background-color: white;
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 80px;
    font-size: 50px;
}
.why-choose-box{
  margin-top: -220px;
  position: relative;
}
@media(max-width:991px){
  .why-choose-title h2{
    font-size: 45px;
  }
}
@media(max-width:767px){
  .why-choose-title h2{
    font-size: 40px;
  }
  .why-choose-box{
    margin-top: -80px;
  }
}
@media(max-width:475px){
  .why-choose-title h2{
    font-size: 35px;
    margin-left: 0;
  }
  .why-choose-img{
    display: none;
  }
  .why-choose-box{
    margin-top: 0;
  }
}
</style>