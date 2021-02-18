import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

export const Users = () => (
  <Card>
    <Title title="Users" />
    <CardContent>My Users</CardContent>
  </Card>
);
