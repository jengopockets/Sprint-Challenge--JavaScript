// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(stats){
    this.length = stats.length;
    this.width = stats.width;
    this.height = stats.height;
    }
    volume(){
        return this.length * this.width * this.height
      }
    surfaceArea(){
        let total1 = this.length * this.width;
        let total2 = this.length * this.height;
        let total3 = this.width * this.height;
        let total = total1 + total2 + total3;
        return total * 2
        }

  }
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(stats){
        super(stats);
    }
    cubeVolume(){
        return this.length*this.width*this.height
    }
    cubeSuface(){
        return 2*(this.length*this.width + this.width*this.height + this.height*this.length)
    }


}
const cube = new CubeMaker({
    length:5,
    width:5,
    height:5,
});
console.log(cube.cubeVolume());
console.log(cube.cubeSuface());