export enum TYPE_OF_PIECES {
    KING = "King",
    QUEEN = "Queen",
    ROOK = "Rook",
    BISHOP = "Bishop",
    KNIGHT = "Knight",
    PAWN = "Pawn",
};

export enum COLOR {
    BLACK = "Black",
    WHITE = 'White'
}


export enum POSITION {
    A1 = "A1", A2 = "A2", A3 = "A3", A4 = "A4", A5 = "A5", A6 = "A6", A7 = "A7", A8 = "A8",
    B1 = "B1", B2 = "B2", B3 = "B3", B4 = "B4", B5 = "B5", B6 = "B6", B7 = "B7", B8 = "B8",
    C1 = "C1", C2 = "C2", C3 = "C3", C4 = "C4", C5 = "C5", C6 = "C6", C7 = "C7", C8 = "C8",
    D1 = "D1", D2 = "D2", D3 = "D3", D4 = "D4", D5 = "D5", D6 = "D6", D7 = "D7", D8 = "D8",
    E1 = "E1", E2 = "E2", E3 = "E3", E4 = "E4", E5 = "E5", E6 = "E6", E7 = "E7", E8 = "E8",
    F1 = "F1", F2 = "F2", F3 = "F3", F4 = "F4", F5 = "F5", F6 = "F6", F7 = "F7", F8 = "F8",
    G1 = "G1", G2 = "G2", G3 = "G3", G4 = "G4", G5 = "G5", G6 = "G6", G7 = "G7", G8 = "G8",
    H1 = "H1", H2 = "H2", H3 = "H3", H4 = "H4", H5 = "H5", H6 = "H6", H7 = "H7", H8 = "H8",
}


export const symbolPieces: { [key: string]: { [key: string]: string } } = {
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

function getPieceSymbol(type: TYPE_OF_PIECES, color: COLOR): string {
    return symbolPieces[type][color];
}


class Piece  {

    type  : TYPE_OF_PIECES;
    color : COLOR;
    position : POSITION;

    constructor(type : TYPE_OF_PIECES, color : COLOR, position : POSITION) {
        this.type = type;
        this.color = color;
        this.position = position;
    }

    moveTo(newPosition : POSITION) {
        this.position = newPosition;
        console.log(`${this.type} ${this.color} mooved to ${newPosition}`);
    }
}

class Pawn extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super( TYPE_OF_PIECES.PAWN , color, position);
    }
}

class Bishop extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super(TYPE_OF_PIECES.BISHOP, color, position);
    }
}

class King extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super(TYPE_OF_PIECES.KING, color, position);
    }
}

class Queen extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super(TYPE_OF_PIECES.QUEEN, color, position);
    }
}

class Rook extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super(TYPE_OF_PIECES.ROOK, color, position);
    }
}

class Knight extends Piece {
    constructor(color : COLOR, position : POSITION) {
        super(TYPE_OF_PIECES.KNIGHT, color, position);
    }
}

class Square {
    private position: POSITION;
    private piece: Piece | null = null;

    constructor(position: POSITION) {
        this.position = position;
    }

    isEmpty(): boolean {
        return this.piece === null;
    }

    placePiece(piece: Piece): void {
        this.piece = piece;
    }

    removePiece(): Piece | null {
        const removedPiece = this.piece;
        this.piece = null;
        return removedPiece;
    }

    getPosition(): POSITION {
        return this.position;
    }

    getPiece(): Piece | null {
        return this.piece;
    }
}


export class Chessboard {
    squares: Map<POSITION, Square> = new Map();

    constructor() {
        this.init();
    }

    init(): void {
        // Initialize squares with positions as keys
        Object.values(POSITION).forEach(position => {
            this.squares.set(position, new Square(position));
        });

        // Place pieces for White
        this.squares.get(POSITION.A1)?.placePiece(new Rook(COLOR.WHITE , POSITION.A1));
        this.squares.get(POSITION.B1)?.placePiece(new Knight(COLOR.WHITE , POSITION.B1));
        this.squares.get(POSITION.C1)?.placePiece(new Bishop(COLOR.WHITE , POSITION.C1));
        this.squares.get(POSITION.D1)?.placePiece(new Queen(COLOR.WHITE, POSITION.D1));
        this.squares.get(POSITION.E1)?.placePiece(new King(COLOR.WHITE , POSITION.E1));
        this.squares.get(POSITION.F1)?.placePiece(new Bishop(COLOR.WHITE , POSITION.F1));
        this.squares.get(POSITION.G1)?.placePiece(new Knight(COLOR.WHITE, POSITION.G1));
        this.squares.get(POSITION.H1)?.placePiece(new Rook(COLOR.WHITE , POSITION.H1));

        

        this.squares.get(POSITION.A8)?.placePiece(new Rook(COLOR.BLACK , POSITION.A8));
        this.squares.get(POSITION.B8)?.placePiece(new Knight(COLOR.BLACK , POSITION.B8));
        this.squares.get(POSITION.C8)?.placePiece(new Bishop(COLOR.BLACK , POSITION.C8));
        this.squares.get(POSITION.D8)?.placePiece(new Queen(COLOR.BLACK, POSITION.D8));
        this.squares.get(POSITION.E8)?.placePiece(new King(COLOR.BLACK , POSITION.E8));
        this.squares.get(POSITION.F8)?.placePiece(new Bishop(COLOR.BLACK , POSITION.F8));
        this.squares.get(POSITION.G8)?.placePiece(new Knight(COLOR.BLACK, POSITION.G8));
        this.squares.get(POSITION.H8)?.placePiece(new Rook(COLOR.BLACK , POSITION.H8));

        // Pawns
        this.squares.get(POSITION.A2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.A2))
        this.squares.get(POSITION.B2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.B2))
        this.squares.get(POSITION.C2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.C2))
        this.squares.get(POSITION.D2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.D2))
        this.squares.get(POSITION.E2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.E2))
        this.squares.get(POSITION.F2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.F2))
        this.squares.get(POSITION.G2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.G2))
        this.squares.get(POSITION.H2)?.placePiece(new Pawn(COLOR.BLACK , POSITION.H2))

        this.squares.get(POSITION.A7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.A7))
        this.squares.get(POSITION.B7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.B7))
        this.squares.get(POSITION.C7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.C7))
        this.squares.get(POSITION.D7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.D7))
        this.squares.get(POSITION.E7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.E7))
        this.squares.get(POSITION.F7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.F7))
        this.squares.get(POSITION.G7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.G7))
        this.squares.get(POSITION.H7)?.placePiece(new Pawn(COLOR.WHITE , POSITION.H7))
    }

    display(): void {
        let boardStr = '';
        const positions = Object.values(POSITION); // Ensure this is in the desired order
        positions.forEach((position, index) => {
            if (index % 8 === 0 && index !== 0) boardStr += '\n';
            const square = this.squares.get(position);
            const piece = square?.getPiece();
            const symbol = piece ? getPieceSymbol(piece.type, piece.color) : '·';
            boardStr += symbol + ' ';
        });
        console.log(boardStr);
    }
}

let plateau = new Chessboard()

plateau.init()

plateau.display();

