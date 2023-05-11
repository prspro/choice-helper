import Container from "./components/Container";
import { Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ErrorPage from "./routes/ErrorPage";
import ChoicePage from "./routes/ChoicePage";

function App() {
  return (
    <>
      <header>
        <Container>Header</Container>
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
        <Container>footer</Container>
      </footer>
    </>
  );
}

export default App;
