import React from 'react';
import './WordCountTable.css';

const wordCountTableBody = (props) => {
  return(
    <tbody>
    {
      props.array.map((entry, index) => (
      <tr key={index}>
        <td  key={index}
             className={(
               `${entry[1] === 1 ? "tbSmall" : ""}
                ${entry[1] === 2 ? "tbSmallMid" : ""}
                ${entry[1] === 3 ? "tbMid" : ""}
                ${entry[1] === 4 ? "tbMidLarge" : ""}
                ${entry[1]   > 4 ? "tbLarge" : ""}
                `
                )} >
          {entry[0]}
        </td>
        <td  key={entry[0]+index}>{entry[1]}</td>
      </tr>
    ))}
    </tbody>
  )
};

export default wordCountTableBody;
