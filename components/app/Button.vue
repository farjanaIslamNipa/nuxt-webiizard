<template>
  <NuxtLink :to="props?.routePath ? props?.routePath : '#'" class="flex items-center justify-center gap-2 transition-all ease-in-out duration-500" 
  :class="props.buttonProps ? defaultBtnStyle() : 'bg-white text-brand border border-gray-400 rounded-md h-9 md:h-10 min-w-[80px] md:min-w-[120px] text-base md:text-lg font-medium focus:none'">
  <div v-if="props.buttonProps?.icon && props.buttonProps?.iconPosition !== 'right'">
    <img 
    :src="props.buttonProps?.iconSrc" 
    :class="iconStyle()" 
    alt="Webiizard">
  </div>
  <span>{{ btnStyle?.btnName ? btnStyle?.btnName : 'Button' }}</span>
  <div v-if="props.buttonProps?.icon && props.buttonProps?.iconPosition === 'right'">
    <img 
    :src="props.buttonProps?.iconSrc" 
    :class="iconStyle()" 
    alt="Webiizard">
  </div>
    
  </NuxtLink>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
      buttonProps: Object,
      routePath: String
  })

const btnStyle = ref(props.buttonProps)

// Button Classes
const defaultBtnStyle = () => {
let btnClasses = {}
btnStyle.value.btnBg ? btnClasses.btnBg = btnStyle.value.btnBg : btnClasses.btnBg = 'bg-white',
btnStyle.value.btnColor ? btnClasses.btnColor = btnStyle.value.btnColor : btnClasses.btnColor = 'text-black',
btnStyle.value.btnBorder ? btnClasses.btnBorder = btnStyle.value.btnBorder : btnClasses.btnBorder ='border border-gray-400',
btnStyle.value.btnHeight ? btnClasses.btnHeight = btnStyle.value.btnHeight : btnClasses.btnHeight = 'h-9 md:h-10',
btnStyle.value.btnWidth ? btnClasses.btnWidth = btnStyle.value.btnWidth : btnClasses.btnWidth = 'min-w-[80px] md:min-w-[120px]',
btnStyle.value.btnFont ? btnClasses.btnFont = btnStyle.value.btnFont : btnClasses.btnFont = 'text-sm md:text-base',
btnStyle.value.btnFw ? btnClasses.btnFw = btnStyle.value.btnFw : btnClasses.btnFw = 'font-medium',
btnStyle.value.textTransform ? btnClasses.textTransform = btnStyle.value.textTransform : btnClasses.textTransform = '',
btnStyle.value.btnPadding ? btnClasses.btnPadding = btnStyle.value.btnPadding : btnClasses.btnPadding = '',
btnStyle.value.btnHover ? btnClasses.btnHover = btnStyle.value.btnHover : btnClasses.btnHover = '',
btnStyle.value.btnFocus ? btnClasses.btnFocus = btnStyle.value.btnFocus : btnClasses.btnFocus = 'focus:none',
btnStyle.value.customBtn ? btnClasses.customBtn = btnStyle.value.customBtn : btnClasses.customBtn = ''

return btnClasses.btnBg + ' ' +
btnClasses.btnColor + ' ' +
btnClasses.btnBorder + ' ' +
btnClasses.btnHeight + ' ' +
btnClasses.btnWidth + ' ' +
btnClasses.btnFont + ' ' +
btnClasses.btnFw + ' ' +
btnClasses.textTransform + ' ' +
btnClasses.btnPadding + ' ' +
btnClasses.btnHover + ' ' +
btnClasses.btnFocus + ' ' +
btnClasses.customBtn
}

// Icon classes
const iconStyle = () => {
let iconClasses = {}
btnStyle.value.iconHeight ? iconClasses.iconHeight = btnStyle.value.iconHeight : iconClasses.iconHeight = 'h-5',
btnStyle.value.iconWidth ? iconClasses.iconWidth = btnStyle.value.iconWidth : iconClasses.iconWidth = 'w-5',
btnStyle.value.customBtnIcon ? iconClasses.customBtnIcon = btnStyle.value.customBtnIcon : iconClasses.customBtnIcon = ''

return iconClasses.iconHeight + ' ' +
iconClasses.iconWidth + ' ' +
iconClasses.customBtnIcon
}

</script>

<style scoped>

</style>