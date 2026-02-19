"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    rating: 4.8,
    reviewCount: 124,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000", "#C7B198"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Tops",
    href: "/estore/product/premium-cotton-tshirt",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 59.99,
    rating: 4.5,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1800&auto=format&fit=crop",
    colors: ["#000080", "#36454F"],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
    category: "Bottoms",
    href: "/estore/product/slim-fit-jeans",
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    price: 49.99,
    rating: 4.7,
    reviewCount: 56,
    image:
      "https://plus.unsplash.com/premium_photo-1664476946415-19cdad721c53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHN1bW1lciUyMGZsb3JhbCUyMGRyZXNzfGVufDB8fDB8fHww",
    colors: ["#87CEEB", "#F08080", "#98FB98"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    category: "Dresses",
    href: "/estore/product/summer-floral-dress",
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 79.99,
    rating: 4.9,
    reviewCount: 142,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1800&auto=format&fit=crop",
    colors: ["#6B4226", "#000000", "#8B0000"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Accessories",
    href: "/estore/product/leather-crossbody-bag",
  },
  {
    id: 5,
    name: "Premium Sneakers",
    price: 89.99,
    rating: 4.6,
    reviewCount: 78,
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes",
    href: "/estore/product/premium-sneakers",
  },
  {
    id: 6,
    name: "Wool Blend Coat",
    price: 129.99,
    rating: 4.8,
    reviewCount: 34,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1800&auto=format&fit=crop",
    colors: ["#36454F", "#8B4513"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Outerwear",
    href: "/estore/product/wool-blend-coat",
  },
  {
    id: 7,
    name: "Printed Silk Scarf",
    price: 39.99,
    rating: 4.7,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393?q=80&w=1800&auto=format&fit=crop",
    colors: ["#FF69B4", "#00BFFF", "#FFD700"],
    sizes: ["38", "39", "40"],
    inStock: true,
    category: "Accessories",
    href: "/estore/product/printed-silk-scarf",
  },
  {
    id: 8,
    name: "Striped Button-Up Shirt",
    price: 45.99,
    rating: 4.5,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1800&auto=format&fit=crop",
    colors: ["#ADD8E6", "#F5F5DC", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Tops",
    href: "/estore/product/striped-button-up",
  },
];

export default function EstoreFeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({});
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Items per page
  const itemsPerPage = 4;

  // Calculate number of pages
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  // Get current products
  const currentProducts = featuredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Navigate functions
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Handle size selection
  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Our most popular items chosen by our customers. Quality products
              with exceptional design.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <button
              onClick={prevPage}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {currentPage + 1} / {totalPages}
            </div>

            <button
              onClick={nextPage}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product image */}
              <Link
                href={product.href}
                className="block relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Wishlist button */}
                <button
                  aria-label="Add to wishlist"
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Heart size={18} />
                </button>

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 dark:text-slate-200">
                  {product.category}
                </div>
              </Link>

              {/* Product info */}
              <div className="p-4">
                <Link href={product.href}>
                  <h3 className="font-medium text-lg mb-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    ${product.price.toFixed(2)}
                  </div>

                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {product.rating}
                    </span>
                    <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Sizes */}
                {product.sizes.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                      Size:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className={`px-2 py-1 text-xs rounded border ${
                            selectedSize[product.id] === size
                              ? "border-purple-600 text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                              : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                          } hover:border-purple-600 transition-colors`}
                          onClick={() => handleSizeSelect(product.id, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Colors:
                  </p>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600"
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Add to cart button */}
                <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile pagination indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                currentPage === index
                  ? "bg-purple-600 w-6"
                  : "bg-slate-300 dark:bg-slate-700"
              } transition-all`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
