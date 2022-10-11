import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateContainerPage from "./pages/CreateContainerPage";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "./store/StateProvider";
import MenuPage from "./pages/MenuPage";

function App() {
  const { fetchData } = useStateValue();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateContainerPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ToastContainer
          autoClose={1500}
          style={{
            marginTop: "7rem",
          }}
        />
      </div>
    </AnimatePresence>
  );
}

export default App;
