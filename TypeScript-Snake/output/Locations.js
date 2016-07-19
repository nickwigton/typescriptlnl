var Locations;
(function (Locations) {
    let data = {};
    function set(x, y) {
        data[`${x}:${y}`] = true;
    }
    Locations.set = set;
    function remove(x, y) {
        delete data[`${x}:${y}`];
    }
    Locations.remove = remove;
    function has(x, y) {
        return data[`${x}:${y}`] === true;
    }
    Locations.has = has;
})(Locations || (Locations = {}));
export default Locations;
