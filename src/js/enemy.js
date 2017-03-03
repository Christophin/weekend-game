class Enemy {
    constructor()   {
        this.health = 100;
    }
    attack(battle)   {
        var enemeyHP = battle.character.health;
        enemeyHP -= Math.floor(Math.random() * 15);
        return enemeyHP;
    }
}

export { Enemy };
