"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

// Popular dishes data
const popularDishes = [
  {
    id: 1,
    name: "Supreme Pizza",
    description: "Loaded with pepperoni, sausage, bell peppers, and olives",
    price: 15.99,
    category: "Pizza",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, lettuce, and special sauce",
    price: 9.99,
    category: "Burger",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2899&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Rainbow Sushi",
    description: "Assorted fresh fish on seasoned rice with avocado",
    price: 18.99,
    category: "Sushi",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "Fresh romaine with parmesan, croutons and Caesar dressing",
    price: 8.99,
    category: "Salad",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie with vanilla ice cream",
    price: 6.99,
    category: "Dessert",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2876&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Iced Coffee",
    description: "Cold brewed coffee with milk and caramel syrup",
    price: 4.49,
    category: "Drinks",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=2349&auto=format&fit=crop",
  },
];

export default function FoodFastPopularMenu() {
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    setTimeout(() => {
      setAddedToCart(null);
    }, 1500);
  };

  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-orange-50/50 dark:bg-slate-900/50 relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-300/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-300/10 dark:bg-red-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            Popular Dishes
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Our most ordered items, freshly prepared and ready for delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-slate-800 px-2 py-1 rounded-md flex items-center gap-1 text-sm font-medium">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>{dish.rating}</span>
                </div>
                <div className="absolute top-2 left-2 bg-orange-500 px-2 py-1 rounded-md text-white text-xs font-medium">
                  {dish.category}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-orange-500">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {dish.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Free delivery
                  </span>
                  <button
                    onClick={() => handleAddToCart(dish.id)}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors relative group"
                  >
                    {addedToCart === dish.id ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1"
                      >
                        Added!
                      </motion.span>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white dark:bg-slate-800 hover:bg-orange-50 dark:hover:bg-slate-700 border border-orange-500 text-orange-500 font-medium rounded-lg transition-colors inline-flex items-center gap-2">
            View Full Menu
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
