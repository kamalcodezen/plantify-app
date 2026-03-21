import { Suspense } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/BannerSection/Banner";
import AllTreeCard from "./components/MainTreeCardSection/AllTreeCard";
import About from "./components/AboutSection/AboutSection";
import aboutImg from "./assets/about.png";
import Impact from "./components/ImpactSection/Impact";
import Footer from "./components/FooterSection/Footer";

// Nav Menu Api
const navbarMenuFetch = fetch("/navbarApiData.json").then((res) => res.json());

// Category API
const categoriesButtonAPi = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  return res.json();
};

function App() {
  const allCategoriesButton = categoriesButtonAPi();

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header>
        {/* Navbar */}
        <nav className="relative top-0 left-0 z-10 py-3  backdrop-blur-3xl">
          <Container>
            <Navbar navbarMenuFetch={navbarMenuFetch} />
          </Container>
        </nav>
      </header>

      {/* MAIN */}
      <main>
        <Banner />

        <Container>
          {/* All Trees Card */}
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-72">
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <AllTreeCard allCategoriesButton={allCategoriesButton} />
          </Suspense>

          {/* About */}
          <About aboutImg={aboutImg} />

          {/* Impact */}
          <Impact />

          {/* Footer */}
          <Footer />
        </Container>
      </main>
    </div>
  );
}

export default App;
