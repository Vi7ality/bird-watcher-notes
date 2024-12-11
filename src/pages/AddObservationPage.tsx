import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllObservations, saveObservations } from "../utils/localStorageManage";

const AddObservationPage = () => {
  const navigate = useNavigate();
  const [bird, setBird] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    const newObservation = {
      id: Date.now().toString(),
      bird,
      location,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const updatedObservations = [newObservation, ...getAllObservations()];
    saveObservations(updatedObservations);
    navigate("/");
  };

  return (
    <div>
      <h1>Add new observation</h1>
      <input
        type="text"
        placeholder="Птица"
        value={bird}
        onChange={(e) => setBird(e.target.value)}
      />
      <input
        type="text"
        placeholder="Место"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddObservationPage;
