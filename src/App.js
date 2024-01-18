import React from "react";
import "./style.css";

export default function App() {
  const [track, setTrack] = React.useState(0);
function minus() {
    setTrack(function(){
        return track - 1
    })
}
function plus() {
    setTrack(prevTrack => prevTrack + 1)
}
  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1>{track}</h1>
      </div>
      <button className="counter--plus" onClick={plus}>
        +
      </button>
    </div>
  );
}
