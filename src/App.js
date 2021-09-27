import "./App.css";
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

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
        <Widgets />
      </div>
    </div>
  );
}

export default App;
