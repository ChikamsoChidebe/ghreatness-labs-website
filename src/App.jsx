import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import Company from "./pages/Company";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        </Route>
      </Routes>

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
