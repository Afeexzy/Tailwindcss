module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './public/index.html', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'unique': "url('/src/image/bg-image.jpg')",
        'lady_image': "url('/src/image/lady_image.jpg')",
        'lady_image1': "url('/src/image/lady_image1.jpg')",
        'lady_image2': "url('/src/image/carousel-2.jpg')",
        'testimonial': "url('/src/image/testimonial.jpg')",
        'lay_image3': "url('/src/image/portfolio-3.jpg')",
        'lay_image4': "url('/src/image/blog-2.jpg')",
        'lay_image5': "url('/src/image/portfolio-4.jpg')",
        'carousel_3': "url('/src/image/carousel-3.jpg')",
      }
    },
  },
  plugins: [],
}