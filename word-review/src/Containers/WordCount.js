import React, {Component} from "react"
import WordCountTable from '../Components/WordCountMain/WordCountTable/WordCountTable'
import data from '../Data/reviews.json';

class WordCount extends Component {
  state = {
    data: null,
    joinedArrayState: null,
    stringArrayState: null,
    wordCountArrayState: null
  }

  componentDidMount() {
    this.setState({
      data: data.reviews
    }, () => {
        this.joinArray()
    })

  }

  joinArray = () => {
    let array = this.state.data
    let joinedArray =
    array.join(' ')
    this.setState({joinedArrayState: joinedArray
    }, () => {
      this.lowerCaseAndRemoveCharacters()
    })
  }

  lowerCaseAndRemoveCharacters = () => {
    let string = this.state.joinedArrayState.toLowerCase()

    let newStr = string.split('.').join('')
    let newStr2 = newStr.split(',').join('')
    let newStr3 = newStr2.split('!').join('')
    let newStr4 = newStr3.split('-').join('')
    let newStr5 = newStr4.split('  ').join(' ')
    let newStr6 = newStr5.replace(/[0-9]/g, "")
    let strArr = newStr6.split(" ")

    this.setState({
      stringArrayState: strArr
    }, () => { this.countWords() })
  }

  countWords = () => {
    let arr = this.state.stringArrayState
    let count = {}
    let word;
    // arr.forEach((word) => {
    //   count[word] = (count[word] || 0) + 1;
    // })
    for (let i=0; i<arr.length; i++) {
       word = arr[i]
      if (count[word] > 0) { count[word]++; }
      else                 { count[word] = 1; }
    }
    let array = Object.entries(count)
    this.setState({wordCountArrayState: array})
  }



  render() {
    let arrayOfKeyValues;
    if (this.state.wordCountArrayState !== null) {
      arrayOfKeyValues = this.state.wordCountArrayState
    } else {
      arrayOfKeyValues = []
    }


    return (
      <div>
        <WordCountTable array={arrayOfKeyValues}/>
      </div>
    )
  }
}

export default WordCount;
