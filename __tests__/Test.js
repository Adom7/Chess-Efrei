const { Chessboard, TYPE_OF_PIECES, COLOR, POSITION } = require('../Pieces.js');

const { expect } = require('jest');

describe('Chessboard', () => {
    it('should initialize pieces with correct type and color', () => {
        const chessboard = new Chessboard();

        const expectedPieces = [
            { position: POSITION.A1, type: TYPE_OF_PIECES.ROOK, color: COLOR.WHITE },
            { position: POSITION.B1, type: TYPE_OF_PIECES.KNIGHT, color: COLOR.WHITE },
            { position: POSITION.C1, type: TYPE_OF_PIECES.BISHOP, color: COLOR.WHITE },
            { position: POSITION.D1, type: TYPE_OF_PIECES.QUEEN, color: COLOR.WHITE },
            { position: POSITION.E1, type: TYPE_OF_PIECES.KING, color: COLOR.WHITE },
            { position: POSITION.F1, type: TYPE_OF_PIECES.BISHOP, color: COLOR.WHITE },
            { position: POSITION.G1, type: TYPE_OF_PIECES.KNIGHT, color: COLOR.WHITE },
            { position: POSITION.H1, type: TYPE_OF_PIECES.ROOK, color: COLOR.WHITE },
            { position: POSITION.A2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.B2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.C2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.D2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.E2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.F2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.G2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
            { position: POSITION.H2, type: TYPE_OF_PIECES.PAWN, color: COLOR.WHITE },
        
            { position: POSITION.A8, type: TYPE_OF_PIECES.ROOK, color: COLOR.BLACK },
            { position: POSITION.B8, type: TYPE_OF_PIECES.KNIGHT, color: COLOR.BLACK },
            { position: POSITION.C8, type: TYPE_OF_PIECES.BISHOP, color: COLOR.BLACK },
            { position: POSITION.D8, type: TYPE_OF_PIECES.QUEEN, color: COLOR.BLACK },
            { position: POSITION.E8, type: TYPE_OF_PIECES.KING, color: COLOR.BLACK },
            { position: POSITION.F8, type: TYPE_OF_PIECES.BISHOP, color: COLOR.BLACK },
            { position: POSITION.G8, type: TYPE_OF_PIECES.KNIGHT, color: COLOR.BLACK },
            { position: POSITION.H8, type: TYPE_OF_PIECES.ROOK, color: COLOR.BLACK },
            { position: POSITION.A7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.B7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.C7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.D7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.E7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.F7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.G7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
            { position: POSITION.H7, type: TYPE_OF_PIECES.PAWN, color: COLOR.BLACK },
        ];
        

        const emptySquares = [
            POSITION.A3, POSITION.B3, POSITION.C3, POSITION.D3, POSITION.E3, POSITION.F3, POSITION.G3, POSITION.H3,
            POSITION.A4, POSITION.B4, POSITION.C4, POSITION.D4, POSITION.E4, POSITION.F4, POSITION.G4, POSITION.H4,
            POSITION.A5, POSITION.B5, POSITION.C5, POSITION.D5, POSITION.E5, POSITION.F5, POSITION.G5, POSITION.H5,
            POSITION.A6, POSITION.B6, POSITION.C6, POSITION.D6, POSITION.E6, POSITION.F6, POSITION.G6, POSITION.H6,
        ];
        

        expectedPieces.forEach(expectedPiece => {
            const square = chessboard.squares.get(expectedPiece.position);
            const piece = square?.getPiece();
            expect(piece?.type).toBe(expectedPiece.type);
            expect(piece?.color).toBe(expectedPiece.color);
        });

        emptySquares.forEach(emptySquares => {
            const square = chessboard.squares.get(emptySquares);
            expect(square.getPiece()).toBe(null);
        })
    });
});
