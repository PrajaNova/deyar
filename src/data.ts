import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Deyar Reserve Brew',
    description: 'Our signature dark roast with rich chocolate, roasted hazelnut, and cedarwood undertones. Bold yet velvety, inspired by the strength of the Himalayan bear.',
    price: 4.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Bold'],
    customizationOptions: [
      { name: 'Size', options: ['Regular (12oz)', 'Large (16oz)'] },
      { name: 'Milk', options: ['Whole Milk', 'Oat Milk (+ $0.75)', 'Almond Milk (+ $0.75)', 'Black'] }
    ]
  },
  {
    id: 'c2',
    name: 'Deodar Wood-Smoke Espresso',
    description: 'A double shot of espresso extracted over slow-melt, deodar-wood smoked brown sugar. Deceptively smooth and incredibly aromatic.',
    price: 5.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-151097252790b-af4f42d914a9?q=80&w=600&auto=format&fit=crop',
    tags: ['Aromatic', 'Hot Only'],
    customizationOptions: [
      { name: 'Espresso', options: ['Double Shot', 'Triple Shot (+ $1.00)'] },
      { name: 'Sweetness', options: ['Smoked Sugar', 'Extra Sweet', 'Unsweetened'] }
    ]
  },
  {
    id: 'c3',
    name: 'Wild Honey Cortado',
    description: 'Equal parts rich espresso and silky steamed oat milk, sweetened with rare wild forest honey harvested from Himachali pine trees.',
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
    tags: ['Balanced', 'Wild Honey'],
    customizationOptions: [
      { name: 'Milk', options: ['Oat Milk', 'Whole Milk', 'Almond Milk'] },
      { name: 'Honey Level', options: ['Normal Sweet', 'Subtle Option', 'Extra Honey'] }
    ]
  },
  {
    id: 'c4',
    name: 'Classic Mountain Cappuccino',
    description: 'Rich espresso featuring deeply aerated, thick milk foam and a dusting of fresh-grated Himachali mountain nutmeg and chocolate curls.',
    price: 4.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
    tags: ['Classic', 'Popular'],
    customizationOptions: [
      { name: 'Size', options: ['Regular (12oz)', 'Large (16oz)'] },
      { name: 'Milk', options: ['Whole Milk', 'Oat Milk (+ $0.75)', 'Almond Milk (+ $0.75)', 'Lactose Free'] }
    ]
  },

  // TEA
  {
    id: 't1',
    name: 'Rhododendron Petal Infusion',
    description: 'Hand-harvested dried red rhododendron petals brewed with mountain mint and wild chamomile. Extremely soothing, floral, and naturally caffeine-free.',
    price: 4.25,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop',
    tags: ['Floral', 'Caffeine-Free', 'Handmade'],
    customizationOptions: [
      { name: 'Serving', options: ['Hot Steeper Pot', 'Iced Floral Draft'] },
      { name: 'Sweetener', options: ['Himachali Wild Honey', 'Raw Cane Sugar', 'None'] }
    ]
  },
  {
    id: 't2',
    name: 'Himalayan Sea-Buckthorn Herbal',
    description: 'Tangy, golden sea-buckthorn berries rich in vitamin C, blended with forest stinging-nettle leaves and green tea. Citrusy, refreshing and immune-boosting.',
    price: 4.50,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
    tags: ['Tangy', 'Immune-Boost'],
    customizationOptions: [
      { name: 'Sweetness', options: ['Light Honey', 'Regular Sweet', 'No Sweetener'] }
    ]
  },
  {
    id: 't3',
    name: 'Kangra Valley Premium Green',
    description: 'Whole leaf green tea grown in the high-altitude fields of Kangra. Crisp, grassy, with a clean and elegantly lingering sweet finish.',
    price: 4.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop',
    tags: ['High Altitude', 'Antioxidant'],
    customizationOptions: [
      { name: 'Infusion Time', options: ['Standard Pot (3 min)', 'Bold (5 min)'] }
    ]
  },

  // PASTRIES
  {
    id: 'p1',
    name: 'Sweet Siddu Walnut Roll',
    description: 'Our artisanal take on Himachalis traditional Siddu bread. A fluffy steamed wheat roll stuffed with toasted local walnuts, ground poppy seed paste, and drizzled with deodar-infused honey.',
    price: 4.95,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1628087968593-9c29cc653a99?q=80&w=600&auto=format&fit=crop',
    tags: ['Local Recipe', 'Must Try'],
    customizationOptions: [
      { name: 'Serving', options: ['Steamed Warm', 'Light Toasted'] }
    ]
  },
  {
    id: 'p2',
    name: 'Kotgarh Apple Cinnamon Scone',
    description: 'Flaky mountain butter scone studded with sweet, cinnamon-spiced apple chunks sourced directly from the orchard heights of Kotgarh in Shimla.',
    price: 3.95,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    tags: ['Warm apple', 'Orchard Sourced'],
    customizationOptions: [
      { name: 'Warm Warm', options: ['Yes, warmed', 'Room Temp'] },
      { name: 'Adding Side', options: ['Scone only', 'With clotted butter (+ $0.50)'] }
    ]
  },
  {
    id: 'p3',
    name: 'Sprouted Almond Blueberry Muffin',
    description: 'Dense, rustic mountain muffin made with sprouted local grains, studded with wild, shade-dried wild forest blueberries, and topped with crunchy toasted almonds.',
    price: 3.80,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop',
    tags: ['Nutritious', 'Rustic'],
    customizationOptions: [
      { name: 'Size', options: ['Regular Muffin', 'Jumbo Sized (+ $1.00)'] }
    ]
  },

  // SEASONAL
  {
    id: 's1',
    name: 'Himachali Spice Latte',
    description: 'Wild cinnamon, cardamom pod extracts, grated ginger, and rich mountain espresso folded into steamed milk. Warm, comforting, and layered like the snowy peaks.',
    price: 5.50,
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop',
    tags: ['Seasonal', 'Peak Comfort'],
    isSeasonal: true,
    customizationOptions: [
      { name: 'Milk Type', options: ['Whole Milk', 'Oat Milk (+ $0.75)', 'Almond Milk'] },
      { name: 'Sweetener', options: ['Forest Honey', 'Brown Sugar', 'Unsweetened'] }
    ]
  },
  {
    id: 's2',
    name: 'Pinecone-Sage Infused Draft',
    description: 'Cold brewed Deyar espresso infused with custom-steeped kitchen sage syrup, poured over ice, finished with a pinecone wood-smoke scent fog.',
    price: 5.75,
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
    tags: ['Cold Infusion', 'Forest Botanicals'],
    isSeasonal: true,
    customizationOptions: [
      { name: 'Serving Style', options: ['Slow Sip Rocks', 'Straight Draft Glass'] }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tst1',
    name: 'Aarav Sharma',
    role: 'Local Writer & Regular',
    text: 'Deyar is not just a cafe, its a retreat. The smell of deodar-smoked espresso immediately transports me to Himachali childhood log cabins. The Siddu Walnut roll is absolutely spectacular.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'tst2',
    name: 'Elena Rostova',
    role: 'Travel Journalist',
    text: 'I came in because of the logo—the sweet Himalayan bear looking up at a pinecone. But I stayed for hours because of the warmth, the soft mountain lore, and the best green tea I have ever had.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'tst3',
    name: 'Devendra Thakur',
    role: 'Trek Guide',
    text: 'After a long trek in the cold peaks, having a hot Wild Honey Cortado at Deyar tastes like heaven. Love that they preserve Himachali folklore and support our regional wild bee farmers.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  }
];

export const CAFE_HOURS = [
  { day: 'Monday - Friday', time: '7:30 AM - 8:00 PM' },
  { day: 'Saturday - Sunday', time: '8:30 AM - 9:30 PM' }
];

export const CAFE_STORY = {
  tagline: 'Grown in Himalayan Forest Storieâ€”Smoked in Woodfireâ€\u009d',
  story_title: 'The Legend of the Himalayan Bear & the Deodar Forest',
  paragraphs: [
    'In the serene heights of Himachal, mountain folk tell of the Himalayan Bearâ€”the ancient guardian of the deodar pine forests. In Himachal folklore, the bear is the protector of the wild woods, leading tired hikers and trekkers safely through silent snowy slopes and guiding them toward hidden, sunlit glades filled with wild berries and mountain herbs.',
    'Itâ€™s said that whenever the bear is happy, it balances a small fallen pinecone on its nose, looking up towards the mountain sky in pure gratitude. This playful yet protective spirit represents resilience, deep connection to nature, and the joy of simple forest treasures.',
    'Deyar Café was founded to share this warmth. Rooted in traditional Himachali storytelling, local natural ingredients, and a slow, cozy lifestyle, we preserve age-old recipes through modern coffee craftsmanship. Every bag of single-origin beans supports community farms in the high valleys, while our honey is ethically gathered by wild bee-keepers who share our devotion to protecting our surrounding forests.',
    'Pull up a wooden bench, take in the rich aroma of pinecone-sage smoke, and find your sanctuary.'
  ]
};
