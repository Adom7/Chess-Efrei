"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chessboard = exports.symbolPieces = exports.POSITION = exports.COLOR = exports.TYPE_OF_PIECES = void 0;
var TYPE_OF_PIECES;
(function (TYPE_OF_PIECES) {
    TYPE_OF_PIECES["KING"] = "King";
    TYPE_OF_PIECES["QUEEN"] = "Queen";
    TYPE_OF_PIECES["ROOK"] = "Rook";
    TYPE_OF_PIECES["BISHOP"] = "Bishop";
    TYPE_OF_PIECES["KNIGHT"] = "Knight";
    TYPE_OF_PIECES["PAWN"] = "Pawn";
})(TYPE_OF_PIECES || (exports.TYPE_OF_PIECES = TYPE_OF_PIECES = {}));
;
var COLOR;
(function (COLOR) {
    COLOR["BLACK"] = "Black";
    COLOR["WHITE"] = "White";
})(COLOR || (exports.COLOR = COLOR = {}));
var POSITION;
(function (POSITION) {
    POSITION["A1"] = "A1";
    POSITION["A2"] = "A2";
    POSITION["A3"] = "A3";
    POSITION["A4"] = "A4";
    POSITION["A5"] = "A5";
    POSITION["A6"] = "A6";
    POSITION["A7"] = "A7";
    POSITION["A8"] = "A8";
    POSITION["B1"] = "B1";
    POSITION["B2"] = "B2";
    POSITION["B3"] = "B3";
    POSITION["B4"] = "B4";
    POSITION["B5"] = "B5";
    POSITION["B6"] = "B6";
    POSITION["B7"] = "B7";
    POSITION["B8"] = "B8";
    POSITION["C1"] = "C1";
    POSITION["C2"] = "C2";
    POSITION["C3"] = "C3";
    POSITION["C4"] = "C4";
    POSITION["C5"] = "C5";
    POSITION["C6"] = "C6";
    POSITION["C7"] = "C7";
    POSITION["C8"] = "C8";
    POSITION["D1"] = "D1";
    POSITION["D2"] = "D2";
    POSITION["D3"] = "D3";
    POSITION["D4"] = "D4";
    POSITION["D5"] = "D5";
    POSITION["D6"] = "D6";
    POSITION["D7"] = "D7";
    POSITION["D8"] = "D8";
    POSITION["E1"] = "E1";
    POSITION["E2"] = "E2";
    POSITION["E3"] = "E3";
    POSITION["E4"] = "E4";
    POSITION["E5"] = "E5";
    POSITION["E6"] = "E6";
    POSITION["E7"] = "E7";
    POSITION["E8"] = "E8";
    POSITION["F1"] = "F1";
    POSITION["F2"] = "F2";
    POSITION["F3"] = "F3";
    POSITION["F4"] = "F4";
    POSITION["F5"] = "F5";
    POSITION["F6"] = "F6";
    POSITION["F7"] = "F7";
    POSITION["F8"] = "F8";
    POSITION["G1"] = "G1";
    POSITION["G2"] = "G2";
    POSITION["G3"] = "G3";
    POSITION["G4"] = "G4";
    POSITION["G5"] = "G5";
    POSITION["G6"] = "G6";
    POSITION["G7"] = "G7";
    POSITION["G8"] = "G8";
    POSITION["H1"] = "H1";
    POSITION["H2"] = "H2";
    POSITION["H3"] = "H3";
    POSITION["H4"] = "H4";
    POSITION["H5"] = "H5";
    POSITION["H6"] = "H6";
    POSITION["H7"] = "H7";
    POSITION["H8"] = "H8";
})(POSITION || (exports.POSITION = POSITION = {}));
exports.symbolPieces = {
    Pawn: {
        Black: "♟️",
        White: "♙"
    },
    Bishop: {
        Black: "♝",
        White: "♗"
    },
    King: {
        Black: "♚",
        White: "♔"
    },
    Queen: {
        Black: "♛",
        White: "♕"
    },
    Rook: {
        Black: "♜",
        White: "♖"
    },
    Knight: {
        Black: "♞",
        White: "♘"
    }
};
function getPieceSymbol(type, color) {
    return exports.symbolPieces[type][color];
}
var Piece = /** @class */ (function () {
    function Piece(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position;
    }
    Piece.prototype.moveTo = function (newPosition) {
        this.position = newPosition;
        console.log("".concat(this.type, " ").concat(this.color, " mooved to ").concat(newPosition));
    };
    return Piece;
}());
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, position) {
        return _super.call(this, TYPE_OF_PIECES.PAWN, color, position) || this;
    }
    return Pawn;
}(Piece));
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, position) {
        return _super.call(this, TYPE_OF_PIECES.BISHOP, color, position) || this;
    }
    return Bishop;
}(Piece));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color, position) {
        return _super.call(this, TYPE_OF_PIECES.KING, color, position) || this;
    }
    return King;
}(Piece));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color, position) {
        return _super.call(this, TYPE_OF_PIECES.QUEEN, color, position) || this;
    }
    return Queen;
}(Piece));
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook(color, position) {
        return _super.call(this, TYPE_OF_PIECES.ROOK, color, position) || this;
    }
    return Rook;
}(Piece));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, position) {
        return _super.call(this, TYPE_OF_PIECES.KNIGHT, color, position) || this;
    }
    return Knight;
}(Piece));
var Square = /** @class */ (function () {
    function Square(position) {
        this.piece = null;
        this.position = position;
    }
    Square.prototype.isEmpty = function () {
        return this.piece === null;
    };
    Square.prototype.placePiece = function (piece) {
        this.piece = piece;
    };
    Square.prototype.removePiece = function () {
        var removedPiece = this.piece;
        this.piece = null;
        return removedPiece;
    };
    Square.prototype.getPosition = function () {
        return this.position;
    };
    Square.prototype.getPiece = function () {
        return this.piece;
    };
    return Square;
}());
var Chessboard = /** @class */ (function () {
    function Chessboard() {
        this.squares = new Map();
        this.init();
    }
    Chessboard.prototype.init = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        // Initialize squares with positions as keys
        Object.values(POSITION).forEach(function (position) {
            _this.squares.set(position, new Square(position));
        });
        // Place pieces for White
        (_a = this.squares.get(POSITION.A1)) === null || _a === void 0 ? void 0 : _a.placePiece(new Rook(COLOR.WHITE, POSITION.A1));
        (_b = this.squares.get(POSITION.B1)) === null || _b === void 0 ? void 0 : _b.placePiece(new Knight(COLOR.WHITE, POSITION.B1));
        (_c = this.squares.get(POSITION.C1)) === null || _c === void 0 ? void 0 : _c.placePiece(new Bishop(COLOR.WHITE, POSITION.C1));
        (_d = this.squares.get(POSITION.D1)) === null || _d === void 0 ? void 0 : _d.placePiece(new Queen(COLOR.WHITE, POSITION.D1));
        (_e = this.squares.get(POSITION.E1)) === null || _e === void 0 ? void 0 : _e.placePiece(new King(COLOR.WHITE, POSITION.E1));
        (_f = this.squares.get(POSITION.F1)) === null || _f === void 0 ? void 0 : _f.placePiece(new Bishop(COLOR.WHITE, POSITION.F1));
        (_g = this.squares.get(POSITION.G1)) === null || _g === void 0 ? void 0 : _g.placePiece(new Knight(COLOR.WHITE, POSITION.G1));
        (_h = this.squares.get(POSITION.H1)) === null || _h === void 0 ? void 0 : _h.placePiece(new Rook(COLOR.WHITE, POSITION.H1));
        (_j = this.squares.get(POSITION.A8)) === null || _j === void 0 ? void 0 : _j.placePiece(new Rook(COLOR.BLACK, POSITION.A8));
        (_k = this.squares.get(POSITION.B8)) === null || _k === void 0 ? void 0 : _k.placePiece(new Knight(COLOR.BLACK, POSITION.B8));
        (_l = this.squares.get(POSITION.C8)) === null || _l === void 0 ? void 0 : _l.placePiece(new Bishop(COLOR.BLACK, POSITION.C8));
        (_m = this.squares.get(POSITION.D8)) === null || _m === void 0 ? void 0 : _m.placePiece(new Queen(COLOR.BLACK, POSITION.D8));
        (_o = this.squares.get(POSITION.E8)) === null || _o === void 0 ? void 0 : _o.placePiece(new King(COLOR.BLACK, POSITION.E8));
        (_p = this.squares.get(POSITION.F8)) === null || _p === void 0 ? void 0 : _p.placePiece(new Bishop(COLOR.BLACK, POSITION.F8));
        (_q = this.squares.get(POSITION.G8)) === null || _q === void 0 ? void 0 : _q.placePiece(new Knight(COLOR.BLACK, POSITION.G8));
        (_r = this.squares.get(POSITION.H8)) === null || _r === void 0 ? void 0 : _r.placePiece(new Rook(COLOR.BLACK, POSITION.H8));
        // Pawns
        (_s = this.squares.get(POSITION.A2)) === null || _s === void 0 ? void 0 : _s.placePiece(new Pawn(COLOR.BLACK, POSITION.A2));
        (_t = this.squares.get(POSITION.B2)) === null || _t === void 0 ? void 0 : _t.placePiece(new Pawn(COLOR.BLACK, POSITION.B2));
        (_u = this.squares.get(POSITION.C2)) === null || _u === void 0 ? void 0 : _u.placePiece(new Pawn(COLOR.BLACK, POSITION.C2));
        (_v = this.squares.get(POSITION.D2)) === null || _v === void 0 ? void 0 : _v.placePiece(new Pawn(COLOR.BLACK, POSITION.D2));
        (_w = this.squares.get(POSITION.E2)) === null || _w === void 0 ? void 0 : _w.placePiece(new Pawn(COLOR.BLACK, POSITION.E2));
        (_x = this.squares.get(POSITION.F2)) === null || _x === void 0 ? void 0 : _x.placePiece(new Pawn(COLOR.BLACK, POSITION.F2));
        (_y = this.squares.get(POSITION.G2)) === null || _y === void 0 ? void 0 : _y.placePiece(new Pawn(COLOR.BLACK, POSITION.G2));
        (_z = this.squares.get(POSITION.H2)) === null || _z === void 0 ? void 0 : _z.placePiece(new Pawn(COLOR.BLACK, POSITION.H2));
        (_0 = this.squares.get(POSITION.A7)) === null || _0 === void 0 ? void 0 : _0.placePiece(new Pawn(COLOR.WHITE, POSITION.A7));
        (_1 = this.squares.get(POSITION.B7)) === null || _1 === void 0 ? void 0 : _1.placePiece(new Pawn(COLOR.WHITE, POSITION.B7));
        (_2 = this.squares.get(POSITION.C7)) === null || _2 === void 0 ? void 0 : _2.placePiece(new Pawn(COLOR.WHITE, POSITION.C7));
        (_3 = this.squares.get(POSITION.D7)) === null || _3 === void 0 ? void 0 : _3.placePiece(new Pawn(COLOR.WHITE, POSITION.D7));
        (_4 = this.squares.get(POSITION.E7)) === null || _4 === void 0 ? void 0 : _4.placePiece(new Pawn(COLOR.WHITE, POSITION.E7));
        (_5 = this.squares.get(POSITION.F7)) === null || _5 === void 0 ? void 0 : _5.placePiece(new Pawn(COLOR.WHITE, POSITION.F7));
        (_6 = this.squares.get(POSITION.G7)) === null || _6 === void 0 ? void 0 : _6.placePiece(new Pawn(COLOR.WHITE, POSITION.G7));
        (_7 = this.squares.get(POSITION.H7)) === null || _7 === void 0 ? void 0 : _7.placePiece(new Pawn(COLOR.WHITE, POSITION.H7));
    };
    Chessboard.prototype.display = function () {
        var _this = this;
        var boardStr = '';
        var positions = Object.values(POSITION); // Ensure this is in the desired order
        positions.forEach(function (position, index) {
            if (index % 8 === 0 && index !== 0)
                boardStr += '\n';
            var square = _this.squares.get(position);
            var piece = square === null || square === void 0 ? void 0 : square.getPiece();
            var symbol = piece ? getPieceSymbol(piece.type, piece.color) : '·';
            boardStr += symbol + ' ';
        });
        console.log(boardStr);
    };
    return Chessboard;
}());
exports.Chessboard = Chessboard;
var plateau = new Chessboard();
plateau.init();
plateau.display();
