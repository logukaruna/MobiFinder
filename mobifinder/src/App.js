import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import TermsAndCondition from './Components/TermsAndCondition';
import AboutUs from './Components/AboutUs';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';

import { useState } from 'react';
function App() {
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);

  return (
    <Router>
    <div className="App">
      <div>
        {hasAgreedToTerms ? (
          <>
              <Header />
              <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/aboutus" element={<AboutUs />} />
              </Routes>
            <Home/>
            {/* Rest of your homepage content */}
          </>
        ) : (
          <TermsAndCondition onClose={() => setHasAgreedToTerms(true)} />
        )}
      </div>
    </div>
    </Router>
  );
}

export default App;
