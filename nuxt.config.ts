// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Webiizard",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content:'webiizard - web solution'},
        {name: 'format-detection', content: 'telephone-no'},
        {hid: 'fb:app_id', name: 'fb:app_id', content: '883712276121290'},
        {hid: 'og:site_name', property: 'og:site_name', content: `${process.env.VUE_APP_NAME}`},
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Geekify - The fastest growing Micro-technology service provider in Australia, providing computer and technology services nationally.'
        },
        {
          hid: 'keywords', name: 'keywords', content: 'Web design, web development, web solution, coding solution, image editing, image processing, e-commerce solution, best web design and development, web design and development solution'
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;300;400;500;600;700;800&family=Nunito+Sans:wght@200;300;400;600;700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.icon'
        },
        {

        }
      ],
      script: [
        {
          src: '',
          type: 'text/javascript'
        }
      ],
    }
    
  },
  css: [
    '~/assets/css/main.css',
],
postcss: {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
  },
},
modules: [
  '@nuxt/image',
],
image: {
  quality: 80,
  format: ['webp']
}
})
