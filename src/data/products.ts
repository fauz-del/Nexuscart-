import headphones_1 from "../assets/headphones/headphones 1.jpg"; import headphones2 from "../assets/headphones/headphones2.jpg"; import headphones3 from "../assets/headphones/headphones3.jpg"; import headphones4 from "../assets/headphones/headphones4.jpg";
import vrgoogles1 from "../assets/vrgoogle/vrgoogles1.jpg"; import vrgoogle2 from "../assets/vrgoogle/vrgoogle2.jpg"; import vrgoogle3 from "../assets/vrgoogle/vrgoogle3.jpg"; import vrgoogles4 from "../assets/vrgoogle/vrgoogles4.jpg";
import smartwatch1 from "../assets/watch/smartwatch1.jpg"; import smartwatch2 from "../assets/watch/smartwatch2.jpg"; import smartwatch3 from "../assets/watch/smartwatch3.jpg"; import smartwatch4 from "../assets/watch/smartwatch4.jpg"; import smartwatch_5 from "../assets/watch/smartwatch 5.jpg";
import phone1 from "../assets/phones/phone1.jpg"; import phone2 from "../assets/phones/phone2.jpg"; import phone3 from "../assets/phones/phone3.jpg"; import iphone_17 from "../assets/phones/iphone-17.jpg"; import iphone6 from "../assets/phones/iphone6.jpg"; import iphone5 from "../assets/phones/iphone5.jpg"; import iphone16 from "../assets/phones/iphone16.jpg"; import hero2 from "../assets/phones/hero2.jpg";
import tablet from "../assets/tablet/tablet.jpg"; import tablet2 from "../assets/tablet/tablet2.jpg"; import tablet3 from "../assets/tablet/tablet3.jpg"; import tablet4 from "../assets/tablet/tablet4.jpg"; import tablet5 from "../assets/tablet/tablet5.jpg"; import tablet6 from "../assets/tablet/tablet6.jpg";
import airpod1 from "../assets/airpod/airpod1.jpg"; import airpod2 from "../assets/airpod/airpod2.jpg"; import airpod3 from "../assets/airpod/airpod3.jpg";
import smartglass1 from "../assets/glasses/smartglass1.jpg"; import smartglass2 from "../assets/glasses/smartglass2.jpg"; import smartglass3 from "../assets/glasses/smartglass3.jpg"; import smartglass4 from "../assets/glasses/smartglass4.jpg"; import smartglass5 from "../assets/glasses/smartglass5.jpg"; import smartglass6 from "../assets/glasses/smartglass6.jpg";
import laptop from "../assets/lp/laptop.jpg"; import laptop2 from "../assets/lp/laptop2.jpg"; import laptop3 from "../assets/lp/laptop3.jpg";

export const ALL_PRODUCTS = [
  // AUDIO
  { id: 'a1', name: "Sonic-H1", price: 199, img: headphones_1, cat: "Audio", status: "Operational", desc: "Studio-grade precision with adaptive noise cancellation." },
  { id: 'a2', name: "Sonic-H2", price: 249, img: headphones2, cat: "Audio", status: "Operational", desc: "Enhanced spatial audio for professional soundscapes." },
  { id: 'a3', name: "Sonic-H3", price: 299, img: headphones3, cat: "Audio", status: "Operational", desc: "Audiophile-grade drivers with carbon-fiber diaphragm." },
  { id: 'a4', name: "Sonic-H4", price: 349, img: headphones4, cat: "Audio", status: "Operational", desc: "Wireless flagship with 80-hour battery life." },
  { id: 'ap1', name: "Air-P1", price: 159, img: airpod1, cat: "Audio", status: "Stock Low", desc: "Minimalist wireless logic for daily deployment." },
  { id: 'ap2', name: "Air-P2", price: 179, img: airpod2, cat: "Audio", status: "Operational", desc: "Next-gen acoustic seal with rapid-sync tech." },
  { id: 'ap3', name: "Air-P3", price: 219, img: airpod3, cat: "Audio", status: "New Batch", desc: "Premium spatial immersion in a pocket form factor." },
  
  // VR
  { id: 'v1', name: "Vision-G1", price: 799, img: vrgoogles1, cat: "VR", status: "Operational", desc: "High-density micro-OLED spatial computing arrays." },
  { id: 'v2', name: "Vision-G2", price: 899, img: vrgoogle2, cat: "VR", status: "Top Rated", desc: "Mixed-reality headset with hand-gesture tracking." },
  { id: 'v3', name: "Vision-G3", price: 1099, img: vrgoogle3, cat: "VR", status: "Operational", desc: "Pro-level field of view with retinal-grade clarity." },
  { id: 'v4', name: "Vision-G4", price: 1299, img: vrgoogles4, cat: "VR", status: "Operational", desc: "Industrial-grade simulation hardware with haptic feedback." },

  // WATCHES
  { id: 'w1', name: "Watch-S1", price: 299, img: smartwatch1, cat: "Wearable", status: "Operational", desc: "Tactical health monitoring in a titanium chassis." },
  { id: 'w2', name: "Watch-S2", price: 349, img: smartwatch2, cat: "Wearable", status: "Operational", desc: "Grade-5 durability with satellite SOS logic." },
  { id: 'w3', name: "Watch-S3", price: 399, img: smartwatch3, cat: "Wearable", status: "Limited", desc: "Precision biometric array for high-output athletes." },
  { id: 'w4', name: "Watch-S4", price: 449, img: smartwatch4, cat: "Wearable", status: "Operational", desc: "Luxury finish with integrated NFC payment protocols." },
  { id: 'w5', name: "Watch-S5", price: 499, img: smartwatch_5, cat: "Wearable", status: "Operational", desc: "The ultimate wearable terminal with 10-day battery." },

  // PHONES
  { id: 'p1', name: "Nexus-P1", price: 899, img: phone1, cat: "Mobile", status: "Operational", desc: "Modern flagship with frictionless display logic." },
  { id: 'p2', name: "Nexus-P2", price: 999, img: phone2, cat: "Mobile", status: "Operational", desc: "Triple-lens optical array for cinematic capture." },
  { id: 'p3', name: "Nexus-P3", price: 1099, img: phone3, cat: "Mobile", status: "Operational", desc: "Hyper-processed silicone with 120Hz LTPO screen." },
  { id: 'i17', name: "iPhone-17", price: 1199, img: iphone_17, cat: "Mobile", status: "Pre-order", desc: "Global flagship v2.6. Pre-orders now active." },
  { id: 'i16', name: "iPhone-16", price: 999, img: iphone16, cat: "Mobile", status: "Operational", desc: "Refined engineering with titanium frame construction." },
  { id: 'i6', name: "iPhone-6", price: 199, img: iphone6, cat: "Mobile", status: "Archive", desc: "Legacy hardware for vintage collectors." },
  { id: 'i5', name: "iPhone-5", price: 149, img: iphone5, cat: "Mobile", status: "Archive", desc: "Classic form factor preserved in high grade." },
  { id: 'h2', name: "Hero-P2", price: 1299, img: hero2, cat: "Mobile", status: "Exclusive", desc: "The pinnacle of fold-logic mobile hardware." },

  // TABLETS
  { id: 't1', name: "Tab-G1", price: 499, img: tablet, cat: "Tablet", status: "Operational", desc: "Lightweight creative terminal for digital artists." },
  { id: 't2', name: "Tab-G2", price: 599, img: tablet2, cat: "Tablet", status: "Operational", desc: "Quad-speaker array with liquid retina display." },
  { id: 't3', name: "Tab-G3", price: 699, img: tablet3, cat: "Tablet", status: "Operational", desc: "Desktop-grade processing in a 6mm chassis." },
  { id: 't4', name: "Tab-G4", price: 799, img: tablet4, cat: "Tablet", status: "Operational", desc: "Massive storage capacity for on-the-go media." },
  { id: 't5', name: "Tab-G5", price: 899, img: tablet5, cat: "Tablet", status: "Operational", desc: "Anti-reflective optics for outdoor field work." },
  { id: 't6', name: "Tab-G6", price: 999, img: tablet6, cat: "Tablet", status: "Operational", desc: "Professional workstation tablet with stylus support." },

  // GLASSES
  { id: 'g1', name: "Glass-1", price: 399, img: smartglass1, cat: "Wearable", status: "Operational", desc: "HUD overlay for navigation and notification data." },
  { id: 'g2', name: "Glass-2", price: 449, img: smartglass2, cat: "Wearable", status: "Operational", desc: "Blue-light filtering with smart-audio integration." },
  { id: 'g3', name: "Glass-3", price: 499, img: smartglass3, cat: "Wearable", status: "Operational", desc: "Photo-chromic lenses with integrated camera logic." },
  { id: 'g4', name: "Glass-4", price: 549, img: smartglass4, cat: "Wearable", status: "Operational", desc: "Sleek carbon frame with real-time translation." },
  { id: 'g5', name: "Glass-5", price: 599, img: smartglass5, cat: "Wearable", status: "Operational", desc: "Full AR immersion with gesture-controlled UI." },
  { id: 'g6', name: "Glass-6", price: 649, img: smartglass6, cat: "Wearable", status: "Operational", desc: "Night-vision enabled tactical optics." },

  // LAPTOPS
  { id: 'l1', name: "L-Series 1", price: 1299, img: laptop, cat: "Laptop", status: "Operational", desc: "Ultrabook efficiency with aluminum unibody." },
  { id: 'l2', name: "L-Series 2", price: 1499, img: laptop2, cat: "Laptop", status: "High Perf", desc: "Gaming flagship with RTX-integrated logic." },
  { id: 'l3', name: "L-Series 3", price: 1799, img: laptop3, cat: "Laptop", status: "Operational", desc: "Content creator beast with 4K OLED panel." },
];
