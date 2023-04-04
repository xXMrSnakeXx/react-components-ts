import { FC } from "react";
import {
  Section,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";
interface IStatisticsProps {
  title?: string;
  stats: Array<IStats>;
}
interface IStats {
  id: string;
  label: string;
  percentage: number;
}
const Statistics: FC<IStatisticsProps> = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Statistics;
