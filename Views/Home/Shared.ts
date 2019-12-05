import { createServerRenderer } from "aspnet-prerendering";
import { renderToString } from "react-dom/server";

let render = component => {
  const html = renderToString(component);
  return createServerRenderer(params => {
    return new Promise((resolve, reject) => {
      resolve({
        html
      });
    });
  });
};

export { render };
