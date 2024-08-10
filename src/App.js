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
  const [desc, setDesc] = useState("Name");

  const getUserData = async () => {
    const { data } = await axios.get(url);
    console.log(data.results[0]);
    setUserData(data.results[0]);
  };

  useEffect(() => {
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
            <h4 className="user_desc">My {desc} is</h4>
            <h3 className="user_info">{`${userData?.name.first} ${userData?.name.last}`}</h3>
          </div>
          <div className="buttons">
            <button onClick={() => setDesc("Name")}>
              {userData?.gender === "male" ? (
                <img src={man} alt="man" />
              ) : (
                <img src={woman} alt="woman" />
              )}
            </button>
            <button onClick={() => setDesc("Email")}>
              <img src={mail} alt="" />
            </button>
            <button onClick={() => setDesc("Age")}>
              {userData?.gender === "male" ? (
                <img src={ageMan} alt="age man" />
              ) : (
                <img src={ageWoman} alt="age woman" />
              )}
            </button>
            <button onClick={() => setDesc("Adress")}>
              <img src={map} alt="" />
            </button>
            <button onClick={() => setDesc("Phone")}>
              <img src={phone} alt="" />
            </button>
            <button onClick={() => setDesc("Password")}>
              <img src={lock} alt="" />
            </button>
          </div>
          <div className="user_buttons">
            <button onClick={() => getUserData()}>New User</button>
            <button>Add User</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
