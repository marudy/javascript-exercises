function isVowel(char) {

	// use of regex literal for better perfomance since the regex won't be changing
	var re = /[aeiouyAEIOUY]/;

	if (char.search(re) > -1) {
		return true;
	} else {
		return false;
	}
}
