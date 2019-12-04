import React from "react";
import { renderToString } from "react-dom/server";
import { createServerRenderer } from "aspnet-prerendering";

const HelloWorld = () => (
  <div>no really Like For reals 'm a react app booooii</div>
);

let app = renderToString(<HelloWorld />);

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {
    resolve({ html: app });
  });
});
