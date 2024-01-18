import React from "react";
import "./style.css";

export default function App() {
  const [track, setTrack] = React.useState(0);
//   const counterMinus = track - 1;
//   const counterPlus = track + 1;
//   function minus() {
//     setTrack(counterMinus);
//   }
//   function plus() {
//     setTrack(counterPlus);
//   }
//   console.log(track);
function minus() {
    setTrack(function(){
        return track - 1
    })
}
// function plus() {
//     setTrack(() => track + 1)
// }
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
