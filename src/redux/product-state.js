import { createSlice } from "@reduxjs/toolkit";  

const initialState = {
  products: [
    
      {
        id: 0,
        title: 'Nike Air Max 2022',
        price: 154.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9314373e-5d06-4293-bbdc-5ea621336c3e/air-max-2022-mens-shoes-BVqnkV.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'men',
        desc:
          'The Nike Air Max 2022 delivers the plush sensation you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your mid-foot and heel for secure comfort.'
      },
      {
        id: 1,
        title: 'Nike Air Monarch IV',
        price: 70.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9a8deaa-87f2-4191-92b8-c7661aae48de/air-monarch-iv-mens-training-shoes-lPtRrS.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'men',
        desc:
          'Nike Air Monarch IV sets you up for working out with durable leather on top for support. Lightweight foam teams up with Nike Air cushioning for comfort in every stride.'
      },
      {
        id: 2,
        title: 'Nike Crater Remixa',
        price: 66.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/330c41f4-ad09-4f36-b2ea-f0f81747e11a/crater-remixa-womens-shoe-0mKQDz.png',
        colors: ['red', 'green', 'blue'],
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        category: 'women',
        desc:
          'Nike Air Monarch IV sets you up for working out with durable leather on top for support. Lightweight foam teams up with Nike Air cushioning for comfort in every stride.'
      },
      {
        id: 3,
        title: 'Nike Air Force 1 Shadow',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/02249cfe-2c9a-4d0f-80a1-f5587163f95f/air-force-1-shadow-womens-shoe-kTgn9J.png',
        colors: ['red', 'green', 'blue'],
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        category: 'women',
        desc:
          'The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and giving an exaggerated midsole, it highlights AF1 DNA with a bold look.'
      },
      {
        id: 4,
        title: 'Nike Court Borough Low 2',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/drvaryyqiimplssim2yy/court-borough-low-2-big-kids-shoes-5n5Wzk.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          'Comfort and style come together in the Nike Court Borough Low 2. The structured, supportive fit has a retro basketball design so you can look like an all-star off the court.'
      },
      {
        id: 5,
        title: 'Nike Court Borough Mid',
        price: 49.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ml1omwdui3lnadoopwps/court-borough-mid-big-kids-shoes-LjDyRk.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          'Get in the game with the Nike Court Borough Mid. With an old-school hoops design, these versatile mid-tops are durable, supportive and ready for playtime. Major score!'
      },
      {
        id: 6,
        title: 'Nike Air Max 2022',
        price: 154.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9314373e-5d06-4293-bbdc-5ea621336c3e/air-max-2017-mens-shoes-BVqnkV.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'men',
        desc:
          'The Nike Air Max 2022 delivers the plush sensation you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your mid-foot and heel for secure comfort.'
      },
      {
        id: 7,
        title: 'Nike Air Monarch IV',
        price: 70.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9a8deaa-87f2-4191-92b8-c7661aae48de/air-monarch-iv-mens-training-shoes-lPtRrS.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'training ',
        desc:
          'Nike Air Monarch IV sets you up for working out with durable leather on top for support. Lightweight foam teams up with Nike Air cushioning for comfort in every stride'
      },
      {
        id: 8,
        title: 'Nike Air Zoom Pegasus 36',
        price: 89.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fjml0er7p6pmdyhsuu7x/air-zoom-pegasus-36-mens-running-shoes-D24Mcz.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'running',
        desc:
          'The iconic Nike Air Zoom Pegasus 36 returns with more perforations and engineered mesh in the upper that strategically target breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk without compromising comfort, while exposed Flywire cables give you a snug fit at higher speeds.'
      },
      {
        id: 9,
        title: 'Nike React Infinity Run Flyknit 2',
        price: 151.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b84993c-97e8-4ab1-a087-31863fe15ddb/react-infinity-run-flyknit-2-mens-road-running-shoes-DttDF2.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'running',
        desc:
          "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort, plus a wider forefoot for added stability. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement."
      },
      {
        id: 10,
        title: 'Nike React Infinity Run Flyknit 2 b',
        price: 151.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/20be033b-631f-480b-a195-807a9cc1fa6d/react-infinity-run-flyknit-2-mens-road-running-shoes-DttDF2.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'running',
        desc:
          "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort, plus a wider forefoot for added stability. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement."
      },
      {
        id: 11,
        title: 'Nike React Infinity Run Flyknit 2 R',
        price: 151.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/061c259c-6c46-4186-9da5-f9bee7ae2232/react-infinity-run-flyknit-2-mens-road-running-shoes-DttDF2.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'running',
        desc:
          "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort, plus a wider forefoot for added stability. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement."
      },
      {
        id: 12,
        title: 'Nike React Infinity Run Flyknit 2 YR',
        price: 151.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ded2ba84-9f56-4154-94c8-e184135d0e0c/react-infinity-run-flyknit-2-air-kelly-anna-london-mens-road-running-shoes-DttDF2.png',
        colors: ['red', 'green', 'blue'],
        size: [
          6,
          6.5,
          7,
          7.5,
          8,
          8.5,
          9,
          9.5,
          10,
          10.5,
          11,
          11.5,
          12,
          12.5,
          13,
          14,
          15
        ],
        category: 'running',
        desc:
          "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort, plus a wider forefoot for added stability. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement."
      },

      {
        id: 13,
        title: 'Nike Air Force 1 Pixel SE',
        price: 84.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9b324a6-506b-4725-9dc3-f38ab5de513a/air-force-1-pixel-se-womens-shoes-fzWw2r.png',
        colors: ['red', 'green', 'blue'],
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        category: 'women',
        desc:
          "You've always been on point. Let there be no doubt in the Nike Air Force 1 Pixel SE, a reimagined off-court style for you, by you. The distorted outsole and lifted midsole feature large, pixelated details for modern appeal while the inverted animal print Swoosh logo delivers a primal touch. You’re not just in the game. You’re leading it."
      },
      {
        id: 14,
        title: 'Nike Air Max 270',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a21b96e9-7f8a-45d4-bf9c-a9e6c91511e0/air-max-270-big-kids-shoes-HbtNX3.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          "Are you ready for BIG Swoosh style? The Nike Air Max 270 features Nike's biggest heel Air unit yet for a soft ride that feels as impossible as it looks."
      },
      {
        id: 15,
        title: 'Nike Air Max 270 B',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bd3d6a0b-86cc-4f60-bb87-49e969f0059a/air-max-270-big-kids-shoes-HbtNX3.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          "Are you ready for BIG Swoosh style? The Nike Air Max 270 features Nike's biggest heel Air unit yet for a soft ride that feels as impossible as it looks."
      },
      {
        id: 16,
        title: 'Nike Air Max 270 B',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b6938d2-568e-4262-8a93-684f530f8ea8/air-max-270-big-kids-shoes-HbtNX3.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          "Are you ready for BIG Swoosh style? The Nike Air Max 270 features Nike's biggest heel Air unit yet for a soft ride that feels as impossible as it looks."
      },
      {
        id: 17,
        title: 'Nike Air Max 270 B',
        price: 113.97,
        img:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4a6a9835-85b5-4ca2-9ed5-55caecd7de6a/air-max-270-big-kids-shoe-HbtNX3.png',
        colors: ['red', 'green', 'blue'],
        size: ['3.5Y', '4Y', '4.5Y', '5Y', '5.5Y', '6Y', '6.5Y', '7Y'],
        category: 'kids',
        desc:
          "Are you ready for BIG Swoosh style? The Nike Air Max 270 features Nike's biggest heel Air unit yet for a soft ride that feels as impossible as it looks."
      },
    ],
    filteredProducts: [],
};



export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
   filterProducts(state, action) {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      )
   },
  },
 
})

export const {filterProducts} = sneakersSlice.actions;

export default sneakersSlice.reducer;
