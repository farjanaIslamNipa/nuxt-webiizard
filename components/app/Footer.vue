<template>
    <div class="py-10 md:py-20 px-5 bg-brand text-gray-300 text-sm">
        <div class="custom-container">
            <div class="border border-t-0 border-x-0 border-b-gray-500 pb-4">
                <div class="grid grid-cols-1 md:grid-cols-5 space-y-3 md:space-y-0">
                    <div class="flex justify-center md:justify-start">
                        <NuxtImg src="/images/brand-logo.png" alt="Webiizard Logo" class="h-6 lg:h-8" />
                    </div>
                    <div class="flex justify-center">
                        <div class="text-center md:text-start">
                            <NuxtLink to="/services" class="text-sm block mb-2 md:mb-1 text-gray-300">Services</NuxtLink>
                            <NuxtLink to="/solutions" class="text-sm block text-gray-300">Solutions</NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-center border-0 md:border border-gray-500 md:border-y-0">
                        <div class="text-center md:text-start">
                            <NuxtLink to="/projects" class="text-sm block mb-2 md:mb-1 text-gray-300">Projects</NuxtLink>
                            <NuxtLink to="/blogs" class="text-sm block text-gray-300">Blogs</NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-center border-0 md:border border-gray-500 md:border-y-0 md:border-l-0">
                        <div class="text-center md:text-start">
                            <NuxtLink to="/about-us" class="text-sm block mb-2 md:mb-1 text-gray-300">About us</NuxtLink>
                            <NuxtLink to="/contact-us" class="text-sm block text-gray-300">Contact us</NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="text-center md:text-start">
                            <NuxtLink to="/privacy-policy" class="text-sm block mb-2 md:mb-1 text-gray-300">Privacy Policy</NuxtLink>
                            <NuxtLink to="/terms-and-conditions" class="text-sm block text-gray-300">Terms & Conditions</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <div class="block sm:flex gap-2 justify-center">
                    <p class="text-center">&copy;{{ new Date().getFullYear() }} Webiizard. All rights reserved.</p>
                    <p class="text-center">Call us: <a href="tel:01700557663">01700557663</a></p>
                </div>
                <div class="flex items-center justify-center gap-4 mt-1">
                    <!-- <span>Follow On:</span> -->
                    <a href="#" target="_blank" class="font-semibold" area-label="Follow us on Linkedin" rel="noreferrer" name="Follow us on Linkedin">Linkedin</a>
                    <a href="#" target="_blank" class="font-semibold" area-label="Follow us on Facebook" rel="noreferrer" name="Follow us on Facebook">Facebook</a>
                    <a href="#" target="_blank" class="font-semibold" area-label="Follow us on Instagram" rel="noreferrer" name="Follow us on Instagram">Instagram</a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>