

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
    fight()   {
        if (this.finished)  {
            return;
        }
        this.playerDmg = this.character.attack(this.enemy);
        this.updateBattle();
        this.enemyDmg = this.enemy.attack(this.character);
        this.updateBattle();
    }

}

export { Battle };
