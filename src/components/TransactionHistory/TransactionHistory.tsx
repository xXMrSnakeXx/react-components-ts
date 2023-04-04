import { FC } from "react";
import { Table, Td, Th, Tr } from "./TransactionHistory.styled";

interface ITransactionHistoryProps {
  items: Array<IItems>;
}
interface IItems {
  id: string;
  type: string;
  amount: string;
  currency: string;
}
const TransactionHistory: FC<ITransactionHistoryProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
