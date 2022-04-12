import styled from "styled-components";

import VagonImg from "./static/images/vagon.png";
import RailsImg from "./static/images/railroad.png";

const SkiesColor = "#88EFEF";
const GroundColor = "#9E5F3C";

export const Scene = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow-x: hidden;
`;

export const Skies = styled.div`
  position: absolute;
  height: 80%;
  width: 100%;
  top: 0;

  background-color: ${SkiesColor};

  z-index: 1;
`;

export const Ground = styled.div`
  position: absolute;
  height: 20%;
  width: 100%;
  bottom: 0;

  background-color: ${GroundColor};

  z-index: 1;
`;

export const Vagon = styled.img.attrs(({position}) => ({
  style: {
    left: `${position}px`,
  },
}))`
  position: absolute;
  display: block;
  bottom: 5%;
  width: 200px;

  z-index: 2;
`;

export const RailRoad = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  bottom: -30%;
  background-image: url(${RailsImg});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;

  z-index: 2;
`;

export const StartButton = styled.button`
  position: absolute;
  top: 20px;
  right: 140px;
  width: 100px;
  height: 40px;

  cursor: pointer;
  z-index: 3;
`;

export const StopButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 40px;

  cursor: pointer;
  z-index: 3;
`;

Vagon.defaultProps = {
  src: VagonImg,
}