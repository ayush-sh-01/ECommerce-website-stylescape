import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (products.length - itemsPerView + 1)) % (products.length - itemsPerView + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {products.map((product) => (
            <div key={product.id} className={`flex-shrink-0`} style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProductCarousel;
