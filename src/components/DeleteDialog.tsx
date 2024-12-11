import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Observation } from "../models/observation";

interface ConfirmDeleteDialogProps {
  open: boolean;
  selectedObservation: Observation;
  handleCloseModal(): void;
  handleObsDelete(id: string): void;
}

const ConfirmDeleteDialog = ({
  open,
  selectedObservation,
  handleCloseModal,
  handleObsDelete,
}: ConfirmDeleteDialogProps) => {
  const handleConfirmDelete = () => {
    handleObsDelete(selectedObservation.id);
    handleCloseModal();
  };
  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete the observation of{" "}
          <strong>{selectedObservation?.bird}</strong> at{" "}
          <strong>{selectedObservation?.location}</strong> on{" "}
          <strong>{selectedObservation?.date}</strong> at{" "}
          <strong>{selectedObservation?.time}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
