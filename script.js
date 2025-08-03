function firstWord(s) {
  // your code here
  s = s.trim();

  // Find the index of first space
  const index = s.indexOf(" ");

  // If there's no space, return the whole string
  if (index === -1) return s;

  // Return substring up to the first space
  return s.substring(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
