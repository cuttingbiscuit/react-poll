import React, { useState } from "react";

const Option = props => {
  const [count, setCount] = useState(props.option.count);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          // props.setGlobalVotes(props.globalVotes + 1);
          props.addVote();
        }}
        className="option"
      >
        {props.option.title} ({count})
      </button>
    </div>
  );
};

export default Option;
