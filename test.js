var Composite = require("./composite").Composite;

// var json = {
//   "points": [
//     { x:0, y:0, z: 0 },
//     { x:0, y:2, z: 0 }
//   ],
//   "curves": [
//     { type: "Line", start:{ ref: "points/0" }, end: { ref: "points/1" } }
//   ],
//   "assignments": [
//     {
//       type: "SinglePointConstraint",
//       point: { ref: "points/0" },
      
//     }
//   ]
// }

var model = new Composite();

model.fromJSON(json);

var out = model.toJSON();


