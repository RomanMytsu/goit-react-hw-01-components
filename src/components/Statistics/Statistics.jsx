import {
  StatisticsItem,
  StatisticsList,
  StatisticsNumber,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <span>{label}</span>
            <StatisticsNumber>{percentage}%</StatisticsNumber>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
