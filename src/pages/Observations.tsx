import { useEffect, useState } from "react";
import { getAllObservations } from "../utils/localStorageManage";
import { Link } from "react-router-dom";

const Observations = () => {
  const [observations, setObservations] = useState(getAllObservations());

  useEffect(() => {
    setObservations(getAllObservations());
  }, []);

  return (
    <div>
      <h1>Observation list</h1>
      <ul>
        {observations.map((obs) => (
          <li key={obs.id}>
            {obs.date} {obs.time} — {obs.bird} в {obs.location}{" "}
            <Link to={`/edit/${obs.id}`}>Edit</Link> | <Link to={`/delete/${obs.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add new observation</Link>
    </div>
  );
};

export default Observations;
