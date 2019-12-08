import React, { useState, useEffect } from "react";
import Option from "./Option";

const Poll = props => {
  const [votes, setVotes] = useState(props.data.votes);

  const addVote = () => {
    setVotes(votes + 1);
  };

  const [ip, setIP] = useState(null);

  // вынести в пользовательский хук useIP
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(result => {
        setIP(result.ip);
        console.log(1);
      });
  }, []);

  const options = props.data.options.map(d => {
    return <Option key={d.title} option={d} addVote={addVote} />;
  });

  return (
    <div className="card">
      <p className="title">{props.data.title}</p>
      <div>{options}</div>
      <div className="poll_footer">{votes} people voted</div>
    </div>
  );
};

export default Poll;

// ///////////////////////////////////////////////////
//                                                  //
//                                                  //
//                     ___                          //
//                    / | \                         //...
//                   |_ _ _|                        //...
//                   |     |                        //...
//                   | (  }|                        //...
//                   |  } (|                        //...
//           _____   | {   |  _____                 //...
//          /  .   \ |     | /     \                //...
//         /   .    \|     |/       \               //...
//        |  .  .   .     .   .   . |               //...
//         \    .     .     .  .   /                //...
//          \_____________________/                 //...
//                                                  //...
//                                                  //...
//                                                  //...
// ///////////////////////////////////////////////////...
//  .c...........t.......g......b.................u.i....
//  ....u...t.......in..............i...s....c........t..

//  _________________________________
// |      ____________________      |
// |     |                   |      |
// |     |       Хуйня       |      |
// |     |                   |      |
// |     |  + Да             |      |
// |     |                   |      |
// |     |  - Нет            |      |
// |     |                   |      |
// |     |___________________|      |
// |________________________________|
