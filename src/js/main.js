import $ from 'jquery';
import { Battle } from './battle';
import { Character } from './character';
import { Enemy } from './enemy';

// var playerContainer = $('#character');
// var enemyContainer = $('#enemy');

var game = new Battle(new Character, new Enemy);

$('.attack').click(function(event)   {
    event.preventDefault;
    if (game.finished === false)  {
        game.fight();
        updateMessage();
        checkWinner();
    }
});

function updateMessage() {
    $('.message-box').html(`
        <div class='playerDmg'>Your attack did ${game.playerDmg} to the enemy!</div>
        <div class='enemyDmg'>The enemy strikes back hitting you for ${game.enemyDmg}!!</div>
    `);
}

function checkWinner () {
    if (game.enemy.health <= 0)  {
        youWon();
    }
    if (game.character.health <= 0)  {
        youLost();
    }
}

function youWon()   {
    $('.attack').off('click');
    $('.message-box').append('Congratulations, you WON!!!!');
}

function youLost()  {
    $('.attack').off('click');
    $('.message-box').append(`You obviously don't have
    enough skill to beat this game, which
    certainly isn't decided by random numbers.`);
}

export { youWon, youLost };
