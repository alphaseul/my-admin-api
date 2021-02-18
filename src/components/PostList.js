import React from "react";
import { TextField } from "react-admin";
import { ListGuesser } from "@api-platform/admin";
import { PostFilter } from "./PostFilter";

export const PostList = (props) => (
  <ListGuesser {...props} filters={<PostFilter />}>
    <TextField source="id" />
    <TextField source="title" />
    <TextField source="body" />
  </ListGuesser>
);
