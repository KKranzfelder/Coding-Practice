// On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

// The north direction is the positive direction of the y-axis.
// The south direction is the negative direction of the y-axis.
// The east direction is the positive direction of the x-axis.
// The west direction is the negative direction of the x-axis.
// The robot can receive one of three instructions:

// "G": go straight 1 unit.
// "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
// "R": turn 90 degrees to the right (i.e., clockwise direction).
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.



/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    instructions = instructions.repeat(4);
    let position = {x: 0, y: 0},
        directions = [{movement: () => position.y += 1},
                      {movement: () => position.x += 1},
                      {movement: () => position.y -= 1},
                      {movement: () => position.x -= 1},
                      ],
        currentDirection = 0;

    for (let letter of instructions) {
      switch (letter) {
        case 'G':
          directions[currentDirection].movement();
          break;
        case 'L':
          if (currentDirection === 0) {
            currentDirection = 3;
            break;
          }
          currentDirection--;
          break;
        case 'R':
          if (currentDirection === 3) {
            currentDirection = 0;
            break;
          }
          currentDirection++;
          break;
        default:
          break;
      }
    }

    if (!position.x && !position.y) {
      return true;
    }

    return false;
};

console.log(isRobotBounded('GLG'));
console.log(isRobotBounded('GGLLGG'));
