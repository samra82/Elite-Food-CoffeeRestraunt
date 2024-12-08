module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",       
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/assets/header.svg')",
      }
    }
  }
};
