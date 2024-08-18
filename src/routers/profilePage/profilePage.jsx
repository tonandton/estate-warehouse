import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>johndoe@email.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List>
            <div className="title">
              <h1>Saved List</h1>
            </div>
          </List>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
