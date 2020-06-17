import React from "react";
import Navbar from "./components/ui/Navbar";
import Search from "./components/ui/Search";
import Cards from "./components/ui/Cards";

function App() {
  return (
    <div className='bg-very-dark-blue min-h-screen'>
      <Navbar />
      <div className='container mx-auto'>
        <Search />
        <Cards />
      </div>
    </div>
  );
}

export default App;
