import React from "react";
import styled from "@emotion/styled";
import DownloadButton from "../components/DownloadButton";
import CardLabel from "../components/CardLabel";
import CardTag from "../components/CardTag";

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  width: 250px;
  height: 400px;
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
`;

const UpperCard = styled.div`
  grid-row: 1 / 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  h2 {
    text-align: center;
    color: whitesmoke;
  }
  button {
    position: absolute;
    bottom: 2%;
    right: 3%;
  }
  div {
    position: absolute;
    top: 5%;
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
  overflow-y: scroll;
  padding-top: 10px;

  p {
    height: 100%;
    font-family: "Courier New", Courier, monospace;
    color: #111;
    justify-self: center;
    align-self: center;
    text-align: center;
    padding: 10px;
  }
`;
const CardSideTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.3s ease-in;
  opacity: 0;

  &:hover {
    opacity: 1;
    left: 120px;
    padding-left: 10px;
  }
`;

function Card({ label, title, color, text, tag1, tag2, tag3, tag4 }) {
  return (
    <CardContainer color={color}>
      <UpperCard color={color}>
        <CardLabel>{label}</CardLabel>
        <h2>{title}</h2>
        <DownloadButton />
      </UpperCard>
      <LowerCard>
        <p>{text}</p>
      </LowerCard>
      <CardSideTags>
        <CardTag color={color}>{tag1}</CardTag>
        <CardTag color={color}>{tag2}</CardTag>
        {tag3 && <CardTag color={color}>{tag3}</CardTag>}
        {tag4 && <CardTag color={color}>{tag4}</CardTag>}
      </CardSideTags>
    </CardContainer>
  );
}

export default Card;
