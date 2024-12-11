import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllObservations, getObservation, saveObservations } from "../utils/localStorageManage";
import { Observation } from "../models/observation";
import { Box, Button, Typography } from "@mui/material";
import ObservationForm from "../components/ObservationForm";

const EditObservation = () => {
  const navigate = useNavigate();
  const [observation, setObservation] = useState({
    date: "",
    time: "",
    location: "",
    bird: "",
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const observation = getObservation(id);
      setObservation(observation);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setObservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const savedObservations = getAllObservations();
    const updatedObservations = savedObservations.map((obs: Observation) =>
      obs.id === id ? { ...obs, ...observation } : obs
    );
    saveObservations(updatedObservations);
    navigate("/");
  };

  return (
    <>
      {observation ? (
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
          <h1>Edit observation</h1>
          <ObservationForm
            mode="edit"
            observation={observation}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <Typography variant="h6" color="error">
            Observation not found
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go back to observations
          </Button>
        </Box>
      )}
    </>
  );
};

export default EditObservation;
