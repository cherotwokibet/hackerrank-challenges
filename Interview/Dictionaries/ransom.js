
var magazine = 'two times three is not four';
var ransom = 'two times two is four';

function checkMagazine(magazine,note) {
    // Write your code here
    var map = { };
    var replicable = true;
    for ( var i of magazine ) {
        map[i] = (map[i] || 0) + 1;
    }
    for ( var i of note ) {
        map[i] = (map[i] || 0) - 1;
    }
    for ( var i in map ) {
        if ( map[i] < 0 ) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}

