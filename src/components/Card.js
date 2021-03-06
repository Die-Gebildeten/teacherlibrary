import React from "react";
import styled from "@emotion/styled";
import DownloadButton from "../components/DownloadButton";
import CardLabel from "../components/CardLabel";
import CardTag from "../components/CardTag";


const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 50% 50%;
  width: 250px;
  height: 400px;
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);

  button {
    position: absolute;
    bottom: 180px;
    right: 3%;
    z-index: 3;
  }
`;

const UpperCard = styled.div`
  grid-row: 1 / 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => 
      props.color
    };
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  h2 {
    text-align: center;
    color: whitesmoke;
    font-size: 1.5rem;
    margin: 0.3rem;
    margin-top: 1rem;
  }
 
  div {
    position: absolute;
    top: 3%;
    left: 5%;
  }
`;

const LowerCard = styled.div`
  grid-row: 2/3;
  background-color: whitesmoke;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  display: flex;
  position: relative;

  p {
    height: 100%;
    font-family: "Courier New", Courier, monospace;
    color: #111;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
  }
`;
const CardSideTags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.3s ease-in;
  opacity: 0;

  &:hover {
    opacity: 1;
    right: -200px;
    padding-left: 10px;
  }
`;

function Card({ label, title, color, text, tag1, tag2, tag3, tag4 }) {
  return (
    <CardContainer color={color}>
        <DownloadButton />
      <UpperCard color={color}>
        <CardLabel>{label}</CardLabel>
        <h2>{title}</h2>
      </UpperCard>
      <LowerCard>
        <p>{text}</p>
        
      <CardSideTags>
        <CardTag color={color}>{tag1}</CardTag>
        <CardTag color={color}>{tag2}</CardTag>
        {tag3 && <CardTag color={color}>{tag3}</CardTag>}
        {tag4 && <CardTag color={color}>{tag4}</CardTag>}
      </CardSideTags>
      </LowerCard>
    </CardContainer>
  );
}

export default Card;
