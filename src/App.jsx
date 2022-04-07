import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Container } from "./container/container";
// CODIGO PARA ANIMACION DE SCROLL
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
