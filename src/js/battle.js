

class Battle {
    constructor(character, enemy) {
        this.character = character;
        this.enemy = enemy;
        this.finished = false;
    }
    updateBattle()  {
        if (this.character.health <= 0 || this.enemy.health <= 0) {
            this.finished = true;
        }
    }
    fight(type)   {
        if (this.finished)  {
            return;
        }
        if (type === 'attack')    {
            this.playerDmg = this.character.attack(this.enemy);
            this.updateBattle();
            this.enemyDmg = this.enemy.attack(this.character);
            this.updateBattle();
        }
        if (type === 'magic') {
            this.playerDmg = this.character.castFire(this.enemy);
            this.updateBattle();
            this.enemyDmg = this.enemy.attack(this.character);
            this.updateBattle();
        }
    }
    checkWinner () {
        if (this.enemy.health <= 0)  {
            return `Congratulations, you WON!!!!`;
        }
        if (this.character.health <= 0)  {
            return `You obviously don't have
            enough skill to beat this game, which
            certainly isn't decided by random numbers.`;
        }
    }

}

export { Battle };
