import * as React from "react";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Report";
import History from "@material-ui/icons/History";
import { Title, useTranslate } from "react-admin";

const MyError = ({ error, errorInfo, ...rest }) => {
  const translate = useTranslate();
  return (
    <div>
      <Title title="Error" />
      <h1>
        <ErrorIcon /> Something Went Wrong{" "}
      </h1>
      <div>A client error occurred and your request couldn't be completed.</div>
      {process.env.NODE_ENV !== "production" && (
        <details>
          <h2>{translate(error.toString())}</h2>
          {errorInfo.componentStack}
        </details>
      )}
      <div>
        <Button variant="contained" icon={<History />} onClick=" ">
          Back
        </Button>
      </div>
    </div>
  );
};

export default MyError;
