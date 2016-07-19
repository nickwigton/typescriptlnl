import Piece from './Piece';
import { SIZE } from './constants';
export default class Level {
    constructor(generatorFunction) {
        this.generatorFunction = generatorFunction;
        this.pieces = [];
    }
    translate(x, y) {
        return [Math.floor(x) * SIZE, Math.floor(y) * SIZE];
    }
    remove() {
        this.pieces.forEach((piece) => {
            piece.remove();
        });
    }
    line(x0, y0, x1, y1) {
        let dx = Math.abs(x1 - x0);
        let dy = Math.abs(y1 - y0);
        let sx = (x0 < x1) ? 1 : -1;
        let sy = (y0 < y1) ? 1 : -1;
        let err = dx - dy;
        while (true) {
            // Waiting for proposal
            // https://github.com/Microsoft/TypeScript/issues/5296
            // this.pieces.push(new Piece(...this.translate(x0, y0), 'wall'));
            let [tx0, ty0] = this.translate(x0, y0);
            this.pieces.push(new Piece(tx0, ty0, 'wall'));
            // break when line is done
            if (Math.abs(x0 - x1) <= 0.5 && Math.abs(y0 - y1) <= 0.5)
                break;
            let e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }
        }
    }
    render() {
        let cols = Math.floor(document.body.clientHeight / SIZE);
        let rows = Math.floor(document.body.clientWidth / SIZE);
        let level = this.generatorFunction(rows, cols);
        level.forEach((line) => {
            let [x0, y0] = line[0];
            let [x1, y1] = line[1];
            this.line(x0, y0, x1, y1);
        });
    }
}
