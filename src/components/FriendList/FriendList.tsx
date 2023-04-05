import { FC } from "react";
import FriendListItem from "./FriendListItem";
import { List } from "./FriendList.styled";

interface IFriendListProps {
  friends: Array<IFriend>;
}
interface IFriend {
  id: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}
const FriendList: FC<IFriendListProps> = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </List>
  );
};

export default FriendList;
