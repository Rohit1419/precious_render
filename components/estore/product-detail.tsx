"use client";

import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Check,
  ChevronRight,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Mock product data
const product = {
  id: 1,
  name: "Premium Cotton T-Shirt",
  description:
    "Crafted from high-quality 100% organic cotton, this t-shirt combines comfort with durability and style. Featuring a modern fit and exceptional softness, it's perfect for everyday wear.",
  price: 29.99,
  rating: 4.8,
  reviewCount: 124,
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1800&auto=format&fit=crop",
  ],
  colors: [
    { name: "White", value: "#FFFFFF", border: true },
    { name: "Black", value: "#000000" },
    { name: "Beige", value: "#C7B198" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  features: [
    "100% Organic Cotton",
    "Modern Fit",
    "Pre-shrunk Fabric",
    "Reinforced Stitching",
    "Machine Washable",
  ],
  inStock: true,
  category: "Tops",
  sku: "TS-PREM-001",
  reviews: [
    {
      id: 1,
      author: "Alex Johnson",
      date: "October 12, 2023",
      rating: 5,
      content:
        "Absolutely love this t-shirt! The material is soft yet durable, and the fit is perfect. I've washed it multiple times and it still looks brand new.",
    },
    {
      id: 2,
      author: "Sarah Williams",
      date: "September 28, 2023",
      rating: 4,
      content:
        "Great quality t-shirt with excellent fabric. Runs slightly large, so I'd recommend sizing down if you're between sizes.",
    },
    {
      id: 3,
      author: "Michael Chen",
      date: "August 15, 2023",
      rating: 5,
      content:
        "This has become my go-to shirt. The material breathes well and it looks great with jeans or dressed up with a blazer.",
    },
  ],
  relatedProducts: [
    {
      id: 2,
      name: "Classic V-Neck Tee",
      price: 24.99,
      rating: 4.5,
      reviewCount: 86,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1800&auto=format&fit=crop",
      href: "/estore/product/classic-v-neck-tee",
    },
    {
      id: 3,
      name: "Long Sleeve Cotton Shirt",
      price: 34.99,
      rating: 4.7,
      reviewCount: 72,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1800&auto=format&fit=crop",
      href: "/estore/product/long-sleeve-cotton-shirt",
    },
    {
      id: 4,
      name: "Graphic Print T-Shirt",
      price: 27.99,
      rating: 4.4,
      reviewCount: 62,
      image:
        "https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=1800&auto=format&fit=crop",
      href: "/estore/product/graphic-print-t-shirt",
    },
  ],
};

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Handlers
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-slate-600 dark:text-slate-400 flex items-center flex-wrap">
          <Link
            href="/estore"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link
            href="/estore/men"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Men
          </Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link
            href="/estore/men/tops"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Tops
          </Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-slate-800 dark:text-slate-200 font-medium">
            {product.name}
          </span>
        </div>

        {/* Back button for mobile */}
        <Link
          href="/estore"
          className="inline-flex items-center mb-6 text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 md:hidden transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[4/3] md:aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative min-w-16 h-16 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-purple-600 dark:ring-purple-500"
                      : "ring-1 ring-slate-200 dark:ring-slate-700"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mt-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={`${
                      star <= Math.round(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {product.rating}
                </span>
                <span className="mx-2 text-slate-400">•</span>
                <a
                  href="#reviews"
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  onClick={() => setActiveTab("reviews")}
                >
                  {product.reviewCount} reviews
                </a>
              </div>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              ${product.price.toFixed(2)}
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">
                Color
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedColor === color.value
                        ? "ring-2 ring-purple-600 ring-offset-2 dark:ring-offset-slate-900"
                        : ""
                    } ${
                      color.border
                        ? "border border-slate-300 dark:border-slate-600"
                        : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Color: ${color.name}`}
                  >
                    {selectedColor === color.value && (
                      <Check
                        className={`w-5 h-5 ${
                          color.value === "#FFFFFF" || color.value === "#C7B198"
                            ? "text-slate-900"
                            : "text-white"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200">
                  Size
                </h3>
                <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      selectedSize === size
                        ? "bg-purple-600 text-white"
                        : "border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:border-slate-500"
                    } transition-all`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">
                Quantity
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 border border-slate-300 dark:border-slate-600 rounded-l-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 h-10 border-y border-slate-300 dark:border-slate-600 text-center text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 border border-slate-300 dark:border-slate-600 rounded-r-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart and wishlist */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 py-3 px-5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="py-3 px-5 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>
            </div>

            {/* Product metadata */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-4 text-sm">
              <div className="flex">
                <span className="font-medium text-slate-900 dark:text-slate-200 w-24">
                  SKU:
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  {product.sku}
                </span>
              </div>
              <div className="flex">
                <span className="font-medium text-slate-900 dark:text-slate-200 w-24">
                  Category:
                </span>
                <Link
                  href={`/estore/category/${product.category.toLowerCase()}`}
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  {product.category}
                </Link>
              </div>
              <div className="flex">
                <span className="font-medium text-slate-900 dark:text-slate-200 w-24">
                  Share:
                </span>
                <div className="flex items-center gap-3">
                  <button className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-slate-200 dark:border-slate-800">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                  activeTab === "description"
                    ? "border-b-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                  activeTab === "features"
                    ? "border-b-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                  activeTab === "reviews"
                    ? "border-b-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
          </div>

          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400">
                  {product.description}
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  This versatile t-shirt is designed to provide maximum comfort
                  for all-day wear. The breathable fabric keeps you cool in warm
                  weather while providing just the right amount of warmth when
                  temperatures drop. The modern cut offers a flattering
                  silhouette without being too tight.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Our commitment to quality means this shirt will maintain its
                  shape and color even after multiple washes. The sustainable
                  manufacturing process reflects our dedication to
                  environmentally responsible fashion.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3 text-slate-900 dark:text-white">
                    Care Instructions
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Machine wash cold with similar colors</li>
                    <li>• Do not bleach</li>
                    <li>• Tumble dry low</li>
                    <li>• Warm iron if needed</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div id="reviews">
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  {/* Rating summary */}
                  <div className="w-full md:w-72 flex-shrink-0">
                    <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="text-5xl font-bold mb-2 text-slate-900 dark:text-white">
                        {product.rating}
                      </div>
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={20}
                            className={`${
                              star <= Math.round(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-slate-300 dark:text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Based on {product.reviewCount} reviews
                      </p>
                      <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                        Write a Review
                      </button>
                    </div>
                  </div>

                  {/* Reviews list */}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-6 text-slate-900 dark:text-white">
                      Customer Reviews
                    </h3>
                    <div className="space-y-8">
                      {product.reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-slate-200 dark:border-slate-800 pb-6 last:border-0"
                        >
                          <div className="flex justify-between mb-2">
                            <h4 className="font-medium text-slate-900 dark:text-white">
                              {review.author}
                            </h4>
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={16}
                                className={`${
                                  star <= review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-slate-300 dark:text-slate-600"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-slate-600 dark:text-slate-400">
                            {review.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link
                  href={relatedProduct.href}
                  className="block relative aspect-square overflow-hidden"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <Link href={relatedProduct.href}>
                    <h3 className="font-medium mb-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-purple-600 dark:text-purple-400">
                      ${relatedProduct.price.toFixed(2)}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                        {relatedProduct.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
