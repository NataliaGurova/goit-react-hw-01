import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({friends}) => {
	return (
		<ul>
			{friends.map(({ id, name, avatar, isOnline }) => (
		<li key={id}>
				<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
			</li>
			))}			
		</ul>);
};

export default FriendList;

{/* <ul className={style.list}>
        {list.map(({ id, name, capital, avatar, isIncrease }) => (
          <li className={style.item}  key={id}>
            <ForbesListItem
              avatar={avatar}
              capital={capital}
              name={name}
              isIncrease={isIncrease}
             
            />
          </li>
        ))}
      </ul> */}