export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '400px',
      sm: '640px',
      tablet: '600px',  // breakpoint custom
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}