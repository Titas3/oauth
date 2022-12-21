import {
  BrowserRouter ,
  Routes,
  Route,

} from "react-router-dom";
import LoginButton from "./login";
import LogoutButton from "./logout";
import './App.css';

function App() {
  return (
    <div className="App">
      Hello Ji
      <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="App">
                            <LoginButton />
                            <LogoutButton/>
                        </div>
                    }
                />
                <Route
                    path="/welcome"
                    element={
                        <div className="App">
                            <h1>Welcome! This is a Landing Page</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
