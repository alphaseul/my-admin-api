import React from "react";
import { Filter, ReferenceInput, SelectInput, SearchInput } from "react-admin";

export const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="title" alwaysOn />
    <ReferenceInput label="Title" source="title" allowEmpty>
      <SelectInput optionText="title" />
    </ReferenceInput>
  </Filter>
);
