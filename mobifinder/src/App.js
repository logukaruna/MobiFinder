import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import TermsAndCondition from './Components/TermsAndCondition';
import { useState } from 'react';
function App() {
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);

  return (
    <div className="App">
      <div>
        {hasAgreedToTerms ? (
          <>
            <Header />
            <Home/>
            {/* Rest of your homepage content */}
          </>
        ) : (
          <TermsAndCondition onClose={() => setHasAgreedToTerms(true)} />
        )}
      </div>
    </div>
      

  );
}

export default App;
