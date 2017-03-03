// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Battle } from '../src/js/main';
import { Character } from '../src/js/character';
import { Enemy } from '../src/js/enemy';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {
    describe('Testing the Creation of Something', function () {
        it('should exist after we create it', function () {
            let x = new Object;
            expect(x).to.be.an.instanceof(Object);
        });
    });
});

describe('Battle', function() {
    describe('Testing the creation of it', function()   {
        it('should exist after we create it', function()    {
            let x = new Battle();
            expect(x).to.be.an.instanceOf(Battle);
        });
        it('should take a Character', function()   {
            let x = new Battle();
            expect(x.character).to.be.an.instanceOf(Character);
        });
        it('should take an Enemy', function()   {
            let x = new Battle();
            expect(x.enemy).to.be.an.instanceOf(Enemy);
        });
    });
});

describe('Character', function()    {
    describe('testing the methods of it', function()    {
        it('should be able to attack an enemy', function () {
            let x = new Battle();
            let initHP = x.enemy.health;
            x.character.attack(x);
            expect(x.enemy.health < initHP)
        })
    });
});

describe('Enemy', function()    {
    describe('testing the methods of it', function()    {
        it('should be able to attack a player', function()  {
            let x = new Battle;
            let initHP = x.character.health;
            x.enemy.attack(x);
            expect(x.enemy.health < initHP)
        })
    });
});
