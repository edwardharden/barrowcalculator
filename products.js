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
  // Amazon products and prices checked on amazon.co.uk on 21 Nov 2026 (London postcode).
  gravel: [
    { name: "Suregreen Pea Gravel Shingle 10mm, 20kg bag", retailer: "Amazon", unit: "bag", sizeKg: 20, price: 14.99,
      url: "https://www.amazon.co.uk/dp/B08JCD3SG3" },
    { name: "10mm Gravel/Shingle, bulk bag 825kg", retailer: "Amazon", unit: "bulk bag", sizeKg: 825, price: 88,
      url: "https://www.amazon.co.uk/dp/B0CN1MPRL8" },
    { name: "Driveway gravel, bulk bag (~850kg)", retailer: "Wickes", unit: "bulk bag", sizeKg: 850, price: 90,
      url: "https://www.wickes.co.uk/search?text=gravel+bulk+bag" }
  ],
  topsoil: [
    { name: "Hardys Top Soil for Garden & Lawn, 25L", retailer: "Amazon", unit: "bag", sizeM3: 0.025, price: 12.10,
      url: "https://www.amazon.co.uk/dp/B0CW3MXXFQ" },
    { name: "Quality Topsoil, bulk bag (approx. 500-600L)", retailer: "Amazon", unit: "bulk bag", sizeM3: 0.55, price: 99.99,
      url: "https://www.amazon.co.uk/dp/B0CND621LW" },
    { name: "Topsoil, bulk bag (~0.75m³)", retailer: "Wickes", unit: "bulk bag", sizeM3: 0.75, price: 90,
      url: "https://www.wickes.co.uk/search?text=topsoil+bulk+bag" }
  ],
  bark: [
    { name: "Westland Bed & Border Chipped Bark, 70L", retailer: "Amazon", unit: "bag", sizeM3: 0.07, price: 12.14,
      url: "https://www.amazon.co.uk/dp/B08TX1DVXP" },
    { name: "Supagrow Landscaping Bark, bulk bag 600L", retailer: "Amazon", unit: "bulk bag", sizeM3: 0.6, price: 153.68,
      url: "https://www.amazon.co.uk/dp/B091ZGGMJ7" },
    { name: "Play bark, bulk bag (~1m³)", retailer: "Wickes", unit: "bulk bag", sizeM3: 1, price: 105,
      url: "https://www.wickes.co.uk/search?text=play+bark" }
  ],
  seed: [
    { name: "Lawn UK Sprogs & Dogs Grass Seed, 500g", retailer: "Amazon", unit: "box", sizeKg: 0.5, price: 9.99,
      url: "https://www.amazon.co.uk/dp/B08TLV6YT4" },
    { name: "GroundMaster Hard Wearing Lawn Seed, 1.5kg", retailer: "Amazon", unit: "box", sizeKg: 1.5, price: 16.49,
      url: "https://www.amazon.co.uk/dp/B0CWNXN85X" },
    { name: "Lawn UK Sprogs & Dogs Grass Seed, 10kg", retailer: "Amazon", unit: "sack", sizeKg: 10, price: 38.34,
      url: "https://www.amazon.co.uk/dp/B08TMD6F1X" }
  ],
  turf: [
    { name: "Standard lawn turf (1m² roll)", retailer: "Wickes", unit: "roll", sizeM2: 1, price: 4.5,
      url: "https://www.wickes.co.uk/search?text=turf" },
    { name: "Premium lawn turf (1m² roll)", retailer: "B&Q", unit: "roll", sizeM2: 1, price: 6,
      url: "https://www.diy.com/search?term=turf" },
    { name: "Seed & Turf Feed pre-turf fertiliser, 1.25kg", retailer: "Amazon", unit: "box", sizeM2: 35, price: 13.99,
      url: "https://www.amazon.co.uk/dp/B0B5NJJMQQ" }
  ]
};
