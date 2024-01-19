
import {BrowserRouter as Router, Routes, Route }from "react-router-dom";
import Header from "./component/Header";
import HeroPage from "./page/HeroPage";
import Error from "./page/Error";
import FavPage from "./page/FavPage";
import CartPage from "./page/CartPage";
import SinglePage from "./page/SinglePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element = {<HeroPage />}/>
          <Route path="*" element={<Error />} />
          <Route path="favorite" element={<FavPage />} />
          <Route path="cart" element = {<CartPage />}/>
          <Route path="single/:id" element={<SinglePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
