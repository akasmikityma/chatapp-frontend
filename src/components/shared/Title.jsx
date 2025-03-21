import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Adda-Goppo",
  description = "this is the Chat App called Adda-Goppo",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
