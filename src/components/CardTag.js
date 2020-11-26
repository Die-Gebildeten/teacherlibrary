import styled from "@emotion/styled";

const CardTag = styled.div`
  border-radius: 15px;
  background-color: ${(props) =>
    props.color};
  color: whitesmoke;
  width: 50%;
  padding: 7px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 1px;
`;

export default CardTag;
