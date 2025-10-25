import jacketImg from "@/assets/product-jacket.jpg";
import sneakersImg from "@/assets/product-sneakers.jpg";
import jeansImg from "@/assets/product-jeans.jpg";
import watchImg from "@/assets/product-watch.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  rating: number;
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    description: "Classic black leather jacket with premium finish. Perfect for any occasion.",
    price: 299,
    category: "Jackets",
    image: jacketImg,
    images: [jacketImg, jacketImg, jacketImg],
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    description: "Comfortable white sneakers for everyday wear. Minimalist and stylish.",
    price: 89,
    category: "Footwear",
    image: sneakersImg,
    images: [sneakersImg, sneakersImg, sneakersImg],
    rating: 4.6,
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    description: "Premium navy blue slim fit jeans with perfect stretch and comfort.",
    price: 79,
    category: "Bottoms",
    image: jeansImg,
    images: [jeansImg, jeansImg, jeansImg],
    rating: 4.5,
    sizes: ["30", "32", "34", "36"],
    inStock: true,
  },
  {
    id: 4,
    name: "Luxury Silver Watch",
    description: "Elegant chronograph watch with stainless steel finish.",
    price: 399,
    category: "Accessories",
    image: watchImg,
    images: [watchImg, watchImg, watchImg],
    rating: 4.9,
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Hoodie",
    description: "Cozy grey hoodie made from premium cotton blend for ultimate comfort.",
    price: 69,
    category: "Tops",
    image: hoodieImg,
    images: [hoodieImg, hoodieImg, hoodieImg],
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
  {
    id: 6,
    name: "Essential White Tee",
    description: "Classic white t-shirt. Wardrobe essential made from premium cotton.",
    price: 29,
    category: "Tops",
    image: tshirtImg,
    images: [tshirtImg, tshirtImg, tshirtImg],
    rating: 4.4,
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
];

export const categories = ["All", "Tops", "Bottoms", "Jackets", "Footwear", "Accessories"];
