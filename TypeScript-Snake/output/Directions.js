import { keys } from './constants';
var Directions;
(function (Directions) {
    let queue = [];
    let current = keys.RIGHT;
    function set(key) {
        queue.push(key);
    }
    Directions.set = set;
    function get() {
        return current;
    }
    Directions.get = get;
    function pop() {
        if (queue.length > 0) {
            current = queue.shift();
        }
        return get();
    }
    Directions.pop = pop;
    function flush() {
        queue = [];
        current = keys.RIGHT;
    }
    Directions.flush = flush;
    function peek() {
        return queue.length > 0 ? queue[queue.length - 1] : current;
    }
    Directions.peek = peek;
})(Directions || (Directions = {}));
export default Directions;
