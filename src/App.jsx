import React from "react";
import { createRoot } from "react-dom";
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}


// Use createRoot to render the App component asynchronously
const root = createRoot(document.getElementById("root"));
root.render(<App />);
