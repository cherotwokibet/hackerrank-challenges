

function crosswordPuzzle(crossword, hints) {
    hints = hints.split(';');
  
    let options = [crossword];
    while (hints.length > 0) {
      let hint = hints.pop();
      let subOptions = [];
      for (let i = 0; i < options.length; i++) {
        subOptions = subOptions.concat(tryOneHint(options[i], hint));
      }
      options = subOptions;
    }
  
    return options[0];
}
  
function tryOneHint(crossword, hint) {
    let words = extractWords(crossword).filter(word => matchHintToWord(hint, word));
    let options = []; //return an empty array for dead leaf
    if (words.length > 0) {
        options = words.map(word => fillWordWithHint(crossword, word, hint));
    }
    return options;
}

function fillWordWithHint(crossword, word, hint) {
    //word: {value, complete, row, post, horizontal}
    let filled = [...crossword];
    if (word.horizontal) {
        let row = filled[word.row].split('');
        for (let i = word.post; i < word.post + hint.length; i++) {
            row[i] = hint[i - word.post];
        }
        filled[word.row] = row.join('');
    } else { //vertical word
        let rows = filled.map(s => s.split(''));
        for (let i = word.row; i < word.row + hint.length; i++) {
            rows[i][word.post] = hint[i - word.row];
        }
        filled = rows.map(arr => arr.join(''));
    }
    return filled;
}

//word must be: (0) not complete, (1) of the same length, (2) match the existing characters
function matchHintToWord(hint, word) {
    if (word.complete || word.value.length !== hint.length) return false;
    for (let i = 0; i < hint.length; i++) {
        if (word.value[i] !== '-' && word.value[i] !== hint[i]) {
            return false;
        }
    }
    return true;
}
  
function extractWords(crossword) {
    //horizontal words
    let words = extractHorizontalWords(crossword).map(w => {
        return { ...w, horizontal: true };
    });

    //vertical crosswords
    let transposed = [];
    for (let i = 0; i < crossword[0].length; i++) {
        let row = '';
        for (let j = 0; j < crossword.length; j++) {
            row = row + crossword[j][i];
        }
        transposed.push(row);
    }

    let verticalWords = extractHorizontalWords(transposed).map(w => {
        return {
            value: w.value,
            row: w.post,
            post: w.row,
            horizontal: false
        }
    });

    words = words.concat(verticalWords).map(word => {
        return {
            ...word,
            complete: word.value.split('').filter(letter => letter == '-').length === 0
        };
    });

    return words;
}
  
function extractHorizontalWords(crossword) {
    let words = [];
    let rows = crossword.length;
    for (let i = 0; i < rows; i++) {
        let row = crossword[i];
        let current = '';
        let start = 0; //mark the starting position of a word
        for (let j = 0; j < row.length; j++) {
            if (row[j] === '+' || row[j] === 'X') {
                if (current === '') {
                    continue;
                } else { // mark the ending of a word
                    words.push({ value: current, row: i, post: start});
                    current = '';
                }
            } else {
                if (current === '') start = j;
                    current = current + row[j];
                if (j === row.length - 1) { //word stays at the end of a row
                    words.push({ value: current, row: i, post: start});
                }
            }
        }
    }

    return words.filter(w => w.value.length > 1);

}


