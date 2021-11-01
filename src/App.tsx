import './App.css';
import React, {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from './components/Body/Body';
import CurrentPageContextObject from "./components/Body/CurrentPageContext";

const App: React.FC = () =>{

    const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
        <CurrentPageContextObject.Provider value={{currentPage, setCurrentPage}}>
      <NavBar  />
      <Body  />
        </CurrentPageContextObject.Provider>
    </div>
  );
};

export default App;
