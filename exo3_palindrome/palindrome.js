// Copyright Sherry L. Umlah - sherry@sherryumlah.com
// palindrome script checks to see if the word entered into <input type="text" id="input">
// is a palindrome or not - executed by clicking the <a href="#" id="check"> link	
var word = document.querySelector('#input');
var inputBtn = document.querySelector('#check');
var feedback = document.querySelector('#feedback');

// function to check if feedback child textNode already exists
var checkfb = function(fb_text) {
    if (feedback.hasChildNodes()) {
        // child exists, so replace it with new feedback text
        feedback.replaceChild(fb_text, feedback.childNodes[0]);
    } else {
        // child doesn't exist so append feedback text
        feedback.appendChild(fb_text);
    } // end if
}; // end checkfb fn

var checkWord = function() {
    var original = word.value.split(''); // array of characters
    var toBeReversed = word.value.split('');
    var reversed = toBeReversed.reverse(); // original word reversed
    for (var letter = 0; letter < original.length; letter++) {
        // compare original to reverse letters
        var fb;
        var fb_text;
        if (reversed[letter] != original[letter]) {
            // set feedback text and css style and add to page
            fb = word.value + ' is not a palindrome!';
            fb_text = document.createTextNode(fb);
            feedback.setAttribute('class', 'notpalindrome');
            checkfb(fb_text, fb); // checks for existing feedback
            break; // no match, not a palindrome end check
        } else if (letter == original.length - 1) {
            // set feedback text and css style and add to page
            fb = word.value + ' is a palindrome!';
            fb_text = document.createTextNode(fb);
            feedback.setAttribute('class', 'palindrome');
            checkfb(fb_text); // checks for existing feedback
        } //end if comparison
    } // end for loop
}; // end checkWord fn

// event listener for onClick of Check button
// gets the input word, splits it into an array of characters,
// reverses the word, and compares the original to the reverse
// if letters don't match, we don't have a palindrome

inputBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent submit behavior of link/button
    checkWord();
});

//event listener for enter key
var checkForEnter = function(e) {
    if (e.keyCode == 13) { // if enter key is pressed
        e.preventDefault();
        checkWord();
    }
}