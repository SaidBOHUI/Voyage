// import logo from './logo.svg'; 
import React, {lazy} from 'react';
// import React, {lazy, Suspense} from 'react';
// import Loader from './components/Loader'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const Home = lazy(() => import ('./pages/Home'));
const Faq = lazy(() => import ('./pages/Faq'));
const Error = lazy(() => import ('./pages/Error'));

function App() {
  return (
    // <Suspense fallback = {<Loader />}>
      <Router>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/faq" element = {<Faq />}/>
            <Route path = "*" element = {<Error />}/>
        </Routes>
      </Router>
    // </Suspense>
  );
}

export default App;
