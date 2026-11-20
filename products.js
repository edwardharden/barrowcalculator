/*
 * PRODUCT + AFFILIATE CONFIG
 * --------------------------------------------------------------
 * Everything money-related lives in this one file.
 *
 * 1. When Amazon Associates approves you, put your tag in AFFILIATE.amazonTag
 *    (e.g. "barrow-21"). It is appended to every Amazon link automatically.
 * 2. When Awin approves you for a retailer, replace that product's `url`
 *    with the Awin deep link Awin gives you.
 * 3. Prices are ESTIMATES used for the "approx. cost" figure. Check and
 *    update them every few months.
 *
 * All links are currently PLACEHOLDERS (plain retailer search pages).
 */
window.AFFILIATE = {
  amazonTag: "barrowcalc-21" // <-- add your Amazon Associates tag here
};

window.PRODUCTS = {
  gravel: [
    { name: "Decorative gravel, 20kg bag", retailer: "Amazon", unit: "bag", sizeKg: 20, price: 6.5,
      url: "https://www.amazon.co.uk/s?k=decorative+gravel+20kg" },
    { name: "10mm gravel, bulk bag (~850kg)", retailer: "B&Q", unit: "bulk bag", sizeKg: 850, price: 85,
      url: "https://www.diy.com/search?term=gravel+bulk+bag" },
    { name: "Driveway gravel, bulk bag (~850kg)", retailer: "Wickes", unit: "bulk bag", sizeKg: 850, price: 90,
      url: "https://www.wickes.co.uk/search?text=gravel+bulk+bag" }
  ],
  topsoil: [
    { name: "Screened topsoil, 25L bag", retailer: "Amazon", unit: "bag", sizeM3: 0.025, price: 5,
      url: "https://www.amazon.co.uk/s?k=topsoil+25L" },
    { name: "Premium topsoil, bulk bag (~0.75m³)", retailer: "B&Q", unit: "bulk bag", sizeM3: 0.75, price: 95,
      url: "https://www.diy.com/search?term=topsoil+bulk+bag" },
    { name: "Topsoil, bulk bag (~0.75m³)", retailer: "Wickes", unit: "bulk bag", sizeM3: 0.75, price: 90,
      url: "https://www.wickes.co.uk/search?text=topsoil+bulk+bag" }
  ],
  bark: [
    { name: "Bark mulch, 70L bag", retailer: "Amazon", unit: "bag", sizeM3: 0.07, price: 9,
      url: "https://www.amazon.co.uk/s?k=bark+mulch+70L" },
    { name: "Ornamental bark, bulk bag (~1m³)", retailer: "B&Q", unit: "bulk bag", sizeM3: 1, price: 100,
      url: "https://www.diy.com/search?term=bark+bulk+bag" },
    { name: "Play bark, bulk bag (~1m³)", retailer: "Wickes", unit: "bulk bag", sizeM3: 1, price: 105,
      url: "https://www.wickes.co.uk/search?text=play+bark" }
  ],
  seed: [
    { name: "Lawn seed, 500g", retailer: "Amazon", unit: "box", sizeKg: 0.5, price: 8,
      url: "https://www.amazon.co.uk/s?k=lawn+seed+500g" },
    { name: "Hard-wearing lawn seed, 1.5kg", retailer: "B&Q", unit: "box", sizeKg: 1.5, price: 18,
      url: "https://www.diy.com/search?term=lawn+seed" },
    { name: "Lawn seed, 10kg sack", retailer: "Amazon", unit: "sack", sizeKg: 10, price: 65,
      url: "https://www.amazon.co.uk/s?k=grass+seed+10kg" }
  ],
  turf: [
    { name: "Standard lawn turf (1m² roll)", retailer: "Wickes", unit: "roll", sizeM2: 1, price: 4.5,
      url: "https://www.wickes.co.uk/search?text=turf" },
    { name: "Premium lawn turf (1m² roll)", retailer: "B&Q", unit: "roll", sizeM2: 1, price: 6,
      url: "https://www.diy.com/search?term=turf" },
    { name: "Pre-turf lawn feed", retailer: "Amazon", unit: "box", sizeM2: 100, price: 12,
      url: "https://www.amazon.co.uk/s?k=pre+turf+fertiliser" }
  ]
};
