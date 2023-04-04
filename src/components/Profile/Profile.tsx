import { FC } from "react";
import {
  Description,
  Image,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
  Wrapper,
} from "./Profile.styled";

interface IProfileProps {
  avatar: string;
  username: string;
  tag: string;
  location: string;
  stats: IStats;
}
interface IStats {
  followers: number;
  views: number;
  likes: number;
}

const Profile: FC<IProfileProps> = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  const { followers, views, likes } = stats;
  return (
    <Wrapper>
      <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </List>
    </Wrapper>
  );
};
export default Profile;
