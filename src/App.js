import {
  Routes,
  Route} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Betting from "./Pages/Betting/Betting";
import Casino from "./Pages/Casino/Casino";
import Solution from "./Pages/Solutions/Solution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/betting" element={<Betting />} />
      <Route path="/casino" element={<Casino />} />
      <Route path="/solution" element={<Solution />} />
    </Routes>
  );
}
export default App;
