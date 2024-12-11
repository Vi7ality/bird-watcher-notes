import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Observations from "./pages/ObservationsList";
// import AddObservation from "./pages/AddObservation";
// import EditObservation from "./pages/EditObservation";
// import ConfirmDelete from "./pages/ConfirmDelete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Observations />} />
        {/* <Route path="/add" element={<AddObservation />} />
        <Route path="/edit/:id" element={<EditObservation />} />
        <Route path="/delete/:id" element={<ConfirmDelete />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
