import brokenSaints from '../assets/womensProducts/broken_saints.jpg';
import socialSavage from '../assets/womensProducts/social_savage.jpg';
import adidasGrey from '../assets/womensProducts/adidas_grey.jpg';
import adidasBrand from '../assets/womensProducts/adidas_brand.jpg';
import adidasWhite from '../assets/womensProducts/adidas_white.jpg';
import chooseLove from '../assets/womensProducts/choose_love.jpg';
import journey from '../assets/womensProducts/journey.jpg';
import adidasWhite2 from '../assets/womensProducts/adidas_white_2.jpg';
import uuid from 'react-uuid';

export const womensProducts = [
  {
    _id: uuid(),
    name: 'Broken Saints Tee',
    image: brokenSaints,
    price: 31.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Social Savage Tee',
    image: socialSavage,
    price: 33.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Trefoil Hoodie',
    image: adidasGrey,
    price: 30.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Three Stripes Tee',
    image: adidasBrand,
    price: 30.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Stripe Hoodie',
    image: adidasWhite,
    price: 31.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Choose Love Tee',
    image: chooseLove,
    price: 31.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Journey Tee',
    image: journey,
    price: 31.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Tefoil Tee',
    image: adidasWhite2,
    price: 31.99,
    qty: 1,
  },
];
