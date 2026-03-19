import { Suspense } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/BannerSection/Banner";
import AllTreeCard from "./components/MainTreeCardSection/AllTreeCard";

// Nav Menu Api
const navbarMenuFetch = fetch("/navbarApiData.json").then((res) => res.json());

// ALl Category Button Api
const categoriesButtonAPi = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  return res.json();
};

function App() {
  const allCategoriesButton = categoriesButtonAPi();

  return (
    <>
      {/* Header */}
      <header>
        <nav className="bg-gradient-to-r from-green-400/70 via-emerald-500/90 to-lime-400/60 backdrop-blur-lg">
          <Container>
            {/* Navbar */}
            <Navbar navbarMenuFetch={navbarMenuFetch}></Navbar>
          </Container>
        </nav>

        {/* banner */}

        <Banner className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 bg-[#cff0dc]"></Banner>
      </header>

      {/* Main */}
      <main className="py-8">
        <Container>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-lg flex items-center justify-center mt-50 mx-auto text-green-400 font-medium"></span>
            }
          >
            <AllTreeCard
              allCategoriesButton={allCategoriesButton}
            ></AllTreeCard>
          </Suspense>
        </Container>
      </main>

      {/* Footer */}
      <footer className="">
        <Container>
          <p>Footer</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
