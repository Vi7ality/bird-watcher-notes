import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Observations from "./pages/Observations.tsx";
import AddObservationPage from "./pages/AddObservationPage.tsx";
import EditObservation from "./pages/EditObservation.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Observations />} />
        <Route path="/add" element={<AddObservationPage />} />
        <Route path="/edit/:id" element={<EditObservation />} />
      </Routes>
    </Router>
  );
}

export default App;
