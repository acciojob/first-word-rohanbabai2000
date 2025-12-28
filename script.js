function firstWord(s) {
  // your code here
	if (s.length === 0){
		return s;
	}
	const stp=s.indexOf(" ");
	if(stp === -1){
		return s;
	}
	return s.slice(0, stp);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
