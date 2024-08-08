import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Header from "./pages/sections/utils/Header";
import Footer from "./pages/sections/utils/Footer";
import Error404 from "./pages/sections/errors/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/porfolio/" element={<HomePage/>}/>
          <Route path="/projects/" element={<ProjectsPage/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
};