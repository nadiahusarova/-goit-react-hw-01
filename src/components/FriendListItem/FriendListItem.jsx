import s from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={s.wrap}>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.nikname}>{name}</p>
      <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
