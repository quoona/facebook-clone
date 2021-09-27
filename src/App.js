import "./App.css";
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Appbody */}
      <div className="app_body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
