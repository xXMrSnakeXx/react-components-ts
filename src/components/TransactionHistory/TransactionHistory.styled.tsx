import styled from "@emotion/styled";

export const Table = styled.table`
  color: #000;
  width: 500px;
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 60px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Th = styled.th`
  border: 1px solid #000;
  background-color: #5d5d5d;
  font-weight: 900;
  font-size: 18px;
  padding: 5px 0 5px 0;
  color: lightblue;
`;
export const Td = styled.td`
  border: 1px solid #000;
  font-weight: 700;
  font-size: 15px;
  padding: 5px 0 5px 0;
`;
export const Tr = styled.tr`
  :nth-of-type(2n) {
    background-color: #dadbdc;
  }
`;
