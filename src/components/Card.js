import React from "react";
import styled from "@emotion/styled";
import DownloadButton from "../components/DownloadButton";
import CardLabel from "../components/CardLabel";
import CardTag from "../components/CardTag";
const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  background-color: black;
  background-size: cover;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  margin: 2rem;
`;

const UpperCard = styled.div`
  border: 2px solid ${(props) => props.color};
  border-radius: inherit;
  background-size: cover;
  grid-row: 1 / 2;
  position: relative;
  h2 {
    font-family: "sans serif";
  }
  button {
    position: absolute;
    bottom: 2%;
    right: 3%;
  }
  div {
    position: absolute;
    top: 3%;
    left: 3%;
  }
`;

const LowerCard = styled.div`
grid-row:2/3;
background-color:aliceblue;
display:grid;
grid-template-rows:80%20%;
padding:1rem;
p{
font-family:'Courier New', Courier, monospace;
color:antiquewhite;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Card({ label, title, color, text, tag1, tag2, tag3, tag4 }) {
  return (
    <CardContainer>
      <UpperCard color={color}>
        <CardLabel>{label}</CardLabel>
        <h2>{title}</h2>
        <DownloadButton />
      </UpperCard>
      <LowerCard>
        <p>{text}</p>
        <CardFooter>
          <CardTag>{tag1}</CardTag>
          <CardTag>{tag2}</CardTag>
          {tag3 && <CardTag>{tag3}</CardTag>}
          {tag4 && <CardTag>{tag4}</CardTag>}
        </CardFooter>
      </LowerCard>
    </CardContainer>
  );
}

export default Card;
