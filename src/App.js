import React, { useState, useRef } from "react";

import {
  Scene,
  Ground,
  Skies,
  Vagon,
  RailRoad,
  StartButton,
  StopButton
} from "./styles";

export default function App() {
  const [trainPos, setTrainPos] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const ref = useRef(null);

  const start = () => {
    const newIntervalId = setInterval(startTimer,10);
    setIntervalId(newIntervalId);
  }

  const startTimer = () => {
    setTrainPos(trainPos => {
      const sceneWidth = Number(ref.current.offsetWidth);
      if (trainPos === sceneWidth) {
        return (-200);
      }
      return trainPos+1;
    })
  };

  const stop = () => {
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
  }

  return (
    <Scene ref={ref}>
      <Skies />
      <Vagon position={trainPos} />
      <RailRoad />
      <Ground />
      <StartButton onClick={start}>Start</StartButton>
      <StopButton onClick={stop}>Stop</StopButton>
    </Scene>
  );
}
