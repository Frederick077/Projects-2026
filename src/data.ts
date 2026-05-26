/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MountainPackage, WildlifePackage, DayTrip, CombinedPackage, GalleryItem, Testimonial, FAQItem } from './types';

export const mountainPackages: MountainPackage[] = [
  {
    id: 'kili-machame',
    name: 'Machame Route',
    duration: '6–7 Days',
    price: 2100,
    isBestSeller: true,
    routeDetails: 'Known as the "Whiskey Route", Machame is highly scenic and offers amazing scenery. It is a fully fully-catered camping route with an excellent acclimatization profile (trail climbs high and sleeps low).',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1000&auto=format&fit=crop&q=80',
    included: [
      'All Kilimanjaro National Park conservation & entry fees',
      'Professional certified wilderness first responder guides',
      'Dedicated local porters and mountain cooks',
      'Three healthy hot meals prepared daily on the mountain',
      'Premium brand double-walled camping tents & mattresses',
      'Arusha hotel pickup & return transfer'
    ]
  },
  {
    id: 'kili-lemosho',
    name: 'Lemosho Route',
    duration: '7–8 Days',
    price: 2300,
    isBestSeller: false,
    routeDetails: 'The premium route on Mount Kilimanjaro. Starting on the west, Lemosho crosses the lush rainforest, traverses the spectacular Shira Plateau, and joins the Machame route. Incredible success rate due to its 8-day profile.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=80',
    included: [
      'All Kilimanjaro National Park fees & rescue fees',
      'Certified high-altitude guides & professional support staff',
      'Delectable meals (breakfast, hot lunch, afternoon tea, dinner)',
      'High-quality mountain equipment (tents, mess tents, dining table & chairs)',
      'Emergency oxygen cylinders and pulse oximeters',
      'Private modern safari vehicle transfers'
    ]
  },
  {
    id: 'kili-marangu',
    name: 'Marangu Route',
    duration: '5–6 Days',
    price: 1900,
    isBestSeller: false,
    routeDetails: 'Known as the "Coca-Cola Route", Marangu is the classic Kilimanjaro pathway. It is the only route that provides comfortable, shared A-frame dormitory huts with solar energy instead of tents.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop&q=80',
    included: [
      'National Park entry, conservation, and rescue fees',
      'Professional English-speaking qualified mountain guides',
      'Comfortable communal A-frame wooden hut accommodations',
      'Full board meals (expert chefs catering to dietary options)',
      'Porters to carry your personal duffel bags (up to 15kg)',
      'Pre & post-climb briefing and local transfers'
    ]
  },
  {
    id: 'kili-rongai',
    name: 'Rongai Route',
    duration: '6 Days',
    price: 2000,
    isBestSeller: false,
    routeDetails: 'The only trail that starts from the northern side of Mount Kilimanjaro, near the Kenyan border. Offering a wilderness feel, Rongai is less crowded, drier, and ideal during the wet seasons.',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&auto=format&fit=crop&q=80',
    included: [
      'All national park rescue & wilderness fees',
      'Experienced Kilimanjaro climbing guides, cook, and porters',
      'Daily delicious chef-prepared hot breakfasts, lunches, and dinners',
      'High-quality sleeping tents, mess tent, and kitchen setup',
      'Free airport meet & greet and scheduled transport',
      'Continuous oxygen levels, medical pulse checking'
    ]
  },
  {
    id: 'kili-umbwe',
    name: 'Umbwe Route',
    duration: '6 Days',
    price: 1950,
    isBestSeller: false,
    routeDetails: 'The steepest and most challenging route on the mountain. Recommended only for strong, experienced trekkers who are confident in their high-altitude acclimatization abilities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Comprehensive park registration fees',
      'Highly licensed technical rescue guides, cooks, and porters',
      'All nutritional high-energy alpine meals',
      'Sturdy four-season mountain dome tents',
      'Round-trip private shuttle from Arusha or Kilimanjaro airport',
      'Acclimatization safety protocols and pulse checks'
    ]
  }
];

export const wildlifePackages: WildlifePackage[] = [
  {
    id: 'safari-2day',
    name: '2 Days Tarangire & Ngorongoro Crater',
    price: 600,
    isPopular: false,
    parks: ['Tarangire National Park', 'Ngorongoro Crater Conservation Area'],
    features: [
      'Tarangire: Famous for giant baobab trees and mammoth herds of elephants',
      'Ngorongoro: A breathtaking 600m deep intact caldera filled with 30,000 animals'
    ],
    included: [
      'Private customized 4x4 Land Cruiser with pop-up roof for game viewing',
      'Professional, highly experienced local safari driver-guide',
      'All park entrance fees & crater transit service fees',
      'Premium picnic lunch boxes, unlimited mineral water',
      '1 night standard lodge or luxury camping accommodation',
      'Binoculars and African wildlife reference books in the vehicle'
    ],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'safari-3day',
    name: '3 Days Serengeti & Ngorongoro Crater',
    price: 1000,
    isPopular: true,
    parks: ['Serengeti National Park', 'Ngorongoro Crater Conservation Area'],
    features: [
      'Serengeti: Infinite golden plains hosting the legendary Great Wildebeest Migration',
      'Ngorongoro: UNESCO World Heritage site and sanctuary for rare Black Rhinos',
      'Iconic African lions, cheetahs, leopards, and majestic giraffes'
    ],
    included: [
      'Private 4x4 open-roof luxury Land Cruiser',
      'English-speaking certified safari wildlife specialist',
      'Serengeti custom conservation & transit permit fees',
      'Gourmet meals prepared by your personal safari chef',
      'Mid-range tented camp inside the pristine Serengeti savanna',
      'Coffee, tea, and cool refreshments throughout the drives'
    ],
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'safari-5day',
    name: '5 Days Great Migration Safari Experience',
    price: 1700,
    isPopular: false,
    parks: ['Tarangire National Park', 'Serengeti National Park (2 Nights)', 'Ngorongoro Crater Conservation Area', 'Lake Manyara National Park'],
    features: [
      'Deep exploration of Tanzania’s absolute finest northern safari circuit parks',
      'High density of predators: lions, leopards, cheetahs, African wild dogs',
      'Lake Manyara: Famous for tree-climbing lions and columns of bright pink flamingos'
    ],
    included: [
      'Exclusive private safari vehicle, fuel, and seasoned operator',
      'Custom luxury lodges or premium wilderness tented camp accommodation',
      'All park entry tickets, conservation duties, and crater fees',
      'Breakfast, savory lunches, and multi-course dining feasts',
      'Guided authentic walking safari or Lake Manyara canopy treetop walk',
      'Unlimited airport airport collections & Arusha hotel transfers'
    ],
    image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=1000&auto=format&fit=crop&q=80'
  }
];

export const dayTrips: DayTrip[] = [
  {
    id: 'trip-materuni',
    name: 'Materuni Waterfalls & Coffee Tour',
    location: 'Materuni Waterfalls',
    duration: 'Full Day',
    price: 80,
    description: 'Experience one of the most beautiful waterfalls near Mount Kilimanjaro. This tour combines nature, culture, and local coffee traditions in a peaceful village setting.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Guided walk through lush green landscapes',
      'Visit the stunning Materuni Waterfalls',
      'Swim in the natural pool (optional)',
      'Learn how local coffee is grown, roasted, and prepared',
      'Enjoy a fresh cup of organic coffee'
    ],
    bestFor: 'Nature lovers, culture experience, photography'
  },
  {
    id: 'trip-chemka',
    name: 'Chemka Hot Springs (Kikuletwa Hot Springs)',
    location: 'Kikuletwa Hot Springs',
    duration: 'Full Day',
    price: 70,
    description: 'Relax in crystal-clear turquoise water surrounded by fig trees. Chemka Hot Springs is a hidden paradise perfect for swimming and unwinding.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Swim in warm natural spring water',
      'Rope swing for fun and adventure',
      'Picnic lunch under the trees',
      'Peaceful environment away from crowds'
    ],
    bestFor: 'Relaxation, swimming, couples, friends'
  },
  {
    id: 'trip-serval',
    name: 'Serval Wildlife Experience',
    location: 'Serval Wildlife',
    duration: 'Half Day / Full Day',
    price: 100,
    description: 'Get close to wildlife in a unique and controlled environment. Serval Wildlife offers unforgettable interactions with animals like lions, giraffes, and monkeys.',
    image: 'https://images.unsplash.com/photo-1518887570146-0612132dd618?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Close-up experience with lions and other animals',
      'Feeding giraffes',
      'Amazing photo opportunities',
      'Guided tour with wildlife experts'
    ],
    bestFor: 'Animal lovers, photography, families'
  },
  {
    id: 'trip-arusha-np',
    name: 'Arusha National Park Safari',
    location: 'Arusha National Park',
    duration: 'Full Day',
    price: 180,
    description: 'A perfect safari for those with limited time. Discover wildlife, forests, lakes, and the beautiful Mount Meru.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Game drive with professional guide',
      'Spot giraffes, zebras, buffaloes, monkeys',
      'Visit Momella Lakes',
      'Optional walking safari'
    ],
    bestFor: 'First-time safari, wildlife, nature'
  },
  {
    id: 'trip-napuru',
    name: 'Napuru Waterfalls Hike',
    location: 'Napuru Waterfalls',
    duration: 'Half Day / Full Day',
    price: 70,
    description: 'A hidden gem near Arusha offering a scenic hike through local villages and nature trails.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Guided hiking experience',
      'Visit beautiful waterfalls',
      'Cultural interaction with locals',
      'Great views and photography spots'
    ],
    bestFor: 'Hiking, adventure, local experience'
  },
  {
    id: 'trip-city',
    name: 'Arusha City Tour',
    location: 'Arusha',
    duration: 'Half Day',
    price: 40,
    description: 'Explore the vibrant city of Arusha and discover its culture, markets, and history.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Visit local markets',
      'Cultural heritage sites',
      'Local food experience (optional)',
      'Shopping for souvenirs'
    ],
    bestFor: 'Culture, local experience'
  },
  {
    id: 'trip-airport',
    name: 'Airport Transfer (KIA ↔ Arusha)',
    location: 'Kilimanjaro International Airport',
    duration: 'Per Transfer',
    price: 50,
    description: 'Comfortable and reliable airport transfer services between the airport and your hotel in Arusha or Moshi.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1000&auto=format&fit=crop&q=80',
    included: [
      'Professional driver',
      'Clean and comfortable vehicle',
      'On-time pickup and drop-off',
      'Safe and smooth journey'
    ],
    bestFor: 'All arrivals/departures, stress-free transit'
  }
];

export const combinedPackages: CombinedPackage[] = [
  {
    id: 'combo-kili-safari',
    name: 'Kilimanjaro Trek + Wildlife Safari',
    duration: '9–12 Days',
    price: 3100,
    isBestSeller: true,
    description: 'The ultimate bucket-list challenge combination. Conquer Uhuru Peak on Mt. Kilimanjaro via the 7-Day Machame or Lemosho Route, then immediately descend to celebrate your victory on a world-class 3-Day Safari in Serengeti and Ngorongoro Crater to witness lions, giraffes, and elephants.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'combo-safari-chemka',
    name: 'Safari + Chemka Hot Springs',
    duration: '3–4 Days',
    price: 1300,
    isBestSeller: false,
    description: 'Pack incredible diversity into a fantastic long weekend. Start with 2 exhilarating days of wildlife safaris tracking the Big Five elephants and big cats inside Tarangire and Ngorongoro Crater, and wind down on your final day bathing and relaxing in the crystal clear turquoise warm pools of Chemka Oasis.',
    image: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'combo-kili-materuni',
    name: 'Kilimanjaro Machame + Materuni cultural tour',
    duration: '7–9 Days',
    price: 2600,
    isBestSeller: false,
    description: 'Climb Mount Kilimanjaro via the classic Machame Route with our professional trekking team, and conclude your stay with a cultural victory hike to Materuni Falls, roasting coffee with native Chagga elders, and tasting local organic cuisine.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'combo-safari-materuni',
    name: '3-Day Classic Safari + Materuni Waterfalls',
    duration: '4–5 Days',
    price: 1500,
    isBestSeller: false,
    description: 'Unlock stunning African vistas. Spot massive elephant herds and prides of majestic lions in Tarangire, descend into Ngorongoro Crater floor, and complete your journey in Arusha with a lush rainforest walk, swimming in the gigantic pool under Materuni Waterfalls.',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 'combo-safari-napuru',
    name: '2-Day Wild Safari + Napuru Falls Trek',
    duration: '3–4 Days',
    price: 1250,
    isBestSeller: false,
    description: 'Perfect for active explorers. Witness incredible concentration of lions and giant baobabs in Tarangire National Park, venture deep into Ngorongoro Crater floor, and complete your tour with an adventurous jungle canyon hike to Arusha’s majestic Napuru Waterfall.',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=1000&auto=format&fit=crop&q=80'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'wildlife',
    title: 'Majestic Serengeti Lion',
    location: 'Serengeti National Park',
    image: 'https://images.unsplash.com/photo-1614027164847-1b2809eb7b9b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-2',
    category: 'kilimanjaro',
    title: 'Uhuru Peak Sunset Trek',
    location: 'Mount Kilimanjaro (5,895m)',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-3',
    category: 'waterfalls',
    title: 'Materuni Waterfall Oasis',
    location: 'Marangu region, Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-4',
    category: 'hot springs',
    title: 'Turquoise Fig Tree Hot Springs',
    location: 'Chemka (Kikuletwa), Tanzania',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-5',
    category: 'safari moments',
    title: 'Serengeti Sunrise Hot Air Balloon',
    location: 'Serengeti National Park',
    image: 'https://images.unsplash.com/photo-1472214222541-d510753a4707?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-6',
    category: 'happy travelers',
    title: 'Trekking Team Congratulating Mount Shira',
    location: 'Shira Camp, Mount Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-7',
    category: 'wildlife',
    title: 'African Elephant Herd Crossing',
    location: 'Tarangire National Park',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-8',
    category: 'kilimanjaro',
    title: 'Standing Above the Clouds',
    location: 'Uhuru peak, Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'g-9',
    category: 'safari moments',
    title: 'Sunset over Ngorongoro Crater Rim',
    location: 'Ngorongoro Conservation Area',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=80'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'David Jenkins',
    country: 'United Kingdom',
    rating: 5,
    review: 'Our 7-day Lemosho climb was outstanding! The team from Chaka Safaris & Hiking made us feel 100% safe, served fantastic food, and pushed us smoothly to the top. Truly local high-altitude legends! Highly recommend!',
    tourName: '7-Eight Days Lemosho Trek',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't-2',
    name: 'Sarah & Marc Dupont',
    country: 'France',
    rating: 5,
    review: 'The 3-day safari was the highlight of our African trip. We saw lions lounging right beside our vehicle, cheetahs hunt, and elephants grazing under baobab trees. Our guide was incredibly knowledgeable and found all of the Big Five!',
    tourName: '3 Days Serengeti & Ngorongoro',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    country: 'Germany',
    rating: 5,
    review: 'Chemka Hot springs and Materuni Waterfall tours are absolute must-dos. I traveled solo and felt incredibly taken care of, safe, and had the absolute best Chagga coffee-making chants and hot spring swims. Booking on WhatsApp was a breeze!',
    tourName: 'Materuni Falls & Chemka Day Trips',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'When is the best time to climb Mount Kilimanjaro & visit safaris?',
    answer: 'The dry seasons are best: January to March (warm and pristine skies) and June to October (cooler and perfect for wildlife viewing as animals congregate around rivers and waterholes). We operate year-round!',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'What is your summit success rate on Kilimanjaro?',
    answer: 'We maintain over a 95% success rate on our 8-day Lemosho and 7-day Machame routes. We prioritize slow pacing ("Pole Pole") to allow your body to naturally acclimatize, accompanied by professional guides checking blood oxygen levels daily.',
    category: 'kilimanjaro'
  },
  {
    id: 'faq-3',
    question: 'What is included in the Safari rates?',
    answer: 'Our private safari packages are fully inclusive of the 4x4 Land Cruiser vehicle, unlimited game drive fuel, a professional park-licensed guide, all national park conservation entries, crater fees, accommodation (lodge/tented camp), meals, and chilled bottled water.',
    category: 'safari'
  },
  {
    id: 'faq-4',
    question: 'Can we customize a combined package?',
    answer: 'Absolutely! We specialize in custom-tailored Tanzanian memories. You can mix and match any Kilimanjaro route with a wildlife safari, include day trips around Arusha, and adjust dates/traveler numbers according to your exact budget.',
    category: 'booking'
  },
  {
    id: 'faq-5',
    question: 'How do we book and secure payments?',
    answer: 'You can easily click are any "Book Now" CTA on our website to draft a request, or click our floating WhatsApp chat icon to speak immediately with a specialist in Arusha. We accept safe electronic credit card transfers, bank wires, and local cash bookings with invoice receipts.',
    category: 'booking'
  }
];
