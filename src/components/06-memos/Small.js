import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("first");
  return <small>{value}</small>;
});
