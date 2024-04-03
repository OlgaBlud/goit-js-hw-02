'use strict';
console.log('________task 4 ________');
function getShippingCost(country) {
  let price;
  //   let message = `Shipping to ${country} will cost ${price} credits`;
  switch (country) {
    case 'China':
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;

    case 'Chile':
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Australia':
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    case 'Jamaica':
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    //   break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}
//  Чому в return не можна просто поставити message? повертає undefined для price.
//  Чи треба break? Якщо return, то він стає напівпрозорим.

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
