const router = require('express').Router();
let Game = require('../models/game');

router.route('/').get((req, res) => {
    Game.find()
        .then(games => res.json(games))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const player1 = req.body.player1;
    const player2 = req.body.player2;
    const results = req.body.results;

    const newGame = new Game({ player1, player2, results });

    newGame.save()
        .then(() => res.json('Game added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
