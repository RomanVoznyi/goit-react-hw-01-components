import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={
          isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
        }
      ></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={name}
        style={{ width: `${48}px` }}
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
