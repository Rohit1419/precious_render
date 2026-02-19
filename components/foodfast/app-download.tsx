"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { QrCode } from "lucide-react";

export default function FoodFastAppDownload() {
  return (
    <section id="download" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-orange-500/10 dark:bg-orange-500/5 p-2 rounded-lg inline-block mb-4">
              <span className="text-orange-600 dark:text-orange-400 font-medium text-sm px-2">
                Mobile Experience
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
              Order Faster on Our Mobile App
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5V2.5C7 2.22386 7.22386 2 7.5 2ZM11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-1">
                    Easy Ordering Process
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Browse menu, customize items, and complete your order in
                    just a few taps
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H7.50003C7.22389 8 7.00003 7.77614 7.00003 7.5V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-1">
                    Real-Time Order Tracking
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Follow your delivery in real-time and get accurate ETAs for
                    your food
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.67494 0.0223298C5.45834 0.0809349 5.3066 0.244297 5.26719 0.441803L4.46387 3.65975C3.89402 3.84172 3.35479 4.09766 2.8586 4.42298L0.30085 2.32624C0.150032 2.19999 0.022782 2.16209 0 2.16209C0 2.16209 0 2.16209 0 2.16209C0 2.16209 -3.84256e-05 2.16209 0.0227398 2.33646L1.24419 7.05235C1.28359 7.22673 1.45806 7.34929 1.63252 7.30768L3.52153 6.92194C3.64055 7.23907 3.79225 7.5355 3.97304 7.81348C4.15476 8.09322 4.36662 8.35291 4.6035 8.58998C4.35925 8.78701 4.13039 9.01547 3.92316 9.27225C3.45402 9.86237 3.1253 10.5783 3.1253 11.3956C3.1253 12.8574 3.92316 14.1044 5.1301 14.7547C5.3066 14.8473 5.52131 14.75 5.59915 14.5567L6.77555 11.7334H8.22348L9.39988 14.5567C9.47772 14.75 9.69242 14.8473 9.86893 14.7547C11.0759 14.1044 11.8737 12.8574 11.8737 11.3956C11.8737 10.5783 11.545 9.86236 11.0759 9.27224C10.8686 9.01546 10.6398 8.78701 10.3955 8.58998C10.6324 8.35291 10.8442 8.09322 11.026 7.81348C11.2068 7.5355 11.3585 7.23907 11.4775 6.92194L13.3665 7.30768C13.541 7.34929 13.7144 7.22673 13.7548 7.05235L14.9763 2.33646C14.999 2.16209 14.999 2.16209 14.999 2.16209C14.9762 2.16209 14.849 2.19999 14.6981 2.32624L12.1404 4.42298C11.6442 4.09766 11.105 3.84172 10.5351 3.65975L9.73182 0.441803C9.69242 0.244297 9.54068 0.0809349 9.32409 0.0223298C9.10749 -0.0362753 8.88898 0.0341101 8.75403 0.180481L6.49947 2.53366L4.245 0.180481C4.11004 0.0341101 3.89153 -0.0362753 3.67494 0.0223298H5.67494Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-1">
                    Exclusive App-Only Rewards
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Earn points with every order and unlock special discounts
                    and free items
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-black dark:bg-white dark:bg-opacity-10 h-14 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.42 7.31c1.33.07 2.25.78 3.13.84 1.19-.24 2.31-.96 3.57-.84 1.51.15 2.65.83 3.38 2.11-3.03 1.86-2.51 5.5.55 6.79-.56 1.78-1.28 3.55-2 5.07zM12.03 6.9c-.09-2.81 2.3-5.14 5.02-5.3.26 2.71-2.25 5.5-5.02 5.3z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white dark:text-slate-300">
                      Download on the
                    </span>
                    <span className="text-white dark:text-slate-300 font-medium leading-none">
                      App Store
                    </span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="bg-black dark:bg-white dark:bg-opacity-10 h-14 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="-6.5 -0.016 100.001 100.001"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#08B059"
                      d="M49.997 47.153l12.778-12.779C39.436 20.552 4.949.274 3-.016L2.844 0l47.153 47.153z"
                    />
                    <path
                      fill="#1BB899"
                      d="M.016 2.829L0 2.984v94l.015.149 47.153-47.152L.016 2.829z"
                    />
                    <path
                      fill="#F04F3E"
                      d="M50.003 52.816L2.852 99.968l.148.017c1.958-.312 36.439-20.58 59.775-34.396L50.003 52.816z"
                    />
                    <path
                      fill="#F99C1C"
                      d="M84 46.984s-7.372-4.398-17.665-10.5L52.832 49.988l13.497 13.497C76.625 57.382 84 52.984 84 52.984c1.607-.844 3-1.343 3-3 0-1.656-1.584-2.225-3-3z"
                    />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-white dark:text-slate-300">
                      GET IT ON
                    </span>
                    <span className="text-white dark:text-slate-300 font-medium leading-none">
                      Google Play
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-3 ml-0 md:ml-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg">
                  <QrCode className="h-10 w-10 text-slate-900 dark:text-white" />
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Scan to
                  <br />
                  download
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-red-500/20 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative z-10">
                <div className="w-[300px] h-[600px] rounded-3xl shadow-2xl border-8 border-white dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                  {/* App interface mockup */}
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-2 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        9:41
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.5 18.5C19 16.5 19 7.5 15.5 5.5M12 15.5C14.0833 14.1667 14.0833 9.83333 12 8.5M8.5 12.5C9.16667 12.1667 9.16667 11.8333 8.5 11.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 10V14C20 18 18 20 14 20H10C6 20 4 18 4 14V10C4 6 6 4 10 4H14C18 4 20 6 20 10Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 16V8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="bg-orange-500 text-white p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold">FoodFast</h3>
                          <p className="text-sm text-orange-100">
                            Delicious food, delivered fast
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold">F</span>
                        </div>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 overflow-hidden">
                      {/* Search bar */}
                      <div className="p-3 bg-slate-50 dark:bg-slate-800">
                        <div className="bg-white dark:bg-slate-700 rounded-full p-2 px-4 flex items-center gap-2 shadow-sm">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-400"
                          >
                            <path
                              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 22L20 20"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-slate-400">
                            Find restaurants or dishes
                          </span>
                        </div>
                      </div>

                      {/* Food categories */}
                      <div className="p-3 pb-0">
                        <h4 className="font-medium text-sm mb-2 text-slate-900 dark:text-white">
                          Categories
                        </h4>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {["Pizza", "Burger", "Sushi", "Salad", "Dessert"].map(
                            (cat, i) => (
                              <div
                                key={i}
                                className={`px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                                  i === 0
                                    ? "bg-orange-500 text-white"
                                    : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                                }`}
                              >
                                {cat}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Popular dishes */}
                      <div className="p-3">
                        <h4 className="font-medium text-sm mb-2 text-slate-900 dark:text-white">
                          Popular Now
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {/* Food item */}
                          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
                            <div className="h-20 bg-orange-100 dark:bg-orange-900/30"></div>
                            <div className="p-2">
                              <h5 className="font-medium text-xs">
                                Supreme Pizza
                              </h5>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-orange-500 font-semibold">
                                  $15.99
                                </span>
                                <span className="text-[10px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 rounded">
                                  4.8 ★
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Food item */}
                          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden">
                            <div className="h-20 bg-orange-100 dark:bg-orange-900/30"></div>
                            <div className="p-2">
                              <h5 className="font-medium text-xs">
                                Beef Burger
                              </h5>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-orange-500 font-semibold">
                                  $9.99
                                </span>
                                <span className="text-[10px] bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 rounded">
                                  4.7 ★
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Active order */}
                      <div className="mx-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg mt-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-xs text-blue-700 dark:text-blue-400">
                              Active Order
                            </h4>
                            <p className="text-xs text-blue-600 dark:text-blue-300">
                              Your food is on the way
                            </p>
                          </div>
                          <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                            26 min
                          </div>
                        </div>
                        <div className="h-1.5 bg-blue-200 dark:bg-blue-800 rounded-full mt-2 overflow-hidden">
                          <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation bar */}
                    <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-2 flex justify-around">
                      {["home", "search", "orders", "profile"].map(
                        (item, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-lg ${
                              i === 0 ? "text-orange-500" : "text-slate-400"
                            }`}
                          >
                            {item === "home" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 17.99V14.99"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            {item === "search" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M21 21L17 17"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            {item === "orders" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.5 7V17C3.5 20 4.97 21.5 8 21.5H16C19.03 21.5 20.5 20 20.5 17V7C20.5 4 19.03 2.5 16 2.5H8C4.97 2.5 3.5 4 3.5 7Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7 8.5H17"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7 13.5H13"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7 18.5H11"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            {item === "profile" && (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [-10, 10], rotate: [-3, 3] }}
                transition={{
                  y: { repeat: Infinity, repeatType: "reverse", duration: 2 },
                  rotate: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                  },
                }}
                className="absolute -right-16 top-1/4 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 z-20 max-w-[140px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM7.49988 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49988 13.1727C4.36689 13.1727 1.82707 10.6329 1.82707 7.49988C1.82707 4.36689 4.36689 1.82707 7.49988 1.82707ZM10.8922 5.12445C11.0451 4.95657 11.0451 4.70847 10.8922 4.5406C10.7243 4.35774 10.4459 4.35774 10.278 4.5406L6.00011 9.1903L4.69952 7.81199C4.53164 7.62912 4.25354 7.62912 4.08567 7.81199C3.9178 7.97987 3.9178 8.27097 4.08567 8.43884L5.66346 10.1221C5.83133 10.305 6.10944 10.305 6.27731 10.1221L10.8922 5.12445Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-900 dark:text-white">
                      Order confirmed!
                    </p>
                    <p className="text-xs text-slate-500">
                      Your food is on the way
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                  delay: 0.5,
                }}
                className="absolute -left-12 bottom-1/4 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 z-20"
              >
                <div className="text-lg font-bold text-orange-500">15% OFF</div>
                <div className="text-xs text-slate-500">First app order</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
