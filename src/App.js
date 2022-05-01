
import { Routes } from "react-router-dom";
import "./App.css";
import AnimatedRoute from "./components/AnimatedRoute/AnimatedRoute";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header></Header>
        <AnimatedRoute></AnimatedRoute>
      <Footer></Footer>
    </div>
  );
}

export default App;
