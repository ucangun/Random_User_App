import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url = "https://randomuser.me/api/";

  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(url);
      console.log(data.results[0]);
      setUserData(data.results[0]);
    };
    getUserData();
  }, []);

  return (
    <div>
      <header>
        <h1>Random User App</h1>
      </header>
      <main>
        <div className="card">
          <img src={userData?.picture.large} alt="user" />
          <div className="user">
            <h4 className="user_desc">fc</h4>
            <h3 className="user_info">{`${userData?.name.first} ${userData?.name.last}`}</h3>
          </div>
          <div className="buttons">
            <button>name</button>
            <button>email</button>
            <button>age</button>
            <button>location</button>
            <button>tel</button>
            <button>password</button>
          </div>
          <div className="buttons">
            <button>New User</button>
            <button>Add User</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
