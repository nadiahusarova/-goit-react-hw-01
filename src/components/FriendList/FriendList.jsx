import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
      <ul >
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li  key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    );
  };


export default FriendList;