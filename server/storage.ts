import { type Destination, type Activity, type Event, type GalleryImage, type ContactMessage, type InsertDestination, type InsertActivity, type InsertEvent, type InsertGalleryImage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Destinations
  getDestinations(): Promise<Destination[]>;
  getDestination(id: string): Promise<Destination | undefined>;
  createDestination(destination: InsertDestination): Promise<Destination>;

  // Activities
  getActivities(): Promise<Activity[]>;
  getActivity(id: string): Promise<Activity | undefined>;
  createActivity(activity: InsertActivity): Promise<Activity>;

  // Events
  getEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;

  // Gallery Images
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: string): Promise<GalleryImage | undefined>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;

  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private destinations: Map<string, Destination>;
  private activities: Map<string, Activity>;
  private events: Map<string, Event>;
  private galleryImages: Map<string, GalleryImage>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.destinations = new Map();
    this.activities = new Map();
    this.events = new Map();
    this.galleryImages = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Sample destinations
    const sampleDestinations: InsertDestination[] = [
      {
        name: "Marrakech",
        description: "Imperial City with bustling souks and traditional architecture",
        imageUrl: "https://pixabay.com/get/g0b9a944ab3042d7ce66a60f948056b9416ef18f4f2e12395badc0eed9524f23cd538d6506a45c26ab29e14cd44ca84c63489eff7ca95eab5782a3f5b2688a98e_1280.jpg",
        category: "Cultural Tour",
        location: "Imperial City"
      },
      {
        name: "Chefchaouen",
        description: "Blue Pearl with painted streets and traditional doors",
        imageUrl: "https://pixabay.com/get/g685321e17a9a1c1218c57c813dc8ed785fdb1bc3f661d6bb8427762b148bee39f1697d9ce1f6976c1810343f8b6be9e773383c14b6822e798bc9c508261bd55c_1280.jpg",
        category: "Photography",
        location: "Blue Pearl"
      },
      {
        name: "Sahara Desert",
        description: "Merzouga Dunes with camel caravan experiences",
        imageUrl: "https://pixabay.com/get/g5f1684e2be91ecfa7e6c732d6ba3faed0280c2619fb8f7dea481e1f9b43b9ce32f25ae7e3888d94cc0881a764cd0f293050737b7bc387a0abe8b3563a62ba365_1280.jpg",
        category: "Adventure",
        location: "Merzouga Dunes"
      },
      {
        name: "Casablanca",
        description: "Modern Morocco with Hassan II Mosque",
        imageUrl: "https://pixabay.com/get/gd6b3935356874db9d514c151e55e568571bf7f8962730d0b27cdbff1f62b202a4112b99e9d8f7170831ecbbc8eb42279527d611f403cd16c53363e673515d244_1280.jpg",
        category: "Architecture",
        location: "Modern Morocco"
      },
      {
        name: "Volubilis",
        description: "Ancient Roman ruins with detailed mosaics",
        imageUrl: "https://pixabay.com/get/gabd09113e8040c2c826833a8fb62461e317f8231233034caf6981468a8ab91059b919353376060d2d31e255dbc54274698172440742646f057cbdf2745806eba_1280.jpg",
        category: "History",
        location: "Ancient History"
      },
      {
        name: "Fes",
        description: "Medieval ramparts and gates of ancient medina",
        imageUrl: "https://pixabay.com/get/gdbe22fb3061c60e3cf8e0168f40154bc6b4883972d7b80bbfcdb516ef685853b5322903a6d3903fcea2ddb9a014ab5c53f0ac979341447d78e776a37c743e582_1280.jpg",
        category: "Cultural",
        location: "Imperial Capital"
      },
      {
        name: "Essaouira",
        description: "Atlantic coastal fortress with fishing boats",
        imageUrl: "https://images.unsplash.com/photo-1571104508999-893933ded431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Coastal",
        location: "Atlantic Port"
      }
    ];

    for (const dest of sampleDestinations) {
      await this.createDestination(dest);
    }

    // Sample activities
    const sampleActivities: InsertActivity[] = [
      {
        title: "Atlas Mountains Trek",
        description: "Experience the beauty of the High Atlas Mountains with guided hiking tours through Berber villages and stunning landscapes.",
        duration: "3-5 Days",
        icon: "fas fa-mountain",
        category: "Adventure"
      },
      {
        title: "Traditional Arts Workshop",
        description: "Learn traditional Moroccan crafts including pottery, carpet weaving, and henna art from local artisans.",
        duration: "Half Day",
        icon: "fas fa-palette",
        category: "Cultural"
      },
      {
        title: "Culinary Experience",
        description: "Master the art of Moroccan cuisine with hands-on cooking classes featuring tagines, couscous, and mint tea.",
        duration: "Full Day",
        icon: "fas fa-utensils",
        category: "Culinary"
      },
      {
        title: "Desert Camping",
        description: "Sleep under the stars in traditional Berber tents and experience authentic desert life with camel rides.",
        duration: "2 Days",
        icon: "fas fa-moon",
        category: "Adventure"
      },
      {
        title: "Language Exchange",
        description: "Practice Arabic, French, and Berber languages with native speakers while sharing your own language skills.",
        duration: "Weekly",
        icon: "fas fa-book",
        category: "Educational"
      },
      {
        title: "Music & Dance",
        description: "Learn traditional Moroccan music and dance forms including Chaabi, Gnawa, and Berber folk dances.",
        duration: "Evening",
        icon: "fas fa-music",
        category: "Cultural"
      }
    ];

    for (const activity of sampleActivities) {
      await this.createActivity(activity);
    }

    // Sample events
    const sampleEvents: InsertEvent[] = [
      {
        title: "Atlas Mountains Winter Trek",
        description: "Experience the snow-capped Atlas Mountains in winter. A 3-day guided trek through traditional Berber villages.",
        date: new Date("2025-12-15"),
        duration: "3 Days",
        spotsLeft: 12,
        category: "Adventure"
      },
      {
        title: "Traditional Arts Workshop",
        description: "Learn traditional Moroccan pottery and ceramic painting techniques with master craftspeople.",
        date: new Date("2025-12-22"),
        duration: "Half Day",
        spotsLeft: 8,
        category: "Cultural"
      },
      {
        title: "New Year Desert Expedition",
        description: "Start the new year with an unforgettable desert camping experience under the Sahara stars.",
        date: new Date("2026-01-05"),
        duration: "2 Days",
        spotsLeft: 6,
        category: "Adventure"
      },
      {
        title: "Culinary Masters Class",
        description: "Advanced cooking workshop focusing on authentic Moroccan pastries and traditional bread making.",
        date: new Date("2026-01-12"),
        duration: "Full Day",
        spotsLeft: 15,
        category: "Culinary"
      }
    ];

    for (const event of sampleEvents) {
      await this.createEvent(event);
    }

    // Sample gallery images
    const sampleGalleryImages: InsertGalleryImage[] = [
      {
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Students pottery workshop",
        category: "Workshops"
      },
      {
        imageUrl: "https://pixabay.com/get/g1d0e4efbbc2236eba709d2a386bab1338a66950376716a43f3d0212e4ef724a92d37b272e6c4821f48660e299542aa344ee61243c86d117225b86684e198aea0_1280.jpg",
        alt: "Students in medina alleyway",
        category: "Cultural Tours"
      },
      {
        imageUrl: "https://pixabay.com/get/g3472e261dd8acd0a5dff644c0dae0b521876b7ddb9b9133a598fa3f742b2582953aac502ec20fb344ec0083bb56e916ffcc77790d0afdd1dc5afe87cc2ad6e34_1280.jpg",
        alt: "Moroccan architectural details",
        category: "Architecture"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Mint tea ceremony with students",
        category: "Cultural Experiences"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Atlas Mountains hiking view",
        category: "Adventure"
      },
      {
        imageUrl: "https://pixabay.com/get/gbccd92012a4e47d67c9e54f28a88a44aad4e629d16f6680559117fc420457e55caaf34e835e63fbe563946e05800609ab4a55e8a3291292041ade0e53b9ff039_1280.jpg",
        alt: "Traditional carpet weaving lesson",
        category: "Workshops"
      },
      {
        imageUrl: "https://pixabay.com/get/gf569518c049c8949f24bde70dec71a80d49d3727517eb01c34dc853e9517385a4837a41c76c1700ee018f12bff79d180e69c19d8ff4ca386c52d83ae792b5d3a_1280.jpg",
        alt: "Desert oasis landscape",
        category: "Landscapes"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        alt: "Tagine cooking class with students",
        category: "Culinary"
      }
    ];

    for (const image of sampleGalleryImages) {
      await this.createGalleryImage(image);
    }
  }

  async getDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getDestination(id: string): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }

  async createDestination(insertDestination: InsertDestination): Promise<Destination> {
    const id = randomUUID();
    const destination: Destination = { ...insertDestination, id };
    this.destinations.set(id, destination);
    return destination;
  }

  async getActivities(): Promise<Activity[]> {
    return Array.from(this.activities.values());
  }

  async getActivity(id: string): Promise<Activity | undefined> {
    return this.activities.get(id);
  }

  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const id = randomUUID();
    const activity: Activity = { ...insertActivity, id };
    this.activities.set(id, activity);
    return activity;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }

  async getGalleryImage(id: string): Promise<GalleryImage | undefined> {
    return this.galleryImages.get(id);
  }

  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = randomUUID();
    const image: GalleryImage = { ...insertImage, id };
    this.galleryImages.set(id, image);
    return image;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date(), 
      isRead: false 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
