import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import Login from './login';
import CreateOneTimeLink from './oneTimeLink'
import CreateTimeLink from './timeLink'
import CreateKickout from './kickout'

const App =() =>{
  return(
    <Router>
      <div>
        <li>
          <Link to ="/">Login</Link>
        </li>
        <li>
          <Link to ="/create-link">CreateOneTimeLink</Link>
        </li>
        <li>
          <Link to ="/time-link">CreateTimeLink</Link>
        </li>
        <li>
          <Link to ="/kickout">kickout</Link>
        </li>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/create-link" element={<CreateOneTimeLink />} />
        <Route path = "/time-link" element={<CreateTimeLink />} />
        <Route path = "/kickout" element={<CreateKickout />} />



      </Routes>
      </div>

    </Router>
  )
}

export default App;