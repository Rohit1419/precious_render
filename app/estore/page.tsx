import EstoreHeader from "@/components/estore/header";
import EstoreHero from "@/components/estore/hero";
import EstoreCategories from "@/components/estore/categories";
import EstoreFeaturedProducts from "@/components/estore/featured-products";
import EstoreProductFilters from "@/components/estore/product-filters";
import EstoreProductDetail from "@/components/estore/product-detail";
import EstoreCheckout from "@/components/estore/checkout";
import EstoreFooter from "@/components/estore/footer";

export default function EStorePage() {
  return (
    <main>
      <EstoreHeader />
      <div className="pt-16">
        <EstoreHero />
        <EstoreCategories />
        <EstoreFeaturedProducts />
        <EstoreProductFilters />
        <EstoreProductDetail />
        <EstoreCheckout />
        <EstoreFooter />
      </div>
    </main>
  );
}
