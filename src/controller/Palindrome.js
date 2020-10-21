const Score = require('../data/Score');

const Palindrome = class PalindromeClass {

    getScores() {
        return Score.getScores(5, 'desc');
    }

    submitEntry(data) {
        const name = data.name;
        const word = data.word;
        const points = this._validatePalindrome(word);
        if (typeof points === 'undefined' || points < 0) {
            throw 'Invalid Palindrome';
        }
        return Score.setScore(name, points);
    }

    _validatePalindrome(string) {
        const original = string.toLowerCase().replace(/\s/g, '');
        const palindrome = original.split('').reverse().join('');
        if (original === palindrome) {
            return original.length;
        } else {
            return -1;
        }
    }

}

module.exports = new Palindrome;