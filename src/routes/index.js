import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';

import Home from '../pages/home';
import QuestionPage from '../pages/questionPage';


function RouteComponent() {
  return (
    
        <Router>
          <Routes>
            <Route path= '/' element = {<Home/>}/>
            <Route path= '/quiz/' element = {<QuestionPage/>}>

<Route  path= ':no' element = {<QuestionPage/>} />

            </Route>
            </Routes>
        </Router>
  
  )
}

export default RouteComponent