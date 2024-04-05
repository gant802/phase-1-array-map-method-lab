const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  const wordsInArray = tutorials.map(sentence => sentence.split(" "))
  const toUpperCase = wordsInArray.map(arr => upperCasedLetters(arr))
  const upperCasedLettersFinal = toUpperCase.map(arr => arr.join(' '))
  
  return upperCasedLettersFinal
}

titleCased(tutorials)



function upperCasedLetters(array) {
  const upperCasedLetters = array.map(word => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord
})
return upperCasedLetters
}