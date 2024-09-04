import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        red :{
          extend : 'dark',
          layout: {
            radius:{
              small:'3px'
            }
          }, // dark theme layout tokens
          colors: {
            background: "#151515",
          primary:{
            50:"#FCD3CB",
            100:"#FCD3CB",
            200:"#F99F99",
            300:"#EE6569",
            400:"#DD3E52",
            500:"#DD3E52",
            600:"#AB053A",
            700:"#8F043E",
            800:"#73023C",
            900:"#5F013A",
            DEFAULT : "#DD3E52",
            foreground:"#E0E0E0"
           },
           content1:'#252525',
           focus:"#C70833",
           content2:'#6A6A6A'

          }, // dark theme colors
        },
        green :{
          extend : 'dark',
          layout: {
            radius:{
              small:'20px'
            }
          }, // dark theme layout tokens
          colors: {
            background: "#151515",
           
          primary:{
            50:"#FCD3CB",
            100:"#FCD3CB",
            200:"#F99F99",
            300:"#EE6569",
            400:"#9fc131",
            500:"#9fc131",
            600:"#AB053A",
            700:"#8F043E",
            800:"#73023C",
            900:"#5F013A",
            DEFAULT : "#9fc131",
            foreground:"#E0E0E0"
           },
           content1:'#252525',
           focus:"#C70833",
           content2:'#6A6A6A'

          }, // dark theme colors
        }
      },
    }
  )],
};
export default config;
