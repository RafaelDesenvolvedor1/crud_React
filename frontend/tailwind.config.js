/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'appCol':'225px 1fr',
        'tabletAppCol':'225px 1f',
        'phoneAppCol':'1fr'
     

      },
      gridTemplateRows: {
        'appRow':'100px 1fr 40px',
        'tabletAppRow':'100px 70px 1fr 40px',
        'phoneAppRow':'100px 70px 1fr 40px',
      },
      gridTemplateAreas:{
        'appLayout':[
          "logo header",
          "menu content",
          "menu footer",
        ],
        'tabletAppLayout':[
          "logo header",
          "menu menu",
          "content content",
          "footer footer",
        ],
        'phoneAppLayout':[
          "logo ",
          "menu",
          "content",
          "footer"
        ]
      }
    },
  },
  plugins: [ 
    require('@savvywombat/tailwindcss-grid-areas')
],
}

