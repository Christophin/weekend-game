class Character {
    constructor()   {
        this.health = 100;
        this.mana = 30;
    }
    attack(enemy)   {
        var attackDmg = Math.floor((Math.random()) * 15);
        enemy.health -= attackDmg;
        return attackDmg;
    }
    castFire(enemy) {
        if (this.mana >= 6) {
            var attackDmg = Math.floor(((Math.random()) * 2) * 15);
            enemy.health -= attackDmg;
            this.mana -= 6;
            return attackDmg;
        } else {
            return 'not enough mana to cast this spell';
        }
    }
}

export { Character };
