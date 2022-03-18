import { Home } from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Score } from './components/Score';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/score" element={<Score/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
