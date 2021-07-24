function accum(s) {
	// your code
  const newStringArray = [];
  const stringArray = s.split("");
  for (let i = 0; i < s.length; i += 1){
      for (let j = 0; j < i + 1; j += 1){
          console.log(i, "- i; j-", j);
     if (j === 0){
        newStringArray.push(stringArray[i].toUpperCase());
      } else {
        newStringArray[i] += stringArray[i].toLowerCase();
      }
    }
  }
    return newStringArray.join("-");
}
console.log("Before function is called");
alert("A");
console.log(accum("abcd"));