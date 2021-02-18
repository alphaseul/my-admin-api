import React from "react";
import { ListGuesser } from "@api-platform/admin";
import { TextField } from "react-admin";

export const AdminList = (props) => (
  <ListGuesser {...props}>
    <TextField source="id" />
    <TextField source="name" />
    <TextField source="email" />
    <TextField source="password" />
    <TextField source="createAt" />
  </ListGuesser>
);
