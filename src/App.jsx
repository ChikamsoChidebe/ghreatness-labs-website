import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}></Route>
      </Routes>

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
