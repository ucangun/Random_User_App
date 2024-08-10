import { useEffect, useState } from "react";
import axios from "axios";

import mail from "./assets/mail.svg";
import map from "./assets/map.svg";
import phone from "./assets/phone.svg";
import ageMan from "./assets/growing-up-man.svg";
import ageWoman from "./assets/growing-up-woman.svg";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import lock from "./assets/padlock.svg";

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
            <h4 className="user_desc">My Name is</h4>
            <h3 className="user_info">{`${userData?.name.first} ${userData?.name.last}`}</h3>
          </div>
          <div className="buttons">
            <button>
              {userData?.gender === "male" ? (
                <img src={man} alt="man" />
              ) : (
                <img src={woman} alt="woman" />
              )}
            </button>
            <button>
              <img src={mail} alt="" />
            </button>
            <button>
              {userData?.gender === "male" ? (
                <img src={ageMan} alt="age man" />
              ) : (
                <img src={ageWoman} alt="age woman" />
              )}
            </button>
            <button>
              <img src={map} alt="" />
            </button>
            <button>
              <img src={phone} alt="" />
            </button>
            <button>
              <img src={lock} alt="" />
            </button>
          </div>
          <div>
            <button>New User</button>
            <button>Add User</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
