import { Container } from "./App.css";
import { BookDetails } from "./book/components/BookDetails/BookDetails";

const App = () => {
  return (
    <Container role='main'>
      <BookDetails />
    </Container>
  );
};

export default App;
