# Kinematics.js

A forward and inverse kinematics package for a basic 6 axis robotic arm.

Examples:

```js

// First define a config for the robot
const config == {
  v1: 2.5,
  v2: 3,
  v3: 2.5,
  v4: 2.5,
  v5: 2.5,
  v6: 2,
};

/**
 *     |
 *    [ ]
 *     |
 *    ( )
 *     |
 *    [ ]
 *     |
 *    ( )
 *     |
 *    ( )
 *     |
 *    [ ]
 */
inverse(0, 0, 15, 0, 0, 0, config)
// ==> [0, 0, 0, 0, 0, 0]

 /**
 *                  [ ]
 *                   |
 *    ( ) -- [ ] -- ( )
 *     |
 *    ( )
 *     |
 *    [ ]
 */
inverse(5, 0, 10, 0, 0, 0, config)
// ==> [0, 0, -Math.PI / 2, 0, Math.PI / 2, 0 ]
```

## Kinematics Diagram

![Kinematics Diagram](https://github.com/joepuzzo/robot-viewer/blob/main/src/server/static/KinematicsDiagram.jpg?raw=true)
