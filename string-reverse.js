function reverse(str) {
	// string initialization in order not to have a value of undefined
	var reversedStr = "";

	for (var i=0, strLen = str.length; strLen >= i ; strLen--) {
		reversedStr += str.charAt(strLen);
	}
	return reversedStr;
}
