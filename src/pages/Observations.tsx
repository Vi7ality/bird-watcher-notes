import { useEffect, useState } from "react";
import { getAllObservations } from "../utils/localStorageManage";
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

const Observations = () => {
  const [observations, setObservations] = useState(getAllObservations());

  useEffect(() => {
    setObservations(getAllObservations());
  }, []);

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
              <IconButton component={Link} to={`/delete/${obs.id}`} aria-label="Delete observation">
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
    </Box>
  );
};

export default Observations;
