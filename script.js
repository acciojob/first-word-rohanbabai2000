function firstWord(s) {
  // your code here
	const p=s.trim();
	if (p.length === 0){
		return s;
	}
	const stp=p.indexOf(" ");
	if(stp === -1){
		return s;
	}
	return p.slice(0, stp);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
