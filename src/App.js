import React from "react";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";

function App() {
 
  return (
    <div className="App">
      <SearchBar />
      <footer>
        <ul>
          <li>Term</li>
          <li>Privacy</li>
          <li>About</li>
          <li>Doc</li>
          <li>Contact Us</li>
        </ul>
      </footer> 
    </div>
  );
}

export default App;
