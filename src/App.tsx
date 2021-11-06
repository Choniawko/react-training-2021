import { Container } from "./App.css";
import { BookOverview } from "./book/components/BookOverview/BookOverview";
import { BookProvider } from "./book/services/bookService/BookContext";

const App = () => {
  return (
    <Container role='main'>
      <BookProvider>
        <BookOverview />
      </BookProvider>
    </Container>
  );
};

export default App;
