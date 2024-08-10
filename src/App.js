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
  const [info, setInfo] = useState("");

  const getUserData = async () => {
    const { data } = await axios.get(url);
    setUserData(data.results[0]);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setDesc("Name");
      setInfo(`${userData.name.first} ${userData.name.last}`);
    }
  }, [userData]);

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
            <h3 className="user_info">{info}</h3>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                setDesc("Name");
                setInfo(`${userData?.name.first} ${userData?.name.last}`);
              }}
            >
              {userData?.gender === "male" ? (
                <img src={man} alt="man" />
              ) : (
                <img src={woman} alt="woman" />
              )}
            </button>

            <button
              onClick={() => {
                setDesc("Email");
                setInfo(`${userData?.email}`);
              }}
            >
              <img src={mail} alt="" />
            </button>

            <button
              onClick={() => {
                setDesc("Age");
                setInfo(`${userData?.dob.age}`);
              }}
            >
              {userData?.gender === "male" ? (
                <img src={ageMan} alt="age man" />
              ) : (
                <img src={ageWoman} alt="age woman" />
              )}
            </button>

            <button
              onClick={() => {
                setDesc("Adress");
                setInfo(
                  `${userData?.location.city} / ${userData?.location.country} `
                );
              }}
            >
              <img src={map} alt="" />
            </button>

            <button
              onClick={() => {
                setDesc("Phone");
                setInfo(`${userData?.phone}`);
              }}
            >
              <img src={phone} alt="" />
            </button>

            <button
              onClick={() => {
                setDesc("Password");
                setInfo(`${userData?.login.password}`);
              }}
            >
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
