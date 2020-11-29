import styled from "@emotion/styled"

const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(
    5,
    minmax(auto, 50px)
  );
  @media (min-width: 900px) {
    grid-template-columns: repeat(
      10,
      minmax(auto, 50px)
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      15,
      minmax(auto, 50px)
    );
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(
      20,
      minmax(auto, 50px)
    );
  }
  grid-gap: 40px;
  align-items: center;
  justify-content: center;
  & * {
    grid-column: span 4;
  }
`;
export default CardSection;