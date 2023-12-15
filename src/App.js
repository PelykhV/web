import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import Catalog from "./Pages/Catalog/Catalog";
import ItemPage from "./Pages/ItemPage/ItemPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Routes style={{flex: 1}}>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<div>Its Cart page</div>}/>
                <Route path="/itempage/:id" element={<ItemPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;