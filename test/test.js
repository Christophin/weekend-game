// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Battle } from '../src/js/battle';
import { Character } from '../src/js/character';
import { Enemy } from '../src/js/enemy';


// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Battle', function() {
    describe('Testing the creation of it', function()   {
        it('should exist after we create it', function()    {
            let x = new Battle(new Character(1), new Enemy(1));
            expect(x).to.be.an.instanceOf(Battle);
        });
        it('should take a Character', function()   {
            let x = new Battle(new Character(1), new Enemy(1));
            expect(x.character).to.be.an.instanceOf(Character);
        });
        it('should take an Enemy', function()   {
            let x = new Battle(new Character(1), new Enemy(1));
            expect(x.enemy).to.be.an.instanceOf(Enemy);
        });
    });
    describe('Testing the methods of it', function()    {
        it('should control a fight', function ()    {
            let x = new Battle(new Character(1), new Enemy(1));
            x.fight();
            expect(x.playerDmg != undefined && x.enemyDmg != undefined);
        });
        it('should end the battle when someone dies', function()  {
            let x = new Battle(new Character(1), new Enemy(1));
            for (var i = 0; i < 40; i++)    {
                x.fight();
            }
            expect(x.finished);
        });
        it('should determine a winner', function()  {
            let x = new Battle(new Character(200), new Enemy(1));
            x.fight();
            expect(x.checkWinner() === `Congratulations, you WON!!!!`);
        });
        it('should make the higher level character win (win test 2)', function() {
            let x = new Battle(new Character(1), new Enemy(200));
            x.fight();
            expect(x.checkWinner() === `You obviously don't have
            enough skill to beat this game, which
            certainly isn't decided by random numbers.`);
        })
    });
});

describe('Character', function()    {
    describe('testing the levels of it', function()   {
        it('should have levels', function()    {
            let x = new Battle(new Character(1), new Enemy(1));
            expect(x.character.health === 100)
        });
        it('should increase its health for each level', function()  {
            let x = new Battle(new Character(5), new Enemy(1));
            expect(x.character.health === 500)
        });
    });
    describe('testing the methods of it', function()    {
        it('should be able to attack an enemy', function () {
            let x = new Battle(new Character(1), new Enemy(1));
            let initHP = x.enemy.health;
            x.character.attack(x.enemy);
            expect(x.enemy.health < initHP);
        });
        it('should be able to cast fire', function()    {
            let x = new Battle(new Character(1), new Enemy(1));
            let initHP = x.enemy.health;
            let initMana = x.character.mana;
            x.character.castFire(x.enemy);
            expect(x.enemy.health < initHP && x.character.mana < initMana);
        });
        it('should not be able to cast fire if it does not have enough mana', function()    {
            let x = new Battle(new Character(1), new Enemy(1));
            let initHP = x.enemy.health;
            x.character.mana = 4;
            x.character.castFire(x.enemy);
            expect(initHP === initHP);
        });
    });
});

describe('Enemy', function()    {
    describe('testing the levels of it', function()   {
        it('should have levels', function()    {
            let x = new Battle(new Character(1), new Enemy(1));
            expect(x.enemy.health === 100)
        });
        it('should increase its health for each level', function()  {
            let x = new Battle(new Character(5), new Enemy(7));
            expect(x.enemy.health === 700)
        });
    });
    describe('testing the methods of it', function()    {
        it('should be able to attack a player', function()  {
            let x = new Battle(new Character, new Enemy);
            let initHP = x.character.health;
            x.enemy.attack(x.character);
            expect(x.enemy.health < initHP);
        });
    });
});
