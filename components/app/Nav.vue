<template>
  <div id="nav-height" :class="props.sticky ? 'fixed top-0 w-full z-50' : 'relative'">
    <div
      class="z-50" 
      :class="
      [props.navItems?.navBg ? props.navItems.navBg : 'bg-transparent',
      props.navItems?.navPadding ? props.navItems.navPadding : 'px-4 md:px-10 lg:px-[60px] xl:px-[100px] 2xl:px-[200px]',
      (props.hasBorder ? (props.navItems.bottomBorder ? props.navItems?.bottomBorder : 'border-b-2 border-gray-100') : ''),
      (props.hasShadow ? (`${props.navItems?.bottomShadow ? props.navItems.bottomShadow : 'shadow-md'} border-none`) : '') ,
      props.navItems.customClass?.customNav ? props.navItems.customClass.customNav : '']
      "
    >
      <div class="flex w-full gap-0 xl:gap-12 items-center justify-between">
        <div class="w-full" :class="screenSize === props.mediaScreen ? 'md:w-[20%]' : 'lg:w-[25%] xl:w-[30%]'">
          <div class="flex justify-between items-center">
            <div class="bg-brand px-3 lg:px-4 py-3 md:py-4 lg:py-5">
              <NuxtLink to="/">
                <img class="inline-block" :class="
                  [props.navItems.logoHeight ? props.navItems.logoHeight : 'h-10',
                  props.navItems.logoWidth ? props.navItems.logoWidth : 'w-auto',
                  props.navItems.customClass?.customLogo ? props.navItems.customClass?.customLogo : '']"
                  :src="props.navItems.logoSrc ? props.navItems.logoSrc : '/images/brand-logo.png'"
                  :alt="props.navItems.logoAlt ? props.navItems.logoAlt : 'Webiizard Logo'
                  "/>
              </NuxtLink>
            </div>
            <div class="-mr-2 -my-2" :class="screenSize === props.mediaScreen ? 'md:hidden' : 'lg:hidden'">
              <button
                type="button"
                class=""
                :class="props.navItems.customClass?.customHamburgerIcon ? props.navItems.customClass?.customHamburgerIcon : ''"
                @click="openNav">
                <span class="sr-only">Open menu</span>
                <img v-if="props.navItems?.hamburgerIcon"
                    :class="[props.navItems?.hamIconHeight ? props.navItems?.hamIconHeight : 'h-6',
                      props.navItems?.hamIconWidth ? props.navItems?.hamIconWidth : 'w-6']"
                      :src="props.navItems?.hamburgerIcon" alt="Jatri Menu">
                <svg v-else
                  class="inline-block"
                  :class="[props.navItems?.hamIconHeight ? props.navItems?.hamIconHeight : 'h-8',
                      props.navItems?.hamIconWidth ? props.navItems?.hamIconWidth : 'w-8']"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0b193e"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div   
          id="nav-items"
          @click="closeSideNav"
          class="bg-black/50"
          :class="
            [screenSize === props.mediaScreen ? 'md-nav-item-container md-full-width' : 'nav-item-container full-width',
            props.expandFrom === 'right' ? 'right-nav' : 'left-nav',
            props.navItems?.navBg ? `lg:${props.navItems.navBg}` : 'lg:bg-transparent']
            "
          >
          <div
            @click="preventClosing"
            class=" w-[70%] sm:w-[60%]"
            :class="
            [screenSize === props.mediaScreen ? 'h-screen md:h-auto' : ' h-screen lg:h-auto',
            props.expandFrom === 'right' ? 'ml-auto' : '',
            props.navItems?.smallNavBg ? `${props.navItems.smallNavBg}` : 'bg-white lg:bg-transparent',
            screenSize === props.mediaScreen ? `md:${props.navItems.smallNavBg ? props.navItems.smallNavBg : 'bg-white'} md:w-full md:py-0` : `lg:${navItems.smallNavBg} lg:py-0 md:w-[40%] lg:w-full`]
            "
          >
            <div class="block" :class="screenSize === props.mediaScreen ? 'md:hidden' : 'lg:hidden'">
              <div class="flex justify-between bg-brand px-2 py-3">
                <div class="pl-4">
                  <NuxtLink to="/">
                    <img class="h-6 w-auto "
                    :src="props.navItems.logoSrc ? props.navItems.logoSrc : '/images/brand-logo.png'" 
                    alt="">
                  </NuxtLink>
                </div>
                <div class="absolute right-3 md:right-9 top-3 md:top-4">
                  <button
                    type="button"
                    class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    :class="props.navItems?.closeIcon ? 'p-2' : 'p-1' + props.navItems.customClass?.customCloseIcon ? props.navItems.customClass?.customCloseIcon : ''"
                    @click="closeSideNav"
                  >
                    <span class="sr-only">Close menu</span>
                    <img v-if="props.navItems?.closeIcon"
                    :class="[props.navItems?.closeIconHeight ? props.navItems?.closeIconHeight : 'h-4',
                      props.navItems.closeIconWidth ? props.navItems?.closeIconWidth : 'w-4']"
                      :src="props.navItems?.closeIcon" alt="Webiizard Menu">
                    <svg
                      v-else
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#0b193e"
                      aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div 
            class="items-center pl-8 lg:pl-0 pt-8 lg:pt-0"
            :class="
              [screenSize === props.mediaScreen ? 'md:flex' : 'lg:flex',
              ( props.navItems?.specialLinkOne || props.navItems?.specialLinkTwo) ? 'justify-between' : 'justify-end']
              "
            >
              <nav class="space-y-3 space-x-0 xl:space-x-10 relative" :class="screenSize === props.mediaScreen ? 'md:flex md:space-x-6 md:space-y-0' : 'lg:flex lg:space-x-6 lg:space-y-0'">
                <NuxtLink
                  v-for="navLink in props.navItems?.navLinks"
                  :key="navLink.id"
                  :to="navLink.link"
                  @click="closeSideNav"
                  :class="
                  [props.navItems.linkClasses?.fontSize ? props.navItems.linkClasses.fontSize : 'text-base',
                  props.navItems.linkClasses?.fontWeight ? props.navItems.linkClasses.fontWeight : 'font-medium',
                  props.navItems.linkClasses?.color ? props.navItems.linkClasses.color : 'text-gray-800',
                  screenSize === props.mediaScreen ? 'md:inline-block': 'lg:inline-block',
                  props.navItems.linkClasses?.hoverColor,
                  props.navItems.linkClasses?.customClass]
                  "
                  class="transform duration-200 ease-out block"
                  :active-class="navItems?.linkClasses?.activeClass"
                  >
                  {{ navLink?.name }}
                </NuxtLink>
              </nav>
                <div class="pt-4 lg:pt-0">
                  <div class="flex gap-2 items-center">
                    <p class="text-brand text-sm font-bold">Find Us:</p>
                    <div class="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-5 h-5 hidden xl:inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <a href="tel:01700557663" class="text-brand text-sm font-bold">01700557663</a>
                      <a href="#" target="_blank" area-label="Follow us on Facebook" rel="noreferrer" name="Follow us on Facebook" hover:opacity-50>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M20 2.5V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H11.25V12.5H13.5C13.6 11.6125 13.7 10.7625 13.8 9.8625H11.25V9.75V8.4C11.25 7.7875 11.475 7.575 12.1375 7.575H13.75V5C12.7125 5 11.675 5 10.65 5C10.0814 5.02175 9.53408 5.22176 9.08543 5.5717C8.63678 5.92165 8.30953 6.40383 8.15 6.95C8.02887 7.35611 7.96163 7.77637 7.95 8.2C7.95 8.725 7.95 9.25 7.95 9.8125H6.25V12.5H7.8375V20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0L17.5 0C18.163 0 18.7989 0.263392 19.2678 0.732233C19.7366 1.20107 20 1.83696 20 2.5Z" fill="#0b193e"/>
                        </svg></a>
                      <a href="#" target="_blank" area-label="Follow us on Linkedin" rel="noreferrer" name="Follow us on Linkedin" hover:opacity-50>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.9988 2.79992C20.0173 2.18535 19.826 1.58279 19.4563 1.09155C19.0866 0.600304 18.5606 0.249694 17.965 0.0975012C17.7196 0.0349536 17.4676 0.00242833 17.2144 0.000639882C12.4092 0.000639882 7.60244 0.000639882 2.79402 0.000639882C2.14959 -0.0133579 1.52124 0.202695 1.02165 0.610061C0.52206 1.01743 0.183899 1.58946 0.0677958 2.2236C0.0435842 2.33741 0.0217904 2.45122 0 2.56261V17.4211C0.0290539 17.5639 0.0581103 17.7092 0.0895853 17.8545C0.209014 18.4035 0.497451 18.9013 0.914358 19.2779C1.33127 19.6545 1.85568 19.8909 2.41389 19.954C2.47009 19.9642 2.52521 19.9796 2.57853 20H17.4323L17.8512 19.9128C18.4099 19.7982 18.9171 19.5071 19.2981 19.0825C19.679 18.6579 19.9136 18.1222 19.9673 17.5543C19.9867 17.346 19.9988 17.1402 19.9988 16.9319V2.79992ZM6.85188 15.6897C6.85188 16.1038 6.6945 16.2587 6.29259 16.2587H4.71157C4.29998 16.2587 4.16681 16.1256 4.16681 15.7066V8.38153C4.16681 7.98925 4.32661 7.82943 4.72368 7.827H6.28775C6.6824 7.827 6.8543 8.00377 6.8543 8.40333L6.85188 15.6897ZM7.23684 5.45391C7.23507 5.73876 7.16316 6.01879 7.02746 6.26924C6.89176 6.51968 6.69645 6.73283 6.45881 6.88983C6.22116 7.04684 5.9485 7.14287 5.66493 7.16942C5.38135 7.19597 5.09561 7.15224 4.83295 7.04208C4.5703 6.93193 4.33882 6.75875 4.159 6.53785C3.97918 6.31695 3.85654 6.05513 3.80193 5.77556C3.74733 5.49599 3.76244 5.20727 3.84593 4.93493C3.92941 4.66258 4.07871 4.41501 4.28061 4.21409C4.44159 4.05477 4.63251 3.92888 4.84235 3.84368C5.0522 3.75849 5.27683 3.71566 5.50329 3.71768C5.73178 3.71541 5.95842 3.75878 6.16993 3.84526C6.38144 3.93174 6.57355 4.05959 6.73501 4.2213C6.89648 4.38301 7.02403 4.57533 7.1102 4.78699C7.19637 4.99865 7.23943 5.22539 7.23684 5.45391ZM16.2363 15.8011C16.2456 15.8628 16.2404 15.9259 16.221 15.9852C16.2016 16.0445 16.1686 16.0985 16.1245 16.1427C16.0805 16.187 16.0267 16.2203 15.9675 16.2401C15.9083 16.2598 15.8453 16.2654 15.7835 16.2563H13.987C13.6311 16.2563 13.4786 16.1062 13.4786 15.743V12.1107C13.5051 11.6816 13.4517 11.2514 13.3212 10.8418C13.2576 10.6346 13.136 10.45 12.9708 10.3096C12.8057 10.1693 12.6038 10.0792 12.3891 10.05C12.1583 9.99859 11.9177 10.0126 11.6944 10.0905C11.4712 10.1683 11.274 10.3069 11.1252 10.4907C10.8295 10.8773 10.6733 11.3527 10.6821 11.8395C10.6821 13.1229 10.6821 14.4063 10.6821 15.6897C10.6821 16.128 10.5514 16.2587 10.1132 16.2587H8.45226C8.39046 16.2686 8.32718 16.2638 8.26761 16.2446C8.20804 16.2254 8.15385 16.1923 8.10947 16.1482C8.06509 16.104 8.03178 16.05 8.01225 15.9905C7.99272 15.931 7.98752 15.8678 7.99709 15.8059V8.29436C7.98824 8.23059 7.9943 8.16565 8.01477 8.10462C8.03525 8.04359 8.06959 7.98814 8.11511 7.94262C8.16062 7.8971 8.21606 7.86276 8.27708 7.84227C8.3381 7.82179 8.40304 7.81574 8.46679 7.82458C9.04545 7.82458 9.62652 7.82458 10.2052 7.82458C10.2706 7.81679 10.337 7.82396 10.3993 7.84555C10.4616 7.86713 10.5182 7.90257 10.5648 7.9492C10.6114 7.99582 10.6469 8.05241 10.6684 8.11472C10.69 8.17702 10.6972 8.24341 10.6894 8.30889V8.77866C10.7185 8.75445 10.7475 8.72539 10.7742 8.69875C11.1288 8.23427 11.6428 7.91766 12.2172 7.81005C12.8727 7.65812 13.5558 7.67143 14.2049 7.8488C15.2363 8.13938 15.7956 8.87552 16.0377 9.86835C16.159 10.3666 16.2264 10.8764 16.2387 11.3891C16.2653 12.8638 16.2387 14.3361 16.2387 15.8108L16.2363 15.8011Z" fill="#0b193e"/>
                        </svg>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
  <div v-if="props.sticky" id="adjust-spacing"></div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
  navItems: Object,
  webLanguage: String,
  fromLeft: Boolean,
  expandFrom: String,
  border: Boolean,
  shadow: Boolean,
  mediaScreen: String,
  sticky: Boolean,
  hasBorder: Boolean,
  hasShadow: Boolean
})
const screenSize = ref('md')
const openNav = () => {
      const sideNav = document.getElementById("nav-items");
      sideNav.style.width = "100%";
    }

const preventClosing = (event) => {
  event.stopPropagation();
}

const closeSideNav = () =>{
      const sideNav = document.getElementById("nav-items");
      if(sideNav.style.width === "100%") {sideNav.style.width = "0" }
  }

if(process.browser){
  window.onload = function() {
  if(props.sticky === true){
    const navHeight = document.getElementById('nav-height').getBoundingClientRect().height
    document.getElementById('adjust-spacing').style.height = navHeight + 'px'
  }
}
}
</script>

<style scoped>
.active-class{
  color: #01c2cf !important;
  font-weight: 700 !important;
}

.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
}

.language-item:last-child div span{
  border-bottom: none !important;
}

@media(min-width:1024px){
 .full-width{
  width: 70% !important;
  height: auto;
 }
}
@media(max-width:1023px){
  .nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 9999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
  .left-nav{
    left: 0;
  }
  .right-nav{
    right: 0;
  }
}

@media(min-width:768px){
 .md-full-width{
  width: 80% !important;
  height: auto;
 }

}
@media(max-width:767px){
  .md-nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
}
@media(max-width:767px){
.custom-nav{
  padding-left: 0 !important;
}
}
</style>