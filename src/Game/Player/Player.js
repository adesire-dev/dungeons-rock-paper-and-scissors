class Player {
    constructor({
        name,
        health,
        attack,
    }) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    
    setHealth(newHealthValue) {
        this.health = newHealthValue;
    }
}

export default Player;