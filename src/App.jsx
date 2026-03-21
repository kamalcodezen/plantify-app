import { Suspense } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/BannerSection/Banner";
import AllTreeCard from "./components/MainTreeCardSection/AllTreeCard";
import About from "./components/AboutSection/AboutSection";
import aboutImg from "./assets/about.png";
import Impact from "./components/ImpactSection/Impact";

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
        <nav
          className="relative  top-0 left-0  z-10 py-3
bg-black/30 backdrop-blur-3xl
shadow-[0_0_30px_rgba(34,197,94,0.3)]
transition-all duration-500"
        >
          <Container>
            {/* Navbar */}
            <Navbar navbarMenuFetch={navbarMenuFetch}></Navbar>
          </Container>
        </nav>

        {/* banner */}
      </header>

      {/* Main */}
      <main className="py- bg-black ">
        <Banner className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 "></Banner>

        <Container>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-72">
                <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
              </div>
            }
          >
            <AllTreeCard
              allCategoriesButton={allCategoriesButton}
            ></AllTreeCard>
          </Suspense>

          {/* About */}
          <div>
            <About aboutImg={aboutImg} />
          </div>

       
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
