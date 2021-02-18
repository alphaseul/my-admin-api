import React from "react";
import { EditGuesser } from "@api-platform/admin";
import { TextInput } from "react-admin";

export const EntrepriseEdit = (props) => (
  <EditGuesser {...props}>
    <TextInput source="raisonSociale" />
    <TextInput disable source="numeroSiret" />
    <TextInput source="email" />
    <TextInput source="telephone" />
  </EditGuesser>
);
