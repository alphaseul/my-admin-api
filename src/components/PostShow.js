import React from "react";
import { ShowGuesser, FieldGuesser } from "@api-platform/admin";

export const PostShow = (props) => (
  <ShowGuesser {...props}>
    <h1>Show Information</h1>
    <FieldGuesser source="id" />
    <FieldGuesser source="title" />
    <FieldGuesser source="body" />
    <FieldGuesser source="publishedAt" />
  </ShowGuesser>
);
