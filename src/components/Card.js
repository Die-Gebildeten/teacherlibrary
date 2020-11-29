import styled from "@emotion/styled";

const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 50% 50%;
  width: 250px;
  height: 400px;
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 0 20px 50px
    rgba(0, 0, 0, 0.8);

  a {
    position: absolute;
    bottom: 180px;
    right: 3%;
    z-index: 3;
  }
`;
export default Card;