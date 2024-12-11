import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Observation } from "../models/observation";
import { Link } from "react-router-dom";

interface ObservationListItemProps {
  handleOpenModal(observation: Observation): void;
  obs: Observation;
}

const ObservationListItem = ({ obs, handleOpenModal }: ObservationListItemProps) => {
  return (
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
  );
};

export default ObservationListItem;
