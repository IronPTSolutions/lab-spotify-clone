import "./Header.css";
import user from "../../constants/user.json";
import userIcon from "../../assets/user.svg";

export default function Header({ scrollTop }) {
  /*
	1. search input
	2. user
	3. menu button
	*/
  return (
    <div
      className="Header"
      style={{
        background: `linear-gradient(hsl(0deg, 0%, 10%, ${
          scrollTop > 180 ? 0.9 : (scrollTop) / 200
        }) 60%, transparent)`,
      }}
    >
      <input className="search"></input>
      <div className="header-right">
        <div className="user">
          <div className="user-icon">
            <img src={userIcon} alt="User icon" />
          </div>
          <div className="user-name">{user.username}</div>
        </div>
      </div>
    </div>
  );
}
