class Enemy {
    constructor()   {
        this.health = 100;
    }
    attack(character)   {
        var enemyDmg = Math.floor(Math.random() * 15);
        character.health -= enemyDmg;
        return enemyDmg;
    }
}

export { Enemy };
