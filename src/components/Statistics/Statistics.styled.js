import styled from 'styled-components';

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export const StatisticsSection = styled.section`
  width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  color: white;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  padding: 24px;
  color: black;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => generateRandomColor()};
  width: 120px;
  gap: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StatisticsNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
