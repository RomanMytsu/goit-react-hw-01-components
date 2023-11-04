import styled from 'styled-components';

export const Section = styled.div`
  background-color: #b6e2ed;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 80px;
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 250px;
  padding: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`;

export const UserAvatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  padding: 8px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const UserStatsList = styled.ul`
  display: flex;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #f3f6f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const UserStatsNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
