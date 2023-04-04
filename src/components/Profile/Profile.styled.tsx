import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  text-align: center;
  margin: auto;
  margin-top: 60px;
  border: solid 1px #d8e0ea;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Description = styled.div`
  width: 250px;
  height: auto;
  padding-top: 15px;
`;

export const Image = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Name = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  margin: 0;
  margin-top: 10px;
`;
export const Tag = styled.p`
  font-size: 14px;
  color: #000;
  text-align: center;
  margin: 0;
  margin-top: 10px;
`;
export const Location = styled.p`
  font-size: 14px;
  color: #000;
  line-height: 32px;
  margin: 0;
  margin-top: 10px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 30px;
  padding: 0;
  list-style: none;
  background-color: #dadbdc;
`;

export const Item = styled.li`
  width: 85px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: #000;
  padding-top: 22px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
export const Quantity = styled.span`
  display: flex;
  justify-content: center;

  line-height: 1.2;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 22px;
  margin-top: 5px;
`;
