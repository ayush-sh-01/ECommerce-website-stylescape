import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden aspect-square bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                <span className="text-lg font-semibold">Out of Stock</span>
              </div>
            )}
          </div>
        </Link>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm text-muted-foreground">{product.rating}</span>
          </div>

          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-accent">${product.price}</span>
            <Button
              size="icon"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
