class Character {
    constructor()   {
        this.health = 100;
    }
    attack(battle)   {
        var enemeyHP = battle.enemy.health;
        enemeyHP -= Math.floor(Math.random() * 15);
        return enemeyHP;
    }
}

export { Character };
