/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter': ['Inter', 'sans-serif'],
      }
    },
    colors:{
      primary:{
        DEFAULT: '#301556',
        900: '#301556f0',
      },
      white:{
        Default: '#ffffff',
      },
      black:{
        Default: '#494949',
        900:'#000000',
      },
      yellow:{
        Default: '#FFE249',
      },
      green:{
        Default: '#65B849',
      },
      purpleLight:{
        Default: '#777BB3',
      },
      pinkLight:{
        Default: '#B6AABC',
      },
      background:{
        Default: '#464b58b3',
        Gradient1: '#301556',
        Gradient2: '#301556f0',
        Transparent1: 'ffffff1a',
        Transparent2: 'ffffff0d',
        white: '#ffffff',
      },
      divider:{
        Default: '#572A96',
      },
      description:{
        Default: '#858A9B',
      },
      Text:{
        Default: '#FFFFFF',
      }
    }
  },
  plugins: [],
}
