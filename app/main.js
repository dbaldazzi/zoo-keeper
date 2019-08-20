import Alligator from "./models/Alligator.js";
import Bear from "./models/Bear.js";
import Cat from "./models/cats.js";
import Dog from "./models/dog.js";
import Eagle from "./models/Eagle.js";
import GroundHog from "./models/Groundhog.js";
import Hamster from "./models/Hamster.js";
import Ibis from "./models/Ibis.js";
import Jackel from "./models/Jackel.js";
import Kangaroo from "./models/Kangaroo.js";
import Lemur from "./models/Lemur.js";
import Manatee from "./models/Manatee.js";
import Otter from "./models/Otter.js";
import Parrot from "./models/Parrot.js";
import Quail from "./models/Quail.js";
import Rabbit from "./models/Rabbit.js";
import Turkey from "./models/Turkey.js";
import Uakari from "./models/Uakari.js";
import Vulture from "./models/Vulture.js";
import Weasel from "./models/Weasel.js";
import XRayTetra from "./models/XRayTetra.js";
import Yak from "./models/Yak.js";
import Zebra from "./models/Zebra.js";
import Falcon from "./models/Falcon.js";
import Scorpion from "./models/Scorpion.js";
import Newt from "./models/Newt.js";

let ally = new Alligator("reptile", "Ally", "Green", "F", 200, 60, "big");
let bob = new Alligator("reptile", "Bob", "Brown", "M", 300, 50, "4")
let BobB = new Bear("mammal", "BobB", "M", 1200, 0, "huge")
let Carl = new Cat("mammal", "Carl", "M", 10, 3, "small")
let Dawn = new Dog("mammal", "Dawn", "black", "F", 100, 10, "medium")
let Ed = new Eagle("bird", "Ed", "black and white", "M", 20, 6, "tiny")
let Fred = new Falcon("bird", "Fred", "grey", "M", 2, 4, "none")
let G = new GroundHog("mammal", "G", "Gray", "M", 20, 2, "small")
let Harry = new Hamster("mammal", "Harry", "Gray", "M", 1, .5, "tiny")
let Ida = new Ibis("mammal", "Ida", "brown", "F", 100, 2, "medium")
let Jarrid = new Jackel("mammal", "Jarrid", "brown", "M", 50, 10, "medium")
let kelly = new Kangaroo("mammal", "Kelly", "tan", "F", 300, 30, "large")
let Lexi = new Lemur("mammal", "Lexi", "tan", "F", 50, 12, "large")
let Marti = new Manatee("mammal", "Marti", "gray", "M", 1000, 20, "tiny")
let Oliver = new Otter("mammal", "Oliver", "grey", "M", 20, 6, "medium")
let Petter = new Parrot("bird", "Petter", "grey", "M", 3, 4, "none")
let Quoll = new Quail("bird", "Quoll", "grey", "M", 1, 2, "tiny")
let Robbin = new Rabbit("mammal", "Robbin", "white", "F", 5, 1, "big")
let King = new Scorpion("arthropod", "King", "black", "M", .1, 1, "tiny")
let Ted = new Turkey("bird", "Ted", "grey", "M", 20, 10, "none")
let U = new Uakari("mammal", "U", "orange", "M", 5, 10, "medium")
let Valentine = new Vulture("bird", "Valentine", "grey", "M", 30, 5, "none")
let West = new Weasel("mammal", "West", "grey", "M", 100, 10, "large")
let Xray = new XRayTetra("fish", "Xray", "translucent", "M", .1, .1, "tiny")
let Yarn = new Yak("mammal", "Yarn", "tan", "F", 200, 1, "medium")
let Zeb = new Zebra("mammal", "Zeb", "black and wight", "M", 300, 15, "medium")
let Nut = new Newt("mammal", "Nut", "green", "M", 1, 1, "tiny")

window["Alligator"] = new Alligator()
window["Bear"] = new Bear() 