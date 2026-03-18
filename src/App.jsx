import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="border-b">
        <Container>


          <h1>Plantify</h1>


        </Container>
      </header>

      {/* Main */}
      <main className="py-8">
        <Container>


          <p>Main Content</p>


        </Container>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <Container>


          <p>Footer</p>


        </Container>
      </footer>
    </>
  );
}

export default App;
