import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const Button = styled.button`
display: flex;
align-items: center;
height: 70px;
background: #e50914;
color: white;
text-transform: uppercase;
padding: 0 32px;
font-size: 26px;
border: 0;
cursor: pointer;

img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
}
`;
export const Text = styled.p`
  text-align: center;
  font-size:20px;
  color:#fff;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
`;
