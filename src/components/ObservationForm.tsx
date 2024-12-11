import { Button, TextField } from "@mui/material";
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
    <>
      {mode === "save" && (
        <>
          <TextField
            label="Place"
            name="location"
            value={observation.location}
            onChange={handleChange}
          />
          <TextField label="Bird" name="bird" value={observation.bird} onChange={handleChange} />
          <Button variant="contained" color="primary" onClick={handleSave}>
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
          />
          <TextField
            label="Time"
            type="time"
            name="time"
            value={observation.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Place"
            name="location"
            value={observation.location}
            onChange={handleChange}
          />
          <TextField label="Bird" name="bird" value={observation.bird} onChange={handleChange} />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Edit observation
          </Button>
        </>
      )}
    </>
  );
};

export default ObservationForm;
