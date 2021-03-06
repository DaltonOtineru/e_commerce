import threeStripes from '../assets/clothing/three_stripes.jpg';
import trackSuit from '../assets/clothing/logo_track_suit.jpg';
import windbreaker from '../assets/clothing/triangle_windbreaker.jpg';
import trefoilGold from '../assets/clothing/trefoil_gold.jpg';
import stripeHoodie from '../assets/clothing/trefoil_stripe_hoodie.jpg';
import trefoilSweater from '../assets/clothing/trefoil_sweater.jpg';
import forrestJacket from '../assets/clothing/forrest_jacket.jpg';
import puffer from '../assets/clothing/trefoil_puffer.jpg';
import uuid from 'react-uuid';

export const clothingProducts = [
  {
    _id: uuid(),
    name: '3 Stripe Tee',
    image: threeStripes,
    price: 32.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Logo Tracksuit',
    image: trackSuit,
    price: 89.9,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Tripoint Jacket',
    image: windbreaker,
    price: 79.99,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Trefoil Gold Tee',
    image: trefoilGold,
    price: 29.9,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Stripe Hoodie',
    image: stripeHoodie,
    price: 76.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Tefoil Sweater',
    image: trefoilSweater,
    price: 65.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Greenpoint Jacket',
    image: forrestJacket,
    price: 70.0,
    qty: 1,
  },
  {
    _id: uuid(),
    name: 'Trefoil Puff Jacket',
    image: puffer,
    price: 58.99,
    qty: 1,
  },
];
