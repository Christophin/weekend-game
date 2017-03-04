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
        $('.message-box').append(game.checkWinner());
    }
});

function updateMessage() {
    $('.message-box').html(`
        <div class='playerDmg'>Your attack did ${game.playerDmg} to the enemy!</div>
        <div class='enemyDmg'>The enemy strikes back hitting you for ${game.enemyDmg}!!</div>
    `);
}
