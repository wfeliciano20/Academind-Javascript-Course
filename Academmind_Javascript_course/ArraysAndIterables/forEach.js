const prices = [10.99, 5.99, 3.99, 6.59]
const tax = 0.19;
const taxAdjustedPrices = [];
const taxAdjustedPrices2 = [];


prices.forEach((price, index, prices) => {
    const priceObject = {
        index: index,
        taxAdjPrice: price * (1 + tax)
    };
    taxAdjustedPrices.push(priceObject);
});

console.log(taxAdjustedPrices);