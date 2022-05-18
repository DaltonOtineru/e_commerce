import stripeYeezy from '../assets/shoes/stripe_yeezy.jpg';
import blackNMD from '../assets/shoes/redblack_nmd.jpg';
import yellowJordan from '../assets/shoes/yellow_jordans.jpg';
import redHu from '../assets/shoes/redhu_adidas.jpg';
import rainbowNMD from '../assets/shoes/rainbow_nmd.jpg';
import blackoutYeezy from '../assets/shoes/blackout_yeezy.jpg';
import adidasStripe from '../assets/shoes/adidas_stripe.jpg';
import camoYeezy from '../assets/shoes/camo_yeezy.jpg';
import uuid from 'react-uuid';

export const shoesProducts = [
  {
    _id: uuid(),
    name: 'Yeezy Boost 350',
    image: stripeYeezy,
    price: 259.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'NMD Red & Black',
    image: blackNMD,
    price: 117.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Joran Retros',
    image: yellowJordan,
    price: 105.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Adidas Hu',
    image: redHu,
    price: 97.5,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'NMD Rainbow',
    image: rainbowNMD,
    price: 139.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Yeezy Blackout',
    image: blackoutYeezy,
    price: 239.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Adidas Stripe',
    image: adidasStripe,
    price: 259.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Yeezy Boost Camo',
    image: camoYeezy,
    price: 289.0,
    qty: 1,
  },
];
