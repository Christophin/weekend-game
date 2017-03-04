class Enemy {
    constructor(level)   {
        this.health = 100 * level;
        this.level = level;
    }
    attack(character)   {
        var enemyDmg = Math.floor(Math.random() * 15) * this.level;
        character.health -= enemyDmg;
        return enemyDmg;
    }
}

export { Enemy };
