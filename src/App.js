import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
