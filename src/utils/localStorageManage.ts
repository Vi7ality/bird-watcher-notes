import { Observation } from "../models/observation";

export const getAllObservations = (): Observation[] => {
  const data = localStorage.getItem("observations");
  return data ? JSON.parse(data) : [];
};

export const getObservation = (id: string) => {
  const observations = JSON.parse(localStorage.getItem("observations") || "[]");
  return observations.find((obs: { id: string }) => obs.id === id);
};

export const saveObservations = (observations: Observation[]) => {
  localStorage.setItem("observations", JSON.stringify(observations));
};
