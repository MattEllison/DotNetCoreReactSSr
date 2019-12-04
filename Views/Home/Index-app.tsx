import React from "react";
import { renderToString } from "react-dom/server";
import { createServerRenderer } from "aspnet-prerendering";

const HelloWorld = props => {
  console.log(props);

  return (
    <div>
      no really Like For reals 'm a react app booooii Is Gold User
      {props.isGoldUser ? "IS" : "IS not"}
    </div>
  );
};

export default createServerRenderer(params => {
  console.log("params ar", params.data);
  return new Promise((resolve, reject) => {
    resolve({
      html: renderToString(<HelloWorld isGoldUser={params.data.isGoldUser} />)
    });
  });
});
