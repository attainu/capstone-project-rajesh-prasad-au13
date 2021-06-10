import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          Hey
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
