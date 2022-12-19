import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Monsters } from "./pages/Monsters"
import { Npc } from "./pages/Npc"
import { Map } from "./pages/Map"
import { Fight } from "./pages/Fight"
import { Navbar } from "./components/Navbar"
import "../src/App.css"
import { FightCartProvider } from "./context/FightCartContext"
import { createContext, useState } from "react"
import { Button } from "react-bootstrap"

export const ThemeContext = createContext(null);

function App() {

    const [theme, setTheme] = useState("");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

  

    return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <FightCartProvider>
      <div  id={theme}>
    <Navbar />
    <button
    className="button"
    onChange={toggleTheme} 
    onClick={toggleTheme}
    >
      Theme Mode
    </button>
    <div id="main_container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Monsters" element={<Monsters />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Npc" element={<Npc />} />
      <Route path="/Fight" element={<Fight />} />
    </Routes>
    </div>
    </div>
    </FightCartProvider>
    </ThemeContext.Provider>
  </>
  )
}

export default App
