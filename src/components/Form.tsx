import { Box, Button, TextField, Typography } from "@mui/material";
import { Observation } from "../models/observation";
import { ChangeEventHandler } from "react";

interface ObservationFormProps {
  observation: Partial<Observation>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSave(): void;
  mode: "save" | "edit";
}

const ObservationForm = ({ observation, handleChange, handleSave, mode }: ObservationFormProps) => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {mode === "save" ? "Add Observation" : "Edit Observation"}
      </Typography>

      {mode === "save" && (
        <>
          <TextField
            label="Place"
            name="location"
            value={observation.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bird"
            name="bird"
            value={observation.bird}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Save
          </Button>
        </>
      )}

      {mode === "edit" && (
        <>
          <TextField
            label="Observation date"
            type="date"
            name="date"
            value={observation.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Time"
            type="time"
            name="time"
            value={observation.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Place"
            name="location"
            value={observation.location}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bird"
            name="bird"
            value={observation.bird}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Edit Observation
          </Button>
        </>
      )}
    </Box>
  );
};

export default ObservationForm;
