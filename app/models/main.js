import Alligator from "./models/Alligator.js";
import Bear from "../Bear.js";
import Cat from "./cats.js";
import Dog from "./models/dog.js";
import Eagle from "./models/Eagle.js";
import GroundHog from "./models/Groundhog.js";
import Hamster from "./Hamster.js";
import Ibis from "./models/Ibis.js";
import Jackel from "./Jacket.js";
import Kangaroo from "./Kangaroo.js";
import Lemur from "./models/Lemur.js";
import Manatee from "./Manatee.js";
import Otter from "./models/Otter.js";
import Parrot from "./Parrot.js";
import Quail from "./Quail.js";
import Rabbit from "./Rabbit.js";
import Turkey from "./Turkey.js";
import Uakari from "./Uakari.js";
import Vulture from "./Vulture.js";
import Weasel from "./Weasel.js";
import XRayTetra from "./XRayTetra.js";
import Yak from "./Yak.js";
import Zebra from "./Zebra.js";
import Falcon from "./Falcon.js";
import Scorpion from "./Scorpion.js";
import Newt from "./models/Newt.js";

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let bob = new Alligator("Bob", "Brown", "M", 300, 50, "4")
let BobB = new Bear("BobB", "M", 1200, 0, "huge")
let Carl = new Cat("Carl", "M", 10, 3, "small")
let Dawn = new Dog("Dawn", "black", "F", 100, 10, "medium")
let Ed = new Eagle("Ed", "black and white", "M", 20, 6, "tiny")
let Fred = new Falcon("Fred", "grey", "M", 2, 4, "none")
let G = new GroundHog("G", "Gray", "M", 20, 2, "small")
let Harry = new Hamster("Harry", "Gray", "M", 1, .5, "tiny")
let Ida = new Ibis("Ida", "brown", "F", 100, 2, "medium")
let Jarrid = new Jackel("Jarrid", "brown", "M", 50, 10, "medium")
let kelly = new Kangaroo("Kelly", "tan", "F", 300, 30, "large")
let Lexi = new Lemur("Lexi", "tan", "F", 50, 12, "large")
let Marti = new Manatee("Marti", "gray", "M", 1000, 20, "tiny")
let Oliver = new Otter("Oliver", "grey", "M", 20, 6, "medium")
let Petter = new Parrot("Petter", "grey", "M", 3, 4, "none")
let Quoll = new Quail("Quoll", "grey", "M", 1, 2, "tiny")
let Robbin = new Rabbit("Robbin", "white", "F", 5, 1, "big")
let King = new Scorpion("King", "black", "M", .1, 1, "tiny")
let Ted = new Turkey("Ted", "grey", "M", 20, 10, "none")
let U = new Uakari("U", "orange", "M", 5, 10, "medium")
let Valentine = new Vulture("Valentine", "grey", "M", 30, 5, "none")
let West = new Weasel("West", "grey", "M", 100, 10, "large")
let Xray = new XRayTetra("Xray", "translucent", "M", .1, .1, "tiny")
let Yarn = new Yak("Yarn", "tan", "F", 200, 1, "medium")
let Zeb = new Zebra("Zeb", "black and wight", "M", 300, 15, "medium")
let Nut = new Newt("Nut", "green", "M", 1, 1, "tiny")

window["Alligator"] = new Alligator()
window["Bear"] = new Bear() 