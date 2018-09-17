String.prototype.deleteWord = function (searchTerm1, searchTerm2) {
    var str = this;
    var n1 = str.search(searchTerm1);
    var n2 = str.search(searchTerm2);
    while (str.search(searchTerm1) > -1 && str.search(searchTerm2) > -1) {
        n1 = str.search(searchTerm1);
        n2 = str.search(searchTerm2);
        str = str.substring(0, n2) + str.substring(n2 + searchTerm2.length, str.length);
        str = str.substring(0, n1) + str.substring(n1 + searchTerm1.length, str.length);

    }
    return str;
}
var string = "xxx yyy ttttt polytyka";
console.log(string.deleteWord('xxx ', 'polytyka')); 