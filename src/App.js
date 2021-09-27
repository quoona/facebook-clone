import "./App.css";
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";

function App() {
  // const user = "quoonaa";
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          {/* Appbody */}
          <div className="app_body">
            {/* SideBar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widget */}
            <Widgets />
          </div>
        </>
      )}
      {/* Header */}
    </div>
  );
}

export default App;
