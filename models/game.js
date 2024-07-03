const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    results: { type: Array, required: true }, // [{ winner: String, isDraw: Boolean }]
}, {
    timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
