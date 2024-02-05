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


const symbolPieces: { [key: string]: { [key: string]: string } } = {
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


class Chessboard {
    squares: Square[] = [];

    constructor() {
        this.init();
    }

    init(): void {
    }

    display(): void {
    }
}

