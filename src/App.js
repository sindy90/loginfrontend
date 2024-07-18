import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import Login from './login';

const App =() =>{
  return(
    <Router>
      <div>
        <li>
          <Link to ="/">Login</Link>
        </li>
      <Routes>
        <Route path = "/" element={<Login />} />
      </Routes>
      </div>

    </Router>
  )
}

export default App;