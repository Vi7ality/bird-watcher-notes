import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllObservations, saveObservations } from "../utils/localStorageManage";
import ObservationForm from "../components/ObservationForm";

const AddObservationPage = () => {
  const navigate = useNavigate();
  const [observation, setObservation] = useState({
    location: "",
    bird: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setObservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const newObservation = {
      id: Date.now().toString(),
      bird: observation.bird,
      location: observation.location,
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
      <ObservationForm
        mode="save"
        observation={observation}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    </div>
  );
};

export default AddObservationPage;
