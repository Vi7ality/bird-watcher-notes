import { Observation } from "../models/observation";

export const getObservations = (): Observation[] => {
  const data = localStorage.getItem("observations");
  return data ? JSON.parse(data) : [];
};

export const saveObservations = (observations: Observation[]) => {
  localStorage.setItem("observations", JSON.stringify(observations));
};
