import { Suspense } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/BannerSection/Banner";

// Nav Menu Api
const navbarMenuFetch = fetch("/navbarApiData.json").then((res) => res.json());

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="bg-green-700/80 backdrop-blur-lg">
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
          <p>Main Content</p>
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
