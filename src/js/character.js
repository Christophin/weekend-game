class Character {
    constructor(level)   {
        this.health = 100 * level;
        this.mana = 30 + level;
        this.level = level;
    }
    attack(enemy)   {
        var attackDmg = Math.floor((Math.random()) * 15) * this.level;
        enemy.health -= attackDmg;
        return attackDmg;
    }
    castFire(enemy) {
        if (this.mana >= 6) {
            var attackDmg = Math.floor(((Math.random()) * 2) * 15) * this.level;
            enemy.health -= attackDmg;
            this.mana -= 6;
            return attackDmg;
        } else {
            return 'not enough mana to cast this spell';
        }
    }
}

export { Character };
