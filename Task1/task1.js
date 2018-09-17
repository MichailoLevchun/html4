String.prototype.truncate = String.prototype.truncate ||
    function (maxlength) {
        return (this.length > maxlength) ? this.substr(0, maxlength) + '...' : this;
    };
    var str = 'рудщ ві віав';
 console.log(str.truncate(3));