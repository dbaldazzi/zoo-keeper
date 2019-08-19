import Bear from "../Bear";

class Cat {
  constructor(
    name = '',
    gender = '',
    weight = 0,
    tailLength = 0,
    teethSize = '',
  ) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.tailLength = tailLength;
    this.teethSize = teethSize;
  }
}

export default Cat; 