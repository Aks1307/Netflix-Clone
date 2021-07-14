import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  color: white;
  margin-top: 60px;

`;
export const Item = styled.div`
  background: #303030;
  margin: 5px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  //   padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  padding:20px;
  box-sizing : border-box;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    
    @media (max-width: 600px) {
        width: 16px;
    }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Body = styled.div`
  border-top: 1px solid #000;
  padding: 20px;
  
`;
export const Text = styled.p`
  padding: 10px;
  font-weight: 400;
  font-size: 26px;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;
export const Frame = styled.img`
  height: 1em;
  width: 1em;
`;
