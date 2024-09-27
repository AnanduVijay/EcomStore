import menu_1 from './images/category/menu_1.png';
import menu_2 from './images/category/menu_2.png';
import menu_3 from './images/category/menu_3.png';
import menu_4 from './images/category/menu_4.png';

import food_1 from '../assets/images/products/food_1.png';
import food_2 from '../assets/images/products/food_2.png';
import food_5 from '../assets/images/products/food_5.png';
import food_6 from '../assets/images/products/food_6.png';
import food_9 from '../assets/images/products/food_9.png';
import food_10 from '../assets/images/products/food_10.png';
import food_14 from '../assets/images/products/food_14.png';
import food_15 from '../assets/images/products/food_15.png';

export const categoryList = [
  {
    menu_name: 'Salad',
    menu_image: menu_1,
  },
  {
    menu_name: 'Rolls',
    menu_image: menu_2,
  },
  {
    menu_name: 'Deserts',
    menu_image: menu_3,
  },
  {
    menu_name: 'Sandwich',
    menu_image: menu_4,
  },
];

export const foodlist = [
  {
    _id: '1',
    name: 'Greek salad',
    image: food_1,
    price: 30,
    offerPrice: 20,
    category: 'Salad',
  },
  {
    _id: '2',
    name: 'Veg salad',
    image: food_2,
    price: 25,
    offerPrice: 18,
    category: 'Salad',
  },
  {
    _id: '3',
    name: 'Lasagna Rolls',
    image: food_5,
    price: 20,
    offerPrice: 14,
    category: 'Rolls',
  },
  {
    _id: '4',
    name: 'Peri Peri Rolls',
    image: food_6,
    price: 30,
    offerPrice: 20,
    category: 'Rolls',
  },
  {
    _id: '5',
    name: 'Ripple Ice Cream',
    image: food_9,
    price: 25,
    offerPrice: 18,
    category: 'Deserts',
  },
  {
    _id: '6',
    name: 'Fruit Ice Cream',
    image: food_10,
    price: 25,
    offerPrice: 18,
    category: 'Deserts',
  },
  {
    _id: '7',
    name: 'Vegan Sandwich',
    image: food_14,
    price: 25,
    offerPrice: 18,

    category: 'Sandwich',
  },
  {
    _id: '8',
    name: 'Grilled Sandwich',
    image: food_15,
    price: 25,
    offerPrice: 18,
    category: 'Sandwich',
  },
];
