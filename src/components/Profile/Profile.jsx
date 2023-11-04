import {
  Section,
  UserWrap,
  UserAvatar,
  UserName,
  UserStatsList,
  UserStatsItem,
  UserStatsNumber,
} from './Profile.styled';
export const Profile = ({ user }) => {
  return (
    <Section>
      <UserWrap>
        <UserAvatar src={user.avatar} alt={user.username}></UserAvatar>
        <UserName>{user.username}</UserName>
        <p>@{user.tag}</p>
        <p>{user.location}</p>
      </UserWrap>

      <UserStatsList>
        <UserStatsItem>
          <span>Followers</span>
          <UserStatsNumber>{user.stats.followers}</UserStatsNumber>
        </UserStatsItem>
        <UserStatsItem>
          <span>Views</span>
          <UserStatsNumber>{user.stats.views}</UserStatsNumber>
        </UserStatsItem>
        <UserStatsItem>
          <span>Likes</span>
          <UserStatsNumber>{user.stats.likes}</UserStatsNumber>
        </UserStatsItem>
      </UserStatsList>
    </Section>
  );
};
