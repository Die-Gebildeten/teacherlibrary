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
  background-color: ${(props) => {
      switch (props.category) {
        case "Maths":
          return "var(--highlight-clr-category1)";
        case "German":
          return "var(--highlight-clr-category2)";
        case "Chemistry":
          return "var(--highlight-clr-category3)";
        case "Physics":
          return "var(--highlight-clr-category4)";
        case "Biology":
          return "var(--highlight-clr-category5)";
          case "Sports":
          return "var(--highlight-clr-category6)";
          case "Art":
          return "var(--highlight-clr-category7)";
          case "Geography":
          return "var(--highlight-clr-category8)";
          case "Spanish":
          return "var(--highlight-clr-category9)";
          case "French":
          return "var(--highlight-clr-category10)";
          case "Religion/Ethics":
          return "var(--highlight-clr-category11)";
          
        default:
          return "var(--font-category-white)";
      }
    }};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  h2 {
    text-align: center;
    color: whitesmoke;
    font-size: 1.5rem;
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

  p {
    height: 100%;
    font-family: "Courier New", Courier, monospace;
    color: #111;
    text-align: center;
    padding: 10px;
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

function Card({ label, title, category, text, tag1, tag2, tag3, tag4 }) {
  return (
    <CardContainer category={category}>
      <UpperCard category={category}>
        <CardLabel>{label}</CardLabel>
        <h2>{title}</h2>
        <DownloadButton />
      </UpperCard>
      <LowerCard>
        <p>{text}</p>
        
      <CardSideTags>
        <CardTag category={category}>{tag1}</CardTag>
        <CardTag category={category}>{tag2}</CardTag>
        {tag3 && <CardTag category={category}>{tag3}</CardTag>}
        {tag4 && <CardTag category={category}>{tag4}</CardTag>}
      </CardSideTags>
      </LowerCard>
    </CardContainer>
  );
}

export default Card;
