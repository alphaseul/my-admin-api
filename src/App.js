import React from "react";
import firebase from "firebase";
import config from "./config";

import { FirebaseAuthProvider } from "react-admin-firebase";

import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import ResourceGuesser from "@api-platform/admin/lib/ResourceGuesser";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";

import {
  Dashboard,
  PostList,
  PostShow,
  EntrepriseEdit,
  EntrepriseList,
} from "./components";

import MyLayout from "./Layout";
import Theme from "./Theme";

import StorefrontIcon from "@material-ui/icons/Storefront";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import PeopleIcon from "@material-ui/icons/People";
import CustomRoutes from "./CustomRoutes";
import LoginPage from "./LoginPage";

const entrypoint = "https://localhost:8000/api";
firebase.initializeApp(config);

const authProvider = FirebaseAuthProvider(config);

const dataProvider = hydraDataProvider(
  entrypoint,
  fetchHydra,
  parseHydraDocumentation,
  true // useEmbedded parameter
);

function App() {
  return (
    <HydraAdmin
      theme={Theme}
      loginPage={LoginPage}
      layout={MyLayout}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      entrypoint={entrypoint}
      authProvider={authProvider}
      customRoutes={CustomRoutes}
    >
      <ResourceGuesser name="users" icon={PeopleIcon} />
      <ResourceGuesser
        name="posts"
        list={PostList}
        show={PostShow}
        icon={SpeakerNotesIcon}
      />
      <ResourceGuesser
        name="entreprises"
        list={EntrepriseList}
        edit={EntrepriseEdit}
        icon={StorefrontIcon}
      />
    </HydraAdmin>
  );
}

export default App;
