import { FC } from "react";
import { Avatar, Item, Name, Status } from "./FriendListItem.styled";
interface IFriendListItemProps {
  name: string;
  isOnline: boolean;
  avatar: string;
}

const FriendListItem: FC<IFriendListItemProps> = ({
  name,
  isOnline,
  avatar,
}) => {
  return (
    <Item>
      <Status status={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Name> {name} </Name>
    </Item>
  );
};

export default FriendListItem;
