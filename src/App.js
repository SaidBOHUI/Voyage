import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutNav from "./layout/navbar/layoutNav";


//CSS 
import "./css/style.css"

const Home = lazy(() => import("./pages/Home"));
const Faq = lazy(() => import("./pages/Faq"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    // <Suspense fallback = {<Loader />}>
    <Router>
      <LayoutNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </LayoutNav>
    </Router>
    // </Suspense>
  );
}

export default App;
