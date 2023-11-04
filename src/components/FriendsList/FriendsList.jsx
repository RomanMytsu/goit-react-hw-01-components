import {
  FriendIcon,
  FriendItem,
  FriendList,
  FriendName,
  FriendStatus,
} from './FriendsList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <FriendStatus $isOnline={isOnline}></FriendStatus>
          <FriendIcon src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendList>
  );
};
