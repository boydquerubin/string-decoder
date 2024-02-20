function decoder(code) {
  let decodedString = "";
  let skip = 0;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (!isNaN(char)) {
      skip = parseInt(char);
    } else {
      decodedString += char;
      skip--;
      if (skip === 0) {
        skip = -1;
      }
    }
  }
  return decodedString;
}

console.log(decoder("0h2xce5ngbrdy"));
