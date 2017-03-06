var $ = require('jquery');
import { Battle } from './battle';
import { Character } from './character';
import { Enemy } from './enemy';

var game = new Battle(new Character(1), new Enemy(1));

function startingStats()    {
    $('.message-box').html(`
        <div class='health'>You have ${game.character.health} health.</div>
        <div class='mana'>You have ${game.character.mana} mana.</div>
    `);
}

startingStats();

var wins = 0;

$('.attack').click(() =>  {
    if (game.finished === false)  {
        game.fight('attack');
        updateMessage();
        $('.message-box').append(game.checkWinner());
        if (game.enemy.health <= 0) {
            nextStage();
        }
    }
});

$('.magic').click(() =>  {
    if (game.finished === false)    {
        game.fight('magic');
        updateMessage();
        $('.message-box').append(game.checkWinner());
        if (game.enemy.health <= 0) {
            nextStage();
        }
    }
});

var nextStage = function()   {
    $('.button-box').append('<button class="nextStage">Continue On!</button>');
    wins += 1;
    stageStepper();
};

var stageStepper = function()   {
    $('.nextStage').click(() => {
        game = new Battle(new Character(wins * 10), new Enemy(wins * 10));
        startingStats();
        $('.nextStage').remove();
    });
};

function updateMessage() {
    $('.message-box').html(`
        <div class='health'>You have ${game.character.health} health.</div>
        <div class='mana'>You have ${game.character.mana} mana.</div>
        <div class='playerDmg'>Your attack did ${game.playerDmg} to the enemy!</div>
        <div class='enemyDmg'>The enemy strikes back hitting you for ${game.enemyDmg}!!</div>
    `);
}
