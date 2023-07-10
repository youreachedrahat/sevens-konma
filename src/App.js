import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


import Homepage from "./Pages/Homepage/Homepage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Betting from "./Pages/Betting/Betting";
import Casino from "./Pages/Casino/Casino";
import Solution from "./Pages/Solutions/Solution";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <>

      <Header />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/betting" element={<Betting />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/solution" element={<Solution />} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
