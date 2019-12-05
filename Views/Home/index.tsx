import React from "react";

import { render } from "./Shared";

const HelloWorld = props => {
  console.log(props);

  return (
    <div>
      TEST no really Like For reals 'm a react app booooii Is Gold Userdfdfd
      {props.isGoldUser ? "IS" : "IS not"}
    </div>
  );
};

var result = render(<HelloWorld />);
export { result as default };
