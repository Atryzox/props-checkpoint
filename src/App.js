import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";


function App() {
  // declaration of call back function
  const handlName = (name) => alert(name);
  return (
    <div className="App">
      {/* adding fullName, bio and profession as props */}
      <Profile
        fullName="Ahmed Kalai"
        bio="Im currently working in Hexabyte as a Technical HotLiner and I'm a Student in GOMYCODE academy, looking for an oportunites to become a software developper in the future inchallah."
        profession="Technical HotLiner, Student"
        handlName={handlName}
      />
    </div>
  );
}

export default App;
