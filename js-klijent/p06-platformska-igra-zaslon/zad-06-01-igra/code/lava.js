function Lava(pos, ch) {
    this.pos = pos;
    this.size = new Vector(1, 1);
    if (ch == "=") {
        this.speed = new Vector(2, 0);
    } else if (ch == "|") {
        this.speed = new Vector(0, 2);
    } else if (ch == "v") {
        this.speed = new Vector(0, 3);
        this.repeatPos = pos;
    }
}

Lava.prototype.type = "lava";
