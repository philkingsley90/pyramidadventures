import React from "react";
import PageStore from "./PageStore";
import PageLanding from "../components/PageLanding";

const Page = ({ path }) => {
  return (
    <>
      <PageLanding />
      {PageStore.update(path)}
    </>
  );
};

export default Page;
