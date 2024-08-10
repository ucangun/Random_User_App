function App() {
  return (
    <div>
      <header>
        <h1>Random User App</h1>
      </header>
      <main>
        <div className="card">
          <img src="" alt="" />
          <div className="user">
            <h4 className="user_desc">User Desc</h4>
            <h3 className="user_info">Info</h3>
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
