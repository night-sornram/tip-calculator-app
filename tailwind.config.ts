import type { Config } from 'tailwindcss'
const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(172, 67%, 45%)",
      "200" : "hsl(183, 100%, 15%)",
      "300" : "hsl(186, 14%, 43%)",
      "400" : "hsl(184, 14%, 56%)",
      "500" : "hsl(185, 41%, 84%)",
      "600" : "hsl(189, 41%, 97%)"
    }
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors
    },
  },
  plugins: [],
}
export default config
