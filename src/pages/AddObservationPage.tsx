import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllObservations, saveObservations } from "../utils/localStorageManage";
import ObservationForm from "../components/ObservationForm";
import { Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        mt: 4,
      }}
    >
      <ObservationForm
        mode="save"
        observation={observation}
        handleChange={handleChange}
        handleSave={handleSave}
      />
    </Box>
  );
};

export default AddObservationPage;
