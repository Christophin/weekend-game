class Character {
    constructor()   {
        this.health = 100;
        this.mana = 30;
    }
    attack(enemy)   {
        var enemyHP = enemy.health;
        enemyHP -= Math.floor((Math.random()+1) * 15);
        return enemyHP;
    }
    castFire(enemy) {
        var enemyHP = enemy.health;
        if (this.mana >= 6) {
            enemyHP -= Math.floor(((Math.random() + 1) * 2) * 15);
            this.mana -= 6;
            return enemyHP
        } else {
            return 'not enough mana to cast this spell';
        }
    }
}

export { Character };
