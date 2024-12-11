import { useEffect, useState } from "react";
import { getAllObservations, saveObservations } from "../utils/localStorageManage";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";
import { Observation } from "../models/observation";

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
  }, [observations]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Observation List
      </Typography>
      <List>
        {observations.map((obs) => (
          <ListItem
            key={obs.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "8px",
              padding: "16px",
            }}
          >
            <ListItemText
              primary={`${obs.date} ${obs.time} — ${obs.bird}`}
              secondary={`Location: ${obs.location}`}
            />
            <ListItemSecondaryAction>
              <IconButton component={Link} to={`/edit/${obs.id}`} aria-label="Edit observation">
                <EditIcon color="primary" />
              </IconButton>
              <IconButton onClick={() => handleOpenModal(obs)} aria-label="Delete observation">
                <DeleteIcon color="error" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
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
