import "./App.css";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import Banner from "./Banner";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import { useWindowSize } from "./helper";
import { BrowserRouter } from "react-router-dom";

function App() {
  const windowSize = useWindowSize();

  return (
    <BrowserRouter>
      <div className={`App ${windowSize > 1200 && "p-6"}`}>
        <Navbar />
        <ProductDetail />
        <Banner />
        <Suggestion />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
