/**
 * SEVEN STAR RESTAURANT — DEMO DATA LAYER
 * Initial Seed Data for Categories, Menu Items, Orders, Customers, Staff, and Settings
 */

const SEED_DATA = {
  restaurant: {
    name: "Seven Star Restaurant",
    tagline: "Fine Dining & Authentic Culinary Traditions",
    founded: "2012",
    gstNumber: "36AAACS1429B1Z8",
    phone: "+91 98765 43210",
    altPhone: "+91 40 2345 6789",
    email: "reservations@sevenstarrestaurant.com",
    supportEmail: "orders@sevenstarrestaurant.com",
    address: {
      line1: "Plot No. 42, Royal Heritage Enclave",
      line2: "Road No. 36, Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500033",
      country: "India"
    },
    timings: {
      lunch: "12:00 PM – 03:30 PM",
      dinner: "07:00 PM – 11:30 PM",
      days: "Monday – Sunday"
    },
    settings: {
      currency: "₹",
      currencyCode: "INR",
      gstPercentage: 5,
      packagingCharge: 25,
      deliveryFee: 40,
      freeDeliveryThreshold: 500,
      acceptingOrders: true,
      soundNotifications: true
    }
  },

  coupons: [
    {
      code: "SEVENSTAR10",
      description: "10% off on all orders above ₹400",
      discountType: "percentage",
      value: 10,
      minOrder: 400,
      maxDiscount: 150,
      isActive: true
    },
    {
      code: "WELCOME50",
      description: "Flat ₹50 off on your order above ₹300",
      discountType: "flat",
      value: 50,
      minOrder: 300,
      maxDiscount: 50,
      isActive: true
    },
    {
      code: "FEAST20",
      description: "20% off on grand dining above ₹1000",
      discountType: "percentage",
      value: 20,
      minOrder: 1000,
      maxDiscount: 300,
      isActive: true
    }
  ],

  categories: [
    {
      id: "starters",
      name: "Starters",
      slug: "starters",
      description: "Crispy appetizers, kebabs, and handcrafted finger foods to awaken your palate.",
      icon: "utensils",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "soups",
      name: "Soups",
      slug: "soups",
      description: "Nourishing broths, rich veloutés, and aromatic slow-simmered herbal potages.",
      icon: "soup",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "indian-main-course",
      name: "Indian Main Course",
      slug: "indian-main-course",
      description: "Rich curries, slow-cooked gravies, and heritage royal recipes paired with breads.",
      icon: "bowl-rice",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "biryani",
      name: "Biryani",
      slug: "biryani",
      description: "Authentic Dum Biryanis infused with saffron, caramelized onions, and aged spices.",
      icon: "fire",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "chinese",
      name: "Chinese",
      slug: "chinese",
      description: "Wok-tossed noodles, Indo-Chinese sauces, dim sums, and sizzling specialties.",
      icon: "chopsticks",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tandoori",
      name: "Tandoori",
      slug: "tandoori",
      description: "Clay oven roasted meats, paneer tikka, and freshly baked artisanal naan breads.",
      icon: "flame",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "beverages",
      name: "Beverages",
      slug: "beverages",
      description: "Refreshing mocktails, traditional churned lassi, artisanal teas, and coolers.",
      icon: "glass",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "desserts",
      name: "Desserts",
      slug: "desserts",
      description: "Decadent Indian sweets, saffron-scented delicacies, and gourmet treats.",
      icon: "cookie",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    }
  ],

  menuItems: [
    // --- Starters ---
    {
      id: "ITEM-001",
      name: "Crispy Paneer Kurkure",
      category: "starters",
      price: 280,
      description: "Fresh cottage cheese fingers coated in crushed spices and crisped golden, served with mint-coriander emulsion.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1567184109411-b28f27027318?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: "Medium",
      prepTime: "15 min",
      calories: "340 kcal",
      variants: [
        { name: "Regular (6 Pcs)", price: 280 },
        { name: "Platter (10 Pcs)", price: 420 }
      ]
    },
    {
      id: "ITEM-002",
      name: "Royal Mutton Galouti Kebab",
      category: "starters",
      price: 440,
      description: "Mouth-melting Lucknowi style spiced mutton patties infused with kewra, raw papaya, and 16 secret aromatic herbs.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: "Mild",
      prepTime: "20 min",
      calories: "420 kcal",
      variants: [
        { name: "Regular (4 Pcs)", price: 440 },
        { name: "Large (6 Pcs)", price: 620 }
      ]
    },
    {
      id: "ITEM-003",
      name: "Seven Star Stuffed Mushrooms",
      category: "starters",
      price: 310,
      description: "Plump button mushrooms stuffed with spiced bell peppers, herbs, and cheese, baked to charred perfection.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: null,
      spiceLevel: "Mild",
      prepTime: "15 min",
      calories: "260 kcal",
      variants: [
        { name: "Single Portion", price: 310 }
      ]
    },

    // --- Soups ---
    {
      id: "ITEM-004",
      name: "Murgh Yakhni Shurba",
      category: "soups",
      price: 240,
      description: "Slow-simmered Kashmiri chicken broth infused with black cardamom, fennel seeds, saffron, and fresh cilantro.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Recommended",
      spiceLevel: "Mild",
      prepTime: "12 min",
      calories: "180 kcal",
      variants: [
        { name: "Bowl (300ml)", price: 240 }
      ]
    },
    {
      id: "ITEM-005",
      name: "Cream of Roasted Tomato & Basil",
      category: "soups",
      price: 210,
      description: "Vine-ripened tomatoes fire-roasted with garlic, blended velvety smooth, and garnished with artisanal herb croutons.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: null,
      spiceLevel: "Mild",
      prepTime: "10 min",
      calories: "160 kcal",
      variants: [
        { name: "Bowl (300ml)", price: 210 }
      ]
    },

    // --- Indian Main Course ---
    {
      id: "ITEM-006",
      name: "Seven Star Butter Chicken",
      category: "indian-main-course",
      price: 420,
      description: "Tender tandoori chicken simmered in our signature velvet tomato gravy with churned butter, fenugreek, and cream.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: "Medium",
      prepTime: "20 min",
      calories: "540 kcal",
      variants: [
        { name: "Half Portion", price: 420 },
        { name: "Full Portion", price: 680 }
      ]
    },
    {
      id: "ITEM-007",
      name: "Paneer Lababdar Awadhi",
      category: "indian-main-course",
      price: 360,
      description: "Succulent paneer cubes simmered in a luscious onion-cashew gravy with grated cottage cheese and crushed spices.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Popular",
      spiceLevel: "Medium",
      prepTime: "18 min",
      calories: "460 kcal",
      variants: [
        { name: "Half Portion", price: 360 },
        { name: "Full Portion", price: 540 }
      ]
    },
    {
      id: "ITEM-008",
      name: "Dal Makhani Grand Reserve",
      category: "indian-main-course",
      price: 320,
      description: "Whole black lentils slow-cooked overnight for 24 hours on tandoor embers, finished with white butter and cream.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: "Mild",
      prepTime: "15 min",
      calories: "380 kcal",
      variants: [
        { name: "Regular", price: 320 },
        { name: "Family Bowl", price: 520 }
      ]
    },
    {
      id: "ITEM-009",
      name: "Nalli Rogan Josh",
      category: "indian-main-course",
      price: 520,
      description: "Braised lamb shanks slow-simmered in an intensely aromatic Kashmiri chili gravy infused with mace and ratan jot.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: "Hot",
      prepTime: "25 min",
      calories: "590 kcal",
      variants: [
        { name: "Single Shank", price: 520 },
        { name: "Double Shank", price: 890 }
      ]
    },

    // --- Biryani ---
    {
      id: "ITEM-010",
      name: "Hyderabadi Dum Chicken Biryani",
      category: "biryani",
      price: 390,
      description: "Fragrant Daawat basmati rice layered with marinated chicken, saffron strands, browned onions, sealed and slow cooked.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: "Medium",
      prepTime: "20 min",
      calories: "620 kcal",
      variants: [
        { name: "Single (Serves 1)", price: 390 },
        { name: "Handi (Serves 2-3)", price: 690 },
        { name: "Jumbo (Serves 4-5)", price: 1190 }
      ]
    },
    {
      id: "ITEM-011",
      name: "Subz Nizami Saffron Biryani",
      category: "biryani",
      price: 330,
      description: "Garden fresh seasonal vegetables, mint, and long-grain rice slow steamed in a sealed clay handi with pure saffron.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Popular",
      spiceLevel: "Medium",
      prepTime: "18 min",
      calories: "480 kcal",
      variants: [
        { name: "Single (Serves 1)", price: 330 },
        { name: "Handi (Serves 2-3)", price: 580 }
      ]
    },
    {
      id: "ITEM-012",
      name: "Royal Mutton Dum Biryani",
      category: "biryani",
      price: 490,
      description: "Prime bone-in mutton cuts infused with royal spices, layered under fragrant basmati and dum cooked over charcoal.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: "Medium",
      prepTime: "22 min",
      calories: "680 kcal",
      variants: [
        { name: "Single (Serves 1)", price: 490 },
        { name: "Handi (Serves 2-3)", price: 890 }
      ]
    },

    // --- Chinese ---
    {
      id: "ITEM-013",
      name: "Chili Garlic Hakka Noodles",
      category: "chinese",
      price: 260,
      description: "Artisanal hand-pulled noodles stir fried in high wok flame with slivered vegetables, garlic, and fiery red chili paste.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: null,
      spiceLevel: "Medium",
      prepTime: "15 min",
      calories: "410 kcal",
      variants: [
        { name: "Veg", price: 260 },
        { name: "With Chicken", price: 320 }
      ]
    },
    {
      id: "ITEM-014",
      name: "Crispy Szechuan Fish",
      category: "chinese",
      price: 440,
      description: "Delicate river sole fillets fried crisp and glazed in a pungent ginger-scallion Szechuan chili glaze.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: "Hot",
      prepTime: "18 min",
      calories: "390 kcal",
      variants: [
        { name: "Regular Portion", price: 440 }
      ]
    },
    {
      id: "ITEM-015",
      name: "Veg Manchurian Dry",
      category: "chinese",
      price: 270,
      description: "Crispy vegetable dumplings tossed with diced scallions, garlic, soy sauce, and fresh coriander in smoking wok.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Popular",
      spiceLevel: "Medium",
      prepTime: "14 min",
      calories: "320 kcal",
      variants: [
        { name: "Dry (Appetizer)", price: 270 },
        { name: "Gravy (Main Course)", price: 290 }
      ]
    },

    // --- Tandoori ---
    {
      id: "ITEM-016",
      name: "Seven Star Tandoori Murgh",
      category: "tandoori",
      price: 380,
      description: "Whole chicken steeped in mustard oil, Kashmiri degi mirch, Greek yogurt, and charred smoky in our earthen tandoor.",
      isVeg: false,
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: "Medium",
      prepTime: "22 min",
      calories: "510 kcal",
      variants: [
        { name: "Half Tandoori", price: 380 },
        { name: "Full Tandoori", price: 650 }
      ]
    },
    {
      id: "ITEM-017",
      name: "Bhatti Da Paneer Tikka",
      category: "tandoori",
      price: 340,
      description: "Thick blocks of malai paneer steeped in roasted cumin, kasoori methi, bell peppers, skewered and blistered over coal.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1567184109411-b28f27027318?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Popular",
      spiceLevel: "Medium",
      prepTime: "18 min",
      calories: "420 kcal",
      variants: [
        { name: "Regular (6 Pcs)", price: 340 }
      ]
    },
    {
      id: "ITEM-018",
      name: "Artisanal Garlic Naan Basket",
      category: "tandoori",
      price: 180,
      description: "Leavened refined flour flatbreads studded with roasted garlic and coriander, finished with bubbling melted butter.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: null,
      spiceLevel: "Mild",
      prepTime: "8 min",
      calories: "280 kcal",
      variants: [
        { name: "Butter Naan (2 Pcs)", price: 140 },
        { name: "Garlic Naan (2 Pcs)", price: 180 },
        { name: "Assorted Bread Basket", price: 290 }
      ]
    },

    // --- Beverages ---
    {
      id: "ITEM-019",
      name: "Kesariya Malai Lassi",
      category: "beverages",
      price: 160,
      description: "Hand-churned thick Punjabi yogurt sweet lassi infused with Iranian saffron, green cardamom, and toasted pistachio slivers.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1571006682855-3fc9396f4b68?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: null,
      prepTime: "5 min",
      calories: "290 kcal",
      variants: [
        { name: "Glass (350ml)", price: 160 },
        { name: "Earthen Kulhad (450ml)", price: 210 }
      ]
    },
    {
      id: "ITEM-020",
      name: "Royal Rose Petal Mojito",
      category: "beverages",
      price: 180,
      description: "Muddled fresh garden mint, Persian Damascus rose cordial, sparkling soda, and freshly squeezed key limes.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: null,
      prepTime: "6 min",
      calories: "140 kcal",
      variants: [
        { name: "Standard Cooler", price: 180 }
      ]
    },
    {
      id: "ITEM-021",
      name: "Masala Chaas with Roasted Jeera",
      category: "beverages",
      price: 120,
      description: "Cooling spiced buttermilk blended with rock salt, green chilies, ginger, and temperings of curry leaves and cumin.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: null,
      spiceLevel: "Mild",
      prepTime: "5 min",
      calories: "90 kcal",
      variants: [
        { name: "Glass (350ml)", price: 120 }
      ]
    },

    // --- Desserts ---
    {
      id: "ITEM-022",
      name: "Seven Star Shahi Tukda",
      category: "desserts",
      price: 240,
      description: "Ghee-crisped artisanal brioche soaked in cardamom saffron syrup, blanketed with reduced rabri and silver vark.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Bestseller",
      spiceLevel: null,
      prepTime: "10 min",
      calories: "380 kcal",
      variants: [
        { name: "Portion (2 Pcs)", price: 240 }
      ]
    },
    {
      id: "ITEM-023",
      name: "Gulab Jamun Flambé with Rabri",
      category: "desserts",
      price: 220,
      description: "Warm mawa dumplings stuffed with pistachio-almond center, served over chilled aromatic thickened rabri.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Popular",
      spiceLevel: null,
      prepTime: "8 min",
      calories: "340 kcal",
      variants: [
        { name: "Serving (2 Pcs)", price: 220 }
      ]
    },
    {
      id: "ITEM-024",
      name: "Baked Kesar Rasmalai Tart",
      category: "desserts",
      price: 260,
      description: "Soft cottage cheese patties poached in clotted saffron milk, presented inside a crisp almond crust with rose petals.",
      isVeg: true,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      isAvailable: true,
      badge: "Chef's Special",
      spiceLevel: null,
      prepTime: "10 min",
      calories: "320 kcal",
      variants: [
        { name: "Single Tart", price: 260 }
      ]
    }
  ],

  customers: [
    {
      id: "CUST-001",
      name: "Vikramaditya Roy",
      phone: "9876543210",
      email: "vikram.roy@example.com",
      address: "Flat 402, Signature Heights, Jubilee Hills, Hyderabad - 500033",
      totalOrders: 3,
      totalSpend: 2480,
      registeredDate: "2026-09-15T14:30:00Z"
    },
    {
      id: "CUST-002",
      name: "Ananya Deshmukh",
      phone: "9812345678",
      email: "ananya.d@example.com",
      address: "Villa 18, Palm Meadows, Banjara Hills, Hyderabad - 500034",
      totalOrders: 2,
      totalSpend: 1540,
      registeredDate: "2026-10-02T19:10:00Z"
    },
    {
      id: "CUST-003",
      name: "Karan Malhotra",
      phone: "9765432109",
      email: "karan.m@example.com",
      address: "Plot 88, Financial District, Gachibowli, Hyderabad - 500032",
      totalOrders: 4,
      totalSpend: 3820,
      registeredDate: "2026-08-20T12:00:00Z"
    },
    {
      id: "CUST-004",
      name: "Sneha Reddy",
      phone: "9988776655",
      email: "sneha.reddy@example.com",
      address: "Tower B, Apt 1104, Madhapur, Hyderabad - 500081",
      totalOrders: 1,
      totalSpend: 890,
      registeredDate: "2026-10-28T20:15:00Z"
    }
  ],

  orders: [
    {
      id: "SSR-1024",
      orderDate: "2026-10-31T20:15:00.000Z",
      customer: {
        name: "Vikramaditya Roy",
        phone: "9876543210",
        email: "vikram.roy@example.com",
        address: "Flat 402, Signature Heights, Jubilee Hills, Hyderabad - 500033",
        notes: "Please pack extra mint chutney and spicy onions."
      },
      orderType: "delivery", // 'delivery' | 'pickup'
      status: "preparing", // 'placed' | 'accepted' | 'preparing' | 'ready' | 'completed' | 'cancelled'
      payment: {
        method: "online", // 'cod' | 'online'
        status: "paid", // 'pending' | 'paid' | 'failed'
        transactionId: "TXN-DEMO-884910",
        paymentGateway: "Simulated UPI (PhonePe)"
      },
      items: [
        {
          id: "ITEM-010",
          name: "Hyderabadi Dum Chicken Biryani",
          variant: "Handi (Serves 2-3)",
          price: 690,
          quantity: 1,
          itemTotal: 690,
          isVeg: false
        },
        {
          id: "ITEM-001",
          name: "Crispy Paneer Kurkure",
          variant: "Regular (6 Pcs)",
          price: 280,
          quantity: 1,
          itemTotal: 280,
          isVeg: true
        },
        {
          id: "ITEM-019",
          name: "Kesariya Malai Lassi",
          variant: "Earthen Kulhad (450ml)",
          price: 210,
          quantity: 2,
          itemTotal: 420,
          isVeg: true
        }
      ],
      pricing: {
        subtotal: 1390,
        discount: 139,
        couponCode: "SEVENSTAR10",
        deliveryFee: 0,
        packagingCharge: 25,
        gst: 64,
        grandTotal: 1340
      },
      statusTimeline: [
        { status: "placed", time: "2026-10-31T20:15:00.000Z", note: "Order placed online" },
        { status: "accepted", time: "2026-10-31T20:17:00.000Z", note: "Order confirmed by restaurant" },
        { status: "preparing", time: "2026-10-31T20:20:00.000Z", note: "Executive chef preparing dishes" }
      ]
    },
    {
      id: "SSR-1023",
      orderDate: "2026-10-31T19:40:00.000Z",
      customer: {
        name: "Ananya Deshmukh",
        phone: "9812345678",
        email: "ananya.d@example.com",
        address: "Villa 18, Palm Meadows, Banjara Hills, Hyderabad - 500034",
        notes: "Mild spice only, thank you!"
      },
      orderType: "delivery",
      status: "ready", // ready / out for delivery
      payment: {
        method: "cod",
        status: "pending",
        transactionId: null,
        paymentGateway: "Cash on Delivery"
      },
      items: [
        {
          id: "ITEM-007",
          name: "Paneer Lababdar Awadhi",
          variant: "Half Portion",
          price: 360,
          quantity: 1,
          itemTotal: 360,
          isVeg: true
        },
        {
          id: "ITEM-018",
          name: "Artisanal Garlic Naan Basket",
          variant: "Garlic Naan (2 Pcs)",
          price: 180,
          quantity: 2,
          itemTotal: 360,
          isVeg: true
        },
        {
          id: "ITEM-022",
          name: "Seven Star Shahi Tukda",
          variant: "Portion (2 Pcs)",
          price: 240,
          quantity: 1,
          itemTotal: 240,
          isVeg: true
        }
      ],
      pricing: {
        subtotal: 960,
        discount: 50,
        couponCode: "WELCOME50",
        deliveryFee: 0,
        packagingCharge: 25,
        gst: 47,
        grandTotal: 982
      },
      statusTimeline: [
        { status: "placed", time: "2026-10-31T19:40:00.000Z", note: "Order placed online" },
        { status: "accepted", time: "2026-10-31T19:42:00.000Z", note: "Order confirmed" },
        { status: "preparing", time: "2026-10-31T19:45:00.000Z", note: "In kitchen" },
        { status: "ready", time: "2026-10-31T20:10:00.000Z", note: "Dispatched with delivery partner" }
      ]
    },
    {
      id: "SSR-1022",
      orderDate: "2026-10-31T18:25:00.000Z",
      customer: {
        name: "Karan Malhotra",
        phone: "9765432109",
        email: "karan.m@example.com",
        address: "Seven Star Restaurant Dine-in / Pickup Counter",
        notes: "Self pickup around 7:15 PM"
      },
      orderType: "pickup",
      status: "completed",
      payment: {
        method: "online",
        status: "paid",
        transactionId: "TXN-DEMO-662319",
        paymentGateway: "Simulated Card (Visa •••• 4242)"
      },
      items: [
        {
          id: "ITEM-006",
          name: "Seven Star Butter Chicken",
          variant: "Full Portion",
          price: 680,
          quantity: 1,
          itemTotal: 680,
          isVeg: false
        },
        {
          id: "ITEM-018",
          name: "Artisanal Garlic Naan Basket",
          variant: "Assorted Bread Basket",
          price: 290,
          quantity: 1,
          itemTotal: 290,
          isVeg: true
        },
        {
          id: "ITEM-023",
          name: "Gulab Jamun Flambé with Rabri",
          variant: "Serving (2 Pcs)",
          price: 220,
          quantity: 1,
          itemTotal: 220,
          isVeg: true
        }
      ],
      pricing: {
        subtotal: 1190,
        discount: 119,
        couponCode: "SEVENSTAR10",
        deliveryFee: 0,
        packagingCharge: 0,
        gst: 54,
        grandTotal: 1125
      },
      statusTimeline: [
        { status: "placed", time: "2026-10-31T18:25:00.000Z", note: "Order placed" },
        { status: "accepted", time: "2026-10-31T18:27:00.000Z", note: "Order accepted" },
        { status: "preparing", time: "2026-10-31T18:30:00.000Z", note: "Prepared in kitchen" },
        { status: "ready", time: "2026-10-31T18:55:00.000Z", note: "Ready at pickup counter" },
        { status: "completed", time: "2026-10-31T19:15:00.000Z", note: "Handed over to customer" }
      ]
    },
    {
      id: "SSR-1021",
      orderDate: "2026-10-31T14:10:00.000Z",
      customer: {
        name: "Sneha Reddy",
        phone: "9988776655",
        email: "sneha.reddy@example.com",
        address: "Tower B, Apt 1104, Madhapur, Hyderabad - 500081",
        notes: "Leave package at reception security desk."
      },
      orderType: "delivery",
      status: "completed",
      payment: {
        method: "online",
        status: "paid",
        transactionId: "TXN-DEMO-441209",
        paymentGateway: "Simulated NetBanking (HDFC)"
      },
      items: [
        {
          id: "ITEM-011",
          name: "Subz Nizami Saffron Biryani",
          variant: "Handi (Serves 2-3)",
          price: 580,
          quantity: 1,
          itemTotal: 580,
          isVeg: true
        },
        {
          id: "ITEM-020",
          name: "Royal Rose Petal Mojito",
          variant: "Standard Cooler",
          price: 180,
          quantity: 2,
          itemTotal: 360,
          isVeg: true
        }
      ],
      pricing: {
        subtotal: 940,
        discount: 50,
        couponCode: "WELCOME50",
        deliveryFee: 0,
        packagingCharge: 25,
        gst: 46,
        grandTotal: 961
      },
      statusTimeline: [
        { status: "placed", time: "2026-10-31T14:10:00.000Z", note: "Order placed" },
        { status: "accepted", time: "2026-10-31T14:12:00.000Z", note: "Order accepted" },
        { status: "preparing", time: "2026-10-31T14:15:00.000Z", note: "Kitchen preparation" },
        { status: "ready", time: "2026-10-31T14:40:00.000Z", note: "Out for delivery" },
        { status: "completed", time: "2026-10-31T15:05:00.000Z", note: "Delivered successfully" }
      ]
    },
    {
      id: "SSR-1020",
      orderDate: "2026-10-31T12:30:00.000Z",
      customer: {
        name: "Rahul Verma",
        phone: "9823456789",
        email: "rahul.v@example.com",
        address: "Road 10, Banjara Hills, Hyderabad - 500034",
        notes: "Customer requested cancellation before prep"
      },
      orderType: "delivery",
      status: "cancelled",
      payment: {
        method: "cod",
        status: "failed",
        transactionId: null,
        paymentGateway: "Cash on Delivery"
      },
      items: [
        {
          id: "ITEM-016",
          name: "Seven Star Tandoori Murgh",
          variant: "Full Tandoori",
          price: 650,
          quantity: 1,
          itemTotal: 650,
          isVeg: false
        }
      ],
      pricing: {
        subtotal: 650,
        discount: 0,
        couponCode: null,
        deliveryFee: 40,
        packagingCharge: 25,
        gst: 36,
        grandTotal: 751
      },
      statusTimeline: [
        { status: "placed", time: "2026-10-31T12:30:00.000Z", note: "Order placed" },
        { status: "cancelled", time: "2026-10-31T12:35:00.000Z", note: "Cancelled upon customer request" }
      ]
    }
  ],

  staff: [
    {
      id: "STAFF-001",
      name: "Chef Rajeshwar Rao",
      email: "admin@sevenstar.com",
      role: "admin", // 'admin' | 'staff'
      title: "General Manager & Executive Chef",
      phone: "+91 98765 00001",
      status: "active",
      lastLogin: "2026-10-31T21:45:00Z"
    },
    {
      id: "STAFF-002",
      name: "Pooja Sharma",
      email: "staff@sevenstar.com",
      role: "staff",
      title: "Order Dispatch & Guest Host",
      phone: "+91 98765 00002",
      status: "active",
      lastLogin: "2026-10-31T20:10:00Z"
    },
    {
      id: "STAFF-003",
      name: "Arjun Verma",
      email: "kitchen@sevenstar.com",
      role: "staff",
      title: "Head of Tandoor & Curries",
      phone: "+91 98765 00003",
      status: "active",
      lastLogin: "2026-10-30T16:20:00Z"
    }
  ],

  reservations: [
    {
      id: "RES-101",
      guestName: "Dr. Arvind Swaminathan",
      phone: "9845012345",
      email: "arvind.s@example.com",
      guests: 4,
      date: "2026-11-02",
      time: "08:00 PM",
      seating: "Fine Dining Terrace",
      specialRequests: "Anniversary celebration, window table preferred.",
      status: "confirmed"
    }
  ]
};

// Freeze seed data so it cannot be mutated accidentally in memory
if (typeof Object.freeze === "function") {
  Object.freeze(SEED_DATA);
}

