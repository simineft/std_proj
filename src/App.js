import React from 'react';
import Dashboard from "./container/dashboard/dashboard";
import MapContextProvider from "../src/context/map/mapContext"
import './App.css';

function App() {
  return (
    <MapContextProvider  >
       <div className="App">
           <Dashboard />
      </div>

    </MapContextProvider>
   


  );
}

export default App;
