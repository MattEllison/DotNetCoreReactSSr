import React from "react";

import { render } from "./Shared";
import { Job } from "../../ClientApp/components/Job";
const App = props => {
  console.log(props);

  return (
    <div>
      <Job id={1} title="test"></Job>
      WHAT TEST no really Like For reals 'm a react app booooii Is Gold
      Userdfdfd
      {props.isGoldUser ? "IS" : "IS not"}
    </div>
  );
};

var result = render(<App />);
export { result as default };
