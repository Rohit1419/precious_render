"use client";

import React, { useState } from "react";
import {
  CreditCard,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Truck,
  ArrowLeft,
  ShoppingBag,
  X,
  Lock,
  Info,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Sample cart items
const cartItems = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    color: "Black",
    size: "M",
    price: 29.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    color: "Dark Blue",
    size: "32",
    price: 59.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1800&auto=format&fit=crop",
  },
];

// Payment methods icons
const paymentMethods = [
  { id: "visa", name: "Visa", icon: "/icons/visa.svg" },
  { id: "mastercard", name: "Mastercard", icon: "/icons/mastercard.svg" },
  { id: "amex", name: "American Express", icon: "/icons/amex.svg" },
  { id: "paypal", name: "PayPal", icon: "/icons/paypal.svg" },
];

// Shipping options
const shippingOptions = [
  { id: "standard", name: "Standard Shipping", price: 5.99, days: "3-5" },
  { id: "express", name: "Express Shipping", price: 12.99, days: "1-2" },
  { id: "free", name: "Free Shipping", price: 0, days: "5-7", minOrder: 100 },
];

const Checkout = () => {
  // State for checkout steps
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState(shippingOptions[0].id);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const selectedShipping = shippingOptions.find(
    (option) => option.id === shippingMethod
  );
  const shippingCost = selectedShipping ? selectedShipping.price : 0;
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + shippingCost + tax;

  // Handle step change
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Checkout header */}
        <div className="mb-10">
          <Link
            href="/estore"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Checkout
          </h1>
        </div>

        {/* Checkout progress */}
        <div className="hidden md:flex items-center justify-between mb-12 max-w-3xl">
          {[
            { num: 1, label: "Shipping" },
            { num: 2, label: "Payment" },
            { num: 3, label: "Review" },
          ].map((step, index) => (
            <React.Fragment key={step.num}>
              {/* Step circle */}
              <div
                className={`flex flex-col items-center ${
                  step.num < currentStep
                    ? "text-purple-600 dark:text-purple-400"
                    : step.num === currentStep
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 dark:text-slate-600"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step.num < currentStep
                      ? "bg-purple-600 text-white"
                      : step.num === currentStep
                      ? "border-2 border-purple-600 dark:border-purple-400"
                      : "border-2 border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {step.num < currentStep ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="text-sm font-bold">{step.num}</span>
                  )}
                </div>
                <span className="text-sm font-medium">{step.label}</span>
              </div>

              {/* Connector line */}
              {index < 2 && (
                <div className="w-24 h-[2px] bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`h-full bg-purple-600 dark:bg-purple-400 transition-all ${
                      step.num < currentStep ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main checkout area */}
          <div className="flex-1">
            {/* Shipping information - Step 1 */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-6"
                >
                  <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                    Shipping Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  {/* Shipping method selection */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">
                      Shipping Method
                    </h3>
                    <div className="space-y-3">
                      {shippingOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                            shippingMethod === option.id
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                              : "border-slate-300 dark:border-slate-600"
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="shipping"
                              value={option.id}
                              checked={shippingMethod === option.id}
                              onChange={() => setShippingMethod(option.id)}
                              className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500"
                            />
                            <div className="ml-3">
                              <div className="text-sm font-medium text-slate-900 dark:text-white">
                                {option.name}
                                {option.minOrder && (
                                  <span className="ml-2 text-xs text-purple-600 dark:text-purple-400">
                                    (Orders over ${option.minOrder})
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {option.days} business days
                              </p>
                            </div>
                          </div>
                          <div className="text-sm font-medium">
                            {option.price === 0
                              ? "Free"
                              : `$${option.price.toFixed(2)}`}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors"
                    >
                      Continue to Payment
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Payment information - Step 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-6"
                >
                  <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                    Payment Method
                  </h2>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                            : "border-slate-300 dark:border-slate-600 hover:border-slate-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                          className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500"
                        />
                        <img
                          src={method.icon}
                          alt={method.name}
                          className="h-6 ml-3"
                        />
                      </label>
                    ))}
                  </div>

                  {/* Credit card form */}
                  {(paymentMethod === "visa" ||
                    paymentMethod === "mastercard" ||
                    paymentMethod === "amex") && (
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                          <CreditCard
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                            size={18}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="expiryDate"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            placeholder="MM / YY"
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cvc"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cvc"
                            placeholder="123"
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="nameOnCard"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div className="flex items-center mt-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                        <Lock size={14} className="mr-1" />
                        Your payment information is encrypted and secure.
                      </div>
                    </div>
                  )}

                  {/* PayPal */}
                  {paymentMethod === "paypal" && (
                    <div className="py-4 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        You'll be redirected to PayPal to complete your payment.
                      </p>
                      <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center mx-auto transition-colors">
                        <img
                          src="/icons/paypal.svg"
                          alt="PayPal"
                          className="h-5 mr-2"
                        />
                        Pay with PayPal
                      </button>
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={handlePreviousStep}
                      className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Back to Shipping
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors"
                    >
                      Review Order
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Review order - Step 3 */}
              {currentStep === 3 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-6"
                >
                  <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                    Review Your Order
                  </h2>

                  {/* Shipping address summary */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                        Shipping Address
                      </h3>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <p className="text-slate-700 dark:text-slate-300">
                        John Doe
                        <br />
                        123 Main Street
                        <br />
                        Anytown, CA 12345
                        <br />
                        United States
                        <br />
                        (123) 456-7890
                      </p>
                    </div>
                  </div>

                  {/* Payment method summary */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                        Payment Method
                      </h3>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center">
                      <img
                        src={
                          paymentMethods.find((m) => m.id === paymentMethod)
                            ?.icon
                        }
                        alt={paymentMethod}
                        className="h-6 mr-3"
                      />
                      <span className="text-slate-700 dark:text-slate-300">
                        {paymentMethod === "visa" && "Visa ending in 1234"}
                        {paymentMethod === "mastercard" &&
                          "Mastercard ending in 5678"}
                        {paymentMethod === "amex" &&
                          "American Express ending in 9012"}
                        {paymentMethod === "paypal" && "PayPal"}
                      </span>
                    </div>
                  </div>

                  {/* Order items */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-slate-900 dark:text-white">
                      Order Items
                    </h3>
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <h4 className="text-slate-900 dark:text-white font-medium">
                              {item.name}
                            </h4>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              {item.color} / {item.size}
                            </div>
                            <div className="flex items-center justify-between mt-1">
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Qty: {item.quantity}
                              </div>
                              <div className="font-medium text-slate-900 dark:text-white">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Place order */}
                  <div className="mt-8">
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-6">
                      <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Info size={16} className="flex-shrink-0 mt-0.5" />
                        <p>
                          By placing your order, you agree to our{" "}
                          <a
                            href="#"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="text-purple-600 dark:text-purple-400 hover:underline"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
                      <button
                        onClick={handlePreviousStep}
                        className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Payment
                      </button>

                      <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors">
                        Place Order - ${total.toFixed(2)}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order summary */}
          <div className="lg:w-96">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">
                  Order Summary
                </h3>
                <button
                  className="lg:hidden flex items-center text-sm text-purple-600 dark:text-purple-400"
                  onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                >
                  {isOrderSummaryOpen ? "Hide" : "Show"}
                  <ChevronDown
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isOrderSummaryOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`lg:block ${
                  isOrderSummaryOpen ? "block" : "hidden"
                }`}
              >
                <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600 dark:text-slate-400">
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                      items)
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600 dark:text-slate-400">
                      Shipping
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {shippingCost === 0
                        ? "Free"
                        : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600 dark:text-slate-400">
                      Tax
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="font-medium text-lg text-slate-900 dark:text-white">
                    Total
                  </span>
                  <span className="font-bold text-lg text-purple-600 dark:text-purple-400">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Discount code */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                      Discount Code
                    </h4>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 rounded-l-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-r-lg flex items-center transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex items-center mt-6 text-sm text-slate-600 dark:text-slate-400">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Item prices and shipping costs are not confirmed until you
                  place your order.
                </div>

                <div className="flex items-center mt-4 text-sm text-slate-600 dark:text-slate-400">
                  <Truck className="w-4 h-4 mr-2" />
                  Delivery times may vary due to carrier delays.
                </div>
              </div>
            </div>

            {/* Secure checkout badge */}
            <div className="flex items-center justify-center mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <Lock className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-xs text-slate-600 dark:text-slate-400">
                Secure checkout with 256-bit SSL encryption
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
