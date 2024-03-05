import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Header from "./pages/sections/utils/Header";
import Footer from "./pages/sections/utils/Footer";

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};