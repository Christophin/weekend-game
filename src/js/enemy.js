class Enemy {
    constructor()   {
        this.health = 100;
    }
    attack(character)   {
        var enemeyHP = character.health;
        enemeyHP -= Math.floor(Math.random() * 15);
        return enemeyHP;
    }
}

export { Enemy };
