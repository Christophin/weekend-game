class Character {
    constructor()   {
        this.health = 100;
    }
    attack(enemy)   {
        var enemeyHP = enemy.health;
        enemeyHP -= Math.floor(Math.random() * 15);
        return enemeyHP;
    }
}

export { Character };
