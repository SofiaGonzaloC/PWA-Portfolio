/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comic: ["'Comic Neue'",'cursive']
    },
    extend: {
      colors: {
        // 'rose': { DEFAULT: '#FF00C1', 50: '#FFB8EE', 100: '#FFA3E9', 200: '#FF7ADF', 300: '#FF52D5', 400: '#FF29CB', 500: '#FF00C1', 600: '#C70097', 700: '#8F006C', 800: '#570042', 900: '#1F0017' },
        // 'electric-violet': { DEFAULT: '#9600FF', 50: '#E2B8FF', 100: '#D9A3FF', 200: '#C87AFF', 300: '#B852FF', 400: '#A729FF', 500: '#9600FF', 600: '#7500C7', 700: '#54008F', 800: '#330057', 900: '#12001F' },
        // 'electric-blue': { DEFAULT: '#4900FF', 50: '#CCB8FF', 100: '#BDA3FF', 200: '#A07AFF', 300: '#8352FF', 400: '#6629FF', 500: '#4900FF', 600: '#3900C7', 700: '#29008F', 800: '#190057', 900: '#09001F' },
        // 'dodger-blue': { DEFAULT: '#00B8FF', 50: '#B8EBFF', 100: '#A3E5FF', 200: '#7ADAFF', 300: '#52CFFF', 400: '#29C3FF', 500: '#00B8FF', 600: '#0090C7', 700: '#00678F', 800: '#003F57', 900: '#00161F' },
        // 'cyan': { DEFAULT: '#00FFF9', 50: '#B8FFFD', 100: '#A3FFFD', 200: '#7AFFFC', 300: '#52FFFB', 400: '#29FFFA', 500: '#00FFF9', 600: '#00C7C2', 700: '#008F8B', 800: '#005755', 900: '#001F1E' },
        'mirage'      : { DEFAULT: '#1C192E', 50: '#645AA5', 100: '#5C5298', 200: '#4C447D', 300: '#3C3663', 400: '#2C2748', 500: '#1C192E', 600: '#06050A', 700: '#000000', 800: '#000000', 900: '#000000' },
        'shocking'    : { DEFAULT: '#D986C1', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#F6E3F1', 300: '#EDC4E1', 400: '#E3A5D1', 500: '#D986C1', 600: '#CC5BAB', 700: '#B63992', 800: '#8B2C6F', 900: '#601E4D' },
        'breaker-bay' : { DEFAULT: '#67A8A7', 50: '#DCEBEB', 100: '#CFE3E3', 200: '#B5D5D4', 300: '#9BC6C5', 400: '#81B7B6', 500: '#67A8A7', 600: '#4E8988', 700: '#3A6564', 800: '#254141', 900: '#111E1D' },
        'tussock'     : { DEFAULT: '#B19941', 50: '#E8E0C1', 100: '#E3D8B2', 200: '#D8C995', 300: '#CDBA77', 400: '#C2AB59', 500: '#B19941', 600: '#887632', 700: '#5F5223', 800: '#362F14', 900: '#0D0B05' },
        'green-forest': { DEFAULT: '#6AA173', 50: '#DBE8DD', 100: '#CEE0D1', 200: '#B5D0BA', 300: '#9CC1A2', 400: '#83B18B', 500: '#6AA173', 600: '#528159', 700: '#3C5F42', 800: '#263D2A', 900: '#101A12' },
      }
    },
  },
  plugins: [],
}
