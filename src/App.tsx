import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
// import Navbar from "./navbar/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage"; // add this import
import Contact from "./pages/Contact"; // add this import

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key="routes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="min-h-screen bg-black text-white"
        >
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
