import './App.css';
import { Home } from "./pages/home/home.component";
import { Routes, Route} from "react-router-dom";
import  ShopPage from "./pages/shop/shop.component";



function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop" element={<ShopPage/>} />
            <Route exact path="*" element={<div>NOT FOUND</div>} />
        </Routes>
      </div>
  );
}

export default App;
