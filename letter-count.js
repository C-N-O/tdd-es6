export const getLetterCount = (string) => {
  const lettersArray = string.split(''); //converts the string into an array
  let letterCount = {};

  lettersArray.forEach((letter) => {
    // if (!letterCount[letter]) {
    //   letterCount[letter] = 1;
    // } else {
    //   letterCount[letter] += 1;
    // }

    !letterCount[letter]
      ? (letterCount[letter] = 1)
      : (letterCount[letter] += 1);
  });

  return letterCount;
};
