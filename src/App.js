import React from 'react';
import Baking from './component/Baking/Baking.jsx';
import Home from './component/Home/Home.jsx' ;
import Location from './component/Location/Location.jsx';
// import Map from './component/Map/Map.jsx';
import Who from './component/Who/Who.jsx';
export default function App() {
  return (
    <>  
    <Home/>
    <Who/>
    <Location/>
    <Baking/>
    {/* <Map/> */}
    </>
  );
}
