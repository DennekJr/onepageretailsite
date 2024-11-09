import { PriceCardTypes } from "./priceCard.types";

export const PRICECARDMENU: Record<string, PriceCardTypes> = {
  one: {
    id: "free",
    planType: 'Basic',
    cost: 'Free',
    shortDescription: 'Lorem ipsumus dumbledore harry maguire ten hag fuck off',
    benefits: ['5GB Storage', 'Free Hosting', 'Unlimited Domains', '10 Email Account', '24/7 Support'],
    url: ''
  },
  two: {
    id: "free",
    planType: 'Basic',
    cost: '$24.99',
    shortDescription: 'Lorem ipsumus dumbledore harry maguire ten hag fuck off',
    benefits: ['5GB Storage', 'Free Hosting', 'Unlimited Domains', '10 Email Account', '24/7 Support'],
    url: ''
  },
  three: {
    id: "free",
    planType: '$89.99',
    cost: 'Free',
    shortDescription: 'Lorem ipsumus dumbledore harry maguire ten hag fuck off',
    benefits: ['5GB Storage', 'Free Hosting', 'Unlimited Domains', '10 Email Account', '24/7 Support'],
    url: ''
  },

};
