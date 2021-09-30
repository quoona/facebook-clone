import "./App.css";
import Header from "./Header";
import "./Header.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const user = "quoonaa";
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />

            <Feed />

            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
