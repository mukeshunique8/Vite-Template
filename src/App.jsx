import React from "react";
import { createRoot } from "react-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./dummy.json"; // Import your JSON data
import MemeCard from "./components/MemeCard"
import ProfileCard from "./components/ProfileCard";
import Todo from "./components/Todo";
function App() {
  
  // console.log(data);
  const mappedCards = data.map((item, index) => (
    <Card 
      key={index}
      imgurl={item.imageUrl}
      rating={item.rating}
      totalRatings={item.totalRatings}
      location={item.location}
      title={item.title}
      price={item.price}
      soldOut={item.soldOut}
    />
  ))
  console.log(mappedCards);
  return (
    <div className="w-full h-screen">
     
      <Navbar />

      <div className="flex flex-col justify-center sm:flex-row flex-wrap">
      {mappedCards}

      </div>

      <MemeCard></MemeCard>


      {/* <Todo></Todo> */}
      {/* <ProfileCard/> */}
    </div>
  );
}

// Use createRoot to render the App component asynchronously
const root = createRoot(document.getElementById("root"));
root.render(<App />);
