import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Date } from './component/Date';
import {RangeOfDates} from "./component/RangeOfDates"
import {BrowserRouter ,Route,Routes,NavLink} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Routes>
   {/* <Route path="/"element={<Date/>} />   */}
   <Route  path="/"element={<Date/>}></Route>
 <Route path="/RangeOfDates"element={<RangeOfDates/>}></Route>
   
    </Routes>
   </BrowserRouter>
  );
}

export default App;
