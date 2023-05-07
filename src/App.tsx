import ChoiceList from "./components/ChoiceList";
import Container from "./components/Container";

function App() {
  return (
    <>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <ChoiceList />
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
}

export default App;
