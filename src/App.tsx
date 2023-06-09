import Container from "./components/Container";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ErrorPage from "./routes/ErrorPage";
import ChoicePage from "./routes/ChoicePage";
import Overlay from "./components/Overlay";

function App() {
  return (
    <>
      <header>
        <Container>
          <Link to="/">Choice helper</Link>
        </Container>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/theme/:slug" element={<ChoicePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <Container>
          <Link
            to="https://github.com/prspro/choice-helper"
            rel="noreferrer"
            target="_blank"
          >GitHub</Link>
        </Container>
      </footer>
      <Overlay />
    </>
  );
}

export default App;
