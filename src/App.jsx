import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
