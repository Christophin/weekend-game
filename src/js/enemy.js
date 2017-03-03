class Enemy {
    constructor()   {
        this.health = 100;
    }
    attack(character)   {
        var enemyHP = character.health;
        enemyHP -= Math.floor(Math.random() * 15);
        return enemyHP;
    }
}

export { Enemy };
