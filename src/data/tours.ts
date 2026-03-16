export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  price?: string;
  imageUrl: string;
  category: "Cultural" | "Spiritual" | "Adventure" | "Heritage";
}

export const tours: Tour[] = [
  {
    id: "tour-1",
    slug: "golden-triangle-package",
    title: "Golden Triangle Tour",
    description: "Experience the vibrant culture and history of Delhi, Agra, and Jaipur in this classic 6-day heritage journey.",
    duration: "5 Nights / 6 Days",
    imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop", // Taj Mahal
    category: "Heritage"
  },
  {
    id: "tour-2",
    slug: "char-dham-yatra",
    title: "Char Dham Yatra",
    description: "A sacred pilgrimage to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath in the Himalayas.",
    duration: "11 Nights / 12 Days",
    imageUrl: "https://images.unsplash.com/photo-1626201389279-5dc7a9dfa1d1?q=80&w=800&auto=format&fit=crop", // Himalayas/Temple
    category: "Spiritual"
  },
  {
    id: "tour-3",
    slug: "rajasthan-package",
    title: "Royal Rajasthan Tour",
    description: "Discover the land of Maharajas, featuring magnificent forts, palaces, and the golden sand dunes of the Thar desert.",
    duration: "9 Nights / 10 Days",
    imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop", // Rajasthan Fort
    category: "Cultural"
  },
  {
    id: "tour-4",
    slug: "himachal-package",
    title: "Magical Himachal package",
    description: "Escape to the serene valleys, snow-capped peaks, and colonial charm of Shimla, Manali, and Dharamshala.",
    duration: "6 Nights / 7 Days",
    imageUrl: "https://images.unsplash.com/photo-1627896157734-4bcbfbb1d977?q=80&w=800&auto=format&fit=crop", // Mountains
    category: "Adventure"
  },
  {
    id: "tour-5",
    slug: "buddhist-circuit",
    title: "Footsteps of Buddha",
    description: "Walk the path of enlightenment visiting Lumbini, Bodhgaya, Sarnath, and Kushinagar - the major Buddhist pilgrimage sites.",
    duration: "8 Nights / 9 Days",
    imageUrl: "https://images.unsplash.com/photo-1570183577382-7ea91924618e?q=80&w=800&auto=format&fit=crop", // Buddha Monastary
    category: "Spiritual"
  },
  {
    id: "tour-6",
    slug: "up-bihar-package",
    title: "UP & Bihar Heritage Circuit",
    description: "Explore the ancient spiritual centers along the Ganges, from Varanasi's ghats to the historic ruins of Nalanda.",
    duration: "7 Nights / 8 Days",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", // Varanasi
    category: "Heritage"
  }
];
