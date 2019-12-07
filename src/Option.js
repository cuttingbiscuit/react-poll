import React, { useState } from "react";

const Option = props => {
  const [count, setCount] = useState(props.option.count);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        props.setGlobalVotes(props.globalVotes + 1);
      }}
      className="option"
    >
      {props.option.title} ({count})
    </button>
  );
};

export default Option;
