import React from 'react';


import WordCountTableHead from './WordCountTableItems/WordCountTableHead'
import WordCountTableBody from './WordCountTableItems/WordCountTableBody'

const wordCountTable = (props) => {



  return(
<div>
    <table>
      <WordCountTableHead />
      <WordCountTableBody array={props.array}/>
    </table>
</div>

  )
};

export default wordCountTable;
