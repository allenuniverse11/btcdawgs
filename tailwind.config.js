module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "gaegu": ['Gaegu', 'sans-serif']
      },
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite',
        'fly-in': 'fly-in 0.2s ease-in-out',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fly-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      }    
    },
  },
  plugins: [],
};
