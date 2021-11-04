import { Container } from "./App.css";
import { BookOverview } from "./book/components/BookOverview/BookOverview";

const App = () => {
  return (
    <Container role='main'>
      <BookOverview />
    </Container>
  );
};

export default App;
