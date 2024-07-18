import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  const stats = [
    { label: "Followers", value: followers },
    { label: "Views", value: views },
    { label: "Likes", value: likes },
  ];
  return (
    <div className={s.card}>
      <div className={s.data}>
        <img className={s.avatar} src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {stats.map(({ label, value }) => {
          return (
            <li key={label} className={s.statsItem}>
              <span>{label}</span>
              <span className={s.value}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Profile;
