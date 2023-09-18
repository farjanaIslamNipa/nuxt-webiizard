<template>
    <AppNav
    :navItems="navItems" 
     expandFrom="left" 
    :hasBorder="false" 
    :hasShadow="true" 
    :sticky="false"
     mediaScreen="lg"
    />
    <slot />
    <AppFooter />
</template>

<script setup>
const navItems = {
  navBg: 'bg-transparent',
// Nav link options
    navLinks: [
    {
      id:1,
      name:'Home',
      link:'/',
      icon:'',
    },
    {
      id:2,
      name:'Services',
      link:'/services',
      icon:'',
    },
    {
      id:3,
      name:'Solutions',
      link:'/solutions',
      icon:'',
    },
    {
      id:4,
      name:'Projects',
      link:'/projects',
      icon:'',
    },
    {
      id:5,
      name:'Contact us',
      link:'/contact-us',
      icon:'',
    },
    ],
    linkClasses:{
        fontSize:'text-base',
        fontWeight:'font-medium',
        color:'text-brand',
        display:'block lg:inline-block',
        hoverColor:'hover:text-[#01c2cf]',
        activeClass:'active-nav',
        customClass:'custom-link'
    },

//  General options
    bottomBorder: 'border-b-2 border-gray-100',
    bottomShadow: 'shadow-md',
    logoSrc: '/images/brand-logo.png',
    logoAlt: 'Webiizard Logo',
    logoHeight: 'h-6 lg:h-7',
    logoWidth: 'w-auto',

//   Special Link Options
    specialLinkOne: {
        name:'Rental', 
        icon:'/images/car-svg.svg', 
        link:'https://rental.jatri.co/',
        class: 'rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },
    specialLinkTwo: {
        name:'Ticket', 
        icon:'/images/ticket.svg', 
        link:'https://rental.jatri.co/',
        class: 'bg-[#f04935] text-white rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },

    // Custom classes for edit
    customClass:{
        customNav:'custom-nav',
        customLogo: 'custom-logo',
        customHamburgerIcon: 'custom-hamburger-icon',
        customCloseIcon: 'custom-close-icon',
        customSpecialLinkOne:'custom-special-link-one',
        customSpecialLinkTwo:'custom-special-link-two',
    }
}

</script>

<style>
.active-nav::after{
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(-50%);
  content: '';
  width: 100%; 
  height: 0; 
  /* border-right: 7px solid transparent;
  border-left: 7px solid transparent; */
  border: 2px solid var(--brandColor);
  transition: all 0.3s ease-in-out;
}
.active-nav{
  color: #0b193e !important;
  font-weight: 700 !important;
  transition: all 0.3s ease-in-out;
}
@media(max-width:1023px){
  .active-nav::after{
  border: 0;
}
}
@media(max-width:767px){
.custom-nav{
  padding-left: 0 !important;
}
}

</style>