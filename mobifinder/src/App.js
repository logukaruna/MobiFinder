import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import TermsAndCondition from './Components/TermsAndCondition';
import TermsAndConditionReq from './Components/TermsAndConditionReq';

import { useState } from 'react';


function App() {
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const [userDenied, setUserDenied] = useState(false);

  return (
    <div className="App">
      <div>
        {hasAgreedToTerms ? (
          <>
            <Header />
            <Home />
            {/* Rest of your homepage content */}
          </>
        ) : (
          userDenied ? (
            <TermsAndConditionReq Retry={()=> setUserDenied(false)}/>
          ) : (
            <TermsAndCondition
              OnAgree={() => setHasAgreedToTerms(true)}
              OnDeny={() => setUserDenied(true)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
