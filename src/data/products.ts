export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  specs: {
    size: string;
    material: string;
    lighting: string;
    dimensions: string;
  };
  features: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium LED Display Frame",
    price: 3999.00,
    description: "Experience the ultimate in diecast display technology with our Premium LED Frame. This state-of-the-art display case features an advanced LED lighting system that brings your model to life with perfectly balanced illumination. The aircraft-grade aluminum construction ensures durability while maintaining an elegant aesthetic that complements any space.",
    shortDescription: "Illuminate your collection with our flagship LED display frame",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
    ],
    specs: {
      size: "1:24",
      material: "Aircraft-grade Aluminum & Tempered Glass",
      lighting: "Dimmable LED with Remote Control",
      dimensions: "35cm x 15cm x 15cm"
    },
    features: [
      "Remote-controlled LED lighting system",
      "Anti-UV tempered glass protection",
      "Dust-proof sealed design",
      "Adjustable brightness levels",
      "Wall-mount or standalone display options",
      "Built-in ambient light sensor"
    ],
    category: "premium"
  },
  {
    id: 2,
    name: "Classic Wall Mount Frame",
    price: 1499.99,
    description: "Our Classic Wall Mount Frame combines timeless design with superior craftsmanship. Made from hand-selected hardwood and featuring museum-grade glass, this frame provides the perfect backdrop for your prized diecast models. The classic design elements ensure it will remain stylish for years to come.",
    shortDescription: "Timeless elegance meets superior protection",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80"
    ],
    specs: {
      size: "1:24 & 1:32",
      material: "Premium Hardwood & Museum Glass",
      lighting: "Optional LED Kit Available",
      dimensions: "40cm x 20cm x 12cm"
    },
    features: [
      "Hand-finished hardwood frame",
      "Museum-grade glass protection",
      "Felt-lined display surface",
      "Multiple wood finish options",
      "Easy wall-mounting system",
      "Expandable design for collections"
    ],
    category: "classic"
  },
  {
    id: 3,
    name: "Modern Metal Display Case",
    price: 2499.99,
    description: "The Modern Metal Display Case represents the perfect fusion of contemporary design and functionality. This minimalist showcase features a brushed metal finish, seamless construction, and innovative magnetic closure system. Perfect for collectors who appreciate modern aesthetics without compromising on protection.",
    shortDescription: "Contemporary protection for modern collectors",
    images: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535360392524-0382a8849bcd?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1536846511313-4b07b637b86f?auto=format&fit=crop&q=80"
    ],
    specs: {
      size: "1:24",
      material: "Brushed Stainless Steel & Crystal Glass",
      lighting: "Integrated LED Strip",
      dimensions: "38cm x 18cm x 18cm"
    },
    features: [
      "Brushed metal finish",
      "Magnetic closure system",
      "Crystal-clear glass panels",
      "Built-in LED lighting",
      "Adjustable display angle",
      "Climate-controlled seal"
    ],
    category: "modern"
  }
];