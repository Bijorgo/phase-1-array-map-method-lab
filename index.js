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

const exceptionsCaps = ['OO', 'API', 'JSONP'];
//const exceptionsLow = [];
const exceptionsMix = ['StopPropagation', 'PreventDefault', 'NaN'];

const titleCased = () => {
  const newTutorials = tutorials.map(function(eachTitle) {
  // if there's a "?", split it off
    let hasQuestionMark = false;
    if (eachTitle.endsWith('?')) {
      hasQuestionMark = true;
      eachTitle = eachTitle.slice(0, -1);
    }
    //split each title string into word strings
    const words = eachTitle.split(' ');
    //map and look at each word, end function is to title case everything except exceptions
    const titleCasedStrings = words.map(word => {
      //look at exceptions array, set all characters to lowercase 
      const exceptionsMixLow = exceptionsMix.map(function(word){
      return word.toLowerCase();
    })
      //handle exceptions, if acronym, set to all caps, if mixed-case esception, find correct casing in array and replace, if nor an exception, uppercase first letter
      if (exceptionsCaps.includes(word.toUpperCase())){
        return word.toUpperCase();
      } else if (exceptionsMixLow.includes(word.toLowerCase())){
        return exceptionsMix.find(exc => exc.toLowerCase() === word.toLowerCase());
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()};
    });
    //put words back together in a string
    let result = titleCasedStrings.join(' ');
    //if string has a "?", re-attach it
    if (hasQuestionMark) {
      result += '?';
    }
    return result
  });
  //return new array
  return newTutorials
};





// GOAL:
// titleCased() returns an array
  //array contains titles with title-cased names
  //takes no arguments
  //uses global scope tutorials variable as data

// PLANNING:
  //use .map() on each tutorial
  //iterate through strings 
    //capitalize first letter of each word
      //.split('')
      //map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      //
  // split off ?
  // deal with exceptions