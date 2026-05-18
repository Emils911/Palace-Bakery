// ═══════════════════════════════════════════════════════
//  Palace Bakery — Menu Data
//  Edit this file to update items, prices, and images
// ═══════════════════════════════════════════════════════

const MENU_DATA = [
  // ── MEAT PIES ──────────────────────────────────────────
  {
    id: 1,
    name: "Royal Beef Pie",
    category: "pies",
    price: 18.00,
    tag: "bestseller",
    description: "Slow-cooked spiced beef in a golden, buttery crust.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&q=80"
  },
  {
    id: 2,
    name: "Chicken & Mushroom Pie",
    category: "pies",
    price: 16.00,
    tag: null,
    description: "Creamy chicken with sautéed mushrooms, topped with flaky pastry.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80"
  },
  {
    id: 3,
    name: "Lamb Puff Pie",
    category: "pies",
    price: 20.00,
    tag: "new",
    description: "Tender lamb with herbs baked inside a crisp puff pastry shell.",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80"
  },
  {
    id: 4,
    name: "Veggie Palace Pie",
    category: "pies",
    price: 14.00,
    tag: null,
    description: "Garden vegetables and cheese in our signature crust.",
    image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80"
  },

  // ── PASTRIES ───────────────────────────────────────────
  {
    id: 5,
    name: "Butter Croissant",
    category: "pastries",
    price: 8.00,
    tag: "popular",
    description: "Classically laminated, shatteringly crisp on the outside.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80"
  },
  {
    id: 6,
    name: "Chocolate Danish",
    category: "pastries",
    price: 10.00,
    tag: null,
    description: "Swirled dark chocolate filling in flaky pastry layers.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80"
  },
  {
    id: 7,
    name: "Almond Twist",
    category: "pastries",
    price: 9.00,
    tag: null,
    description: "Frangipane-filled pastry twisted and dusted with flaked almonds.",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80"
  },
  {
    id: 8,
    name: "Cinnamon Roll",
    category: "pastries",
    price: 11.00,
    tag: "bestseller",
    description: "Soft, pillowy rolls with caramel glaze and warm cinnamon.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80"
  },

  // ── BREADS ─────────────────────────────────────────────
  {
    id: 9,
    name: "Sourdough Loaf",
    category: "breads",
    price: 22.00,
    tag: null,
    description: "72-hour fermented, with a crackling crust and open crumb.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80"
  },
  {
    id: 10,
    name: "Honey Oat Bread",
    category: "breads",
    price: 18.00,
    tag: "popular",
    description: "Wholesome oat bread with a subtle honey sweetness.",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80"
  },
  {
    id: 11,
    name: "Rosemary Focaccia",
    category: "breads",
    price: 20.00,
    tag: "new",
    description: "Olive oil-drenched focaccia with sea salt and fresh rosemary.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80"
  },
  {
    id: 12,
    name: "Brioche Loaf",
    category: "breads",
    price: 25.00,
    tag: null,
    description: "Rich, egg-enriched brioche — buttery, soft, and golden.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80"
  },

  // ── CAKES ──────────────────────────────────────────────
  {
    id: 13,
    name: "Royal Chocolate Cake",
    category: "cakes",
    price: 45.00,
    tag: "bestseller",
    description: "Three layers of dark chocolate sponge with ganache frosting.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80"
  },
  {
    id: 14,
    name: "Vanilla Crown Cake",
    category: "cakes",
    price: 40.00,
    tag: null,
    description: "Light vanilla bean sponge layered with fresh cream and berries.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80"
  },
  {
    id: 15,
    name: "Lemon Drizzle",
    category: "cakes",
    price: 38.00,
    tag: "popular",
    description: "Zesty lemon loaf with a glossy citrus glaze.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80"
  },
  {
    id: 16,
    name: "Red Velvet Slice",
    category: "cakes",
    price: 35.00,
    tag: null,
    description: "Classic red velvet with smooth cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80"
  },

  // ── COOKIES ────────────────────────────────────────────
  {
    id: 17,
    name: "Palace Choco Chip",
    category: "cookies",
    price: 6.00,
    tag: "popular",
    description: "Thick, chewy cookies loaded with dark chocolate chunks.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80"
  },
  {
    id: 18,
    name: "Shortbread Rounds",
    category: "cookies",
    price: 5.00,
    tag: null,
    description: "Melt-in-your-mouth buttery shortbread, lightly sugared.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80"
  },
  {
    id: 19,
    name: "Oatmeal Raisin",
    category: "cookies",
    price: 5.50,
    tag: null,
    description: "Hearty oatmeal cookies with plump raisins and a hint of cinnamon.",
    image: "https://images.unsplash.com/photo-1590080875852-4a40e1cb4a7d?w=400&q=80"
  },
  {
    id: 20,
    name: "Snickerdoodle",
    category: "cookies",
    price: 5.50,
    tag: "new",
    description: "Soft cinnamon-sugar cookies with a slightly crisp exterior.",
    image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400&q=80"
  },

  // ── BEVERAGES ──────────────────────────────────────────
  {
    id: 21,
    name: "Royal Mint Tea",
    category: "drinks",
    price: 7.00,
    tag: null,
    description: "Freshly brewed mint tea served hot or iced.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80"
  },
  {
    id: 22,
    name: "Palace Espresso",
    category: "drinks",
    price: 9.00,
    tag: "popular",
    description: "Double shot of smooth, single-origin Ghanaian espresso.",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80"
  },
  {
    id: 23,
    name: "Chocolate Milk",
    category: "drinks",
    price: 8.00,
    tag: null,
    description: "Rich cocoa stirred into fresh cold milk.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80"
  },
  {
    id: 24,
    name: "Chilled Lemonade",
    category: "drinks",
    price: 7.50,
    tag: null,
    description: "Fresh-squeezed lemonade with a hint of ginger.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80"
  },

  // ── JUICES ─────────────────────────────────────────────
  {
    id: 25,
    name: "Pineapple Blend",
    category: "juices",
    price: 9.00,
    tag: "popular",
    description: "Fresh pineapple blended with ginger and a pinch of turmeric.",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&q=80"
  },
  {
    id: 26,
    name: "Watermelon Cooler",
    category: "juices",
    price: 8.00,
    tag: null,
    description: "Cold-pressed watermelon with mint and lime.",
    image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=400&q=80"
  },
  {
    id: 27,
    name: "Mango Passion",
    category: "juices",
    price: 9.50,
    tag: "new",
    description: "Ripe Ghanaian mango blended with passion fruit.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80"
  },
  {
    id: 28,
    name: "Green Detox",
    category: "juices",
    price: 10.00,
    tag: null,
    description: "Cucumber, spinach, green apple, and lemon.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&q=80"
  },
];

// Category display config — edit label/icon here
const CATEGORIES = [
  { key: "all",      label: "All Items",    icon: "⊞", group: "BAKED GOODS" },
  { key: "pies",     label: "Meat Pies",    icon: "◈", group: "BAKED GOODS" },
  { key: "pastries", label: "Pastries",     icon: "◇", group: "BAKED GOODS" },
  { key: "breads",   label: "Breads",       icon: "▣", group: "BAKED GOODS" },
  { key: "cakes",    label: "Cakes",        icon: "◉", group: "BAKED GOODS" },
  { key: "cookies",  label: "Cookies",      icon: "◎", group: "BAKED GOODS" },
  { key: "drinks",   label: "Beverages",    icon: "◑", group: "DRINKS" },
  { key: "juices",   label: "Fresh Juices", icon: "◐", group: "DRINKS" },
];
