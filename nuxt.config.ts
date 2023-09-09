// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Webiizard",
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content:'webiizard - web solution'},
        {name: 'format-detection', content: 'telephone-no'}
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

})
