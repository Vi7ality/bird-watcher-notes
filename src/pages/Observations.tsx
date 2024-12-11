import { useEffect, useState } from "react";
import { getAllObservations, saveObservations } from "../utils/localStorageManage";
import { Link } from "react-router-dom";
import { Box, Button, List, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import ConfirmDeleteDialog from "../components/DeleteDialog";
import { Observation } from "../models/observation";
import ObservationListItem from "../components/ListItem";

const Observations = () => {
  const [observations, setObservations] = useState(getAllObservations());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedObservation, setSelectedObservation] = useState<Observation | null>(null);

  const handleObsDelete = (id: string) => {
    const savedObservations = getAllObservations();
    const updatedObservations = savedObservations.filter((obs) => obs.id !== id);
    saveObservations(updatedObservations);
  };

  const handleOpenModal = (observation: Observation) => {
    setSelectedObservation(observation);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedObservation(null);
  };

  useEffect(() => {
    setObservations(getAllObservations());
  }, [selectedObservation]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: 4,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Observation List
      </Typography>

      {!observations.length && <Typography>No observations yet</Typography>}

      <List sx={{ width: "100%", maxWidth: "600px" }}>
        {observations.map((obs) => (
          <ObservationListItem obs={obs} handleOpenModal={handleOpenModal} />
        ))}
      </List>
      <Button
        component={Link}
        to="/add"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ marginTop: 2 }}
      >
        Add New Observation
      </Button>

      {selectedObservation && (
        <ConfirmDeleteDialog
          open={modalOpen}
          selectedObservation={selectedObservation}
          handleCloseModal={handleCloseModal}
          handleObsDelete={handleObsDelete}
        />
      )}
    </Box>
  );
};

export default Observations;
