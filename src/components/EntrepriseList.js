import React from "react";
import { ListGuesser } from "@api-platform/admin";
import { TextField } from "react-admin";

export const EntrepriseList = (props) => (
  <ListGuesser {...props}>
    <TextField source="id" />
    <TextField source="raisonSociale" />
    <TextField source="numeroSiret" />
    <TextField source="email" />
    <TextField source="telephone" />
  </ListGuesser>
);
