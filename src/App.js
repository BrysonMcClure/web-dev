//import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="labs"
                   element={<Labs/>}
                   exact={true}/>
            <Route path="hello"
                   element={<HelloWorld/>}
                   exact={true}/>
            <Route path="tuiter"
                   element={<Tuiter/>}>
              <Route index
                     element={<HomeScreen/>}/>
              <Route path="explore"
                     element={<ExploreScreen/>}/>
              <Route path="notifications"
                     //element={<NotificationScreen/>}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;



