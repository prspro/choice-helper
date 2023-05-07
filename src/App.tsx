import Container from "./components/Container";
import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import ErrorPage from "./routes/ErrorPage";
import ChoicePage from "./routes/ChoicePage";

function App() {
  return (
    <>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} errorElement />
          <Route path="123" element={<ChoicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
}

export default App;
