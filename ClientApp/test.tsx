import * as React from "react";
import { renderToString } from "react-dom/server";

const Test = () => <div>What</div>;

let app = renderToString(<Test />);
console.log(app);
