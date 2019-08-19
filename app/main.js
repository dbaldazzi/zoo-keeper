import Alligator from "./models/Alligator.js";
import Bear from "../Bear.js";
import Cat from "./cats.js";
import Dog from "./models/dog.js";
import Eagle from "./models/Eagle.js";
import GroundHog from "./models/Groundhog.js";
import Hamster from "./Hamster.js";

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let bob = new Alligator("Bob", "Brown", "M", 300, 50, "4")
let BobB = new Bear("BobB", "M", 1200, 0, "huge")
let Carl = new Cat("Carl", "M", 10, 3, "small")
let Dawn = new Dog("Dawn", "black", "F", 100, 10, "medium")
let Ed = new Eagle("Ed", "M", "black and white", 20, 6, "tiny")
let G = new GroundHog("G", "Gray", "M", 20, 2, "small")
let Harry = new Hamster("Harry", "Gray", "M", 1, .5, "tiny")

window["Alligator"] = new Alligator()
window["Bear"] = new Bear() 