
var blocks = [
  {
    name: "s",
    index: 0,
    color: 1,
    shape: [
      [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ],
      [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ]
  },
  {
    name: "z",
    index: 0,
    color: 2,
    shape: [
      [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
      ],
    ]
  },
  {
    name: "t",
    index: 0,
    color: 3,
    shape: [
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ]
  },
  {
    name: "l",
    index: 0,
    color: 4,
    shape: [
      [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
      ],
      [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
    ]
  },
  {
    name: "lr",
    index: 0,
    color: 5,
    shape: [
      [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ],
    ]
  },
  {
    name: "o",
    index: 0,
    color: 6,
    shape: [
      [
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ],
    
    ]
  },
  {
    name: "b",
    index: 0,
    color: 7,
    shape: [
      [
        [0, 0, 0 , 0],
        [1, 1, 1 , 1],
        [0, 0, 0 , 0],
        [0, 0, 0 , 0],
      ],
      [
        [0, 0, 1 , 0],
        [0, 0, 1 , 0],
        [0, 0, 1 , 0],
        [0, 0, 1 , 0],
      ],
      [
        [0, 0, 0 , 0],
        [0, 0, 0 , 0],
        [1, 1, 1 , 1],
        [0, 0, 0 , 0],
      ],
      [
        [0, 1, 0 , 0],
        [0, 1, 0 , 0],
        [0, 1, 0 , 0],
        [0, 1, 0 , 0],
      ],
    ]
  },
]
var curBlock;
var nextBlock;
var curYX = [0, 3];
var colors = ["w", "r", "o", "y", "g", "b", "n", "v", "black"];
var tetris = document.querySelector("#tetris");
var data = [];
var activeBlock = [];
function init() {
  var frag = document.createDocumentFragment();
  for (var y = 0; y < 20; y++) {
    var tr = document.createElement("tr");
    frag.append(tr);
    for (var x = 0; x < 10; x++) {
      var td = document.createElement("td");
      tr.append(td);
    }
    var col = Array(10).fill(0);
    data.push(col);
  }
  tetris.append(frag);
  makeBlock();
}
function draw() {
  // console.log(curYX[0] + ":" + curYX[1]);
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 10; x++) {
      if (data[y][x] > 10) {
        tetris.children[y].children[x].className = colors[colors.length - 1];
      } else if (data[y][x] > 0) {
        tetris.children[y].children[x].className = colors[data[y][x]];
      }
      else {
        tetris.children[y].children[x].className = colors[0];
      }
    }
  }
}
function makeBlock() {
  if (curBlock == undefined) {
    var r = Math.floor(Math.random() * blocks.length);
    curBlock = blocks[r];
  } else {
    curBlock = nextBlock;
  }
  var r = Math.floor(Math.random() * blocks.length);
  nextBlock = blocks[r];

  curYX = [0, 3];
  curBlock.index = 0;
  var shape = curBlock.shape[0];

  for (var y = 0; y < shape.length; y++) {
    for (var x = 0; x < shape.length; x++) {
      if (shape[y][x] == 1) {
        data[y][x + 3] = curBlock.color;
      }
    }
  }
  draw();
}
function isActive(value) {
  return (value > 0 && value <= 9);
}
function isStop(value) {
  return (value === undefined || value >= 10);
}

function down() {
  var shape = curBlock.shape[curBlock.index];
  activeBlock = [];
  var canDown = true;
  // console.log(curYX[0] + ":" + curYX[1]);
  for (var y = curYX[0]; y < curYX[0] + shape.length; y++) {
    for (var x = curYX[1]; x < curYX[1] + shape.length; x++) {
      if(y >= 20 || x >= 10) continue;
      if (isActive(data[y][x])) {
        var block = [y, x];
        activeBlock.push(block);
        if (isStop(data[y + 1]) || isStop(data[y + 1][x])) {
          canDown = false;
        }
      }
    }
  }
  if (!canDown) {
    for (var i = 0; i < activeBlock.length; i++) {
      data[activeBlock[i][0]][activeBlock[i][1]] += 10;
    }
    remove();
    makeBlock();
    draw();
    return false;
  }
  else if (canDown) {
    curYX = [curYX[0] + 1, curYX[1]];
    for (var y = 19; y >= 0; y--) {
      for (var x = 0; x < 10; x++) {
        if (isActive(data[y][x])) {
          if (!isStop(data[y + 1])) {
            if (!isStop(data[y + 1][x])) {
              data[y + 1][x] = data[y][x];
              data[y][x] = 0;
            }
          }
        }
      }
    }
    draw();
    return true;
  }
}
function remove(){
  // var del = [];
  // for(var y = 0; y  < 20 ; y ++){
  //   var count = 0;
  //   for(var x = 0; x < 10; x ++){
  //     if(data[y][x] > 0){
  //       count += 1;
  //     }
  //     if(count === 10){
  //       del.push(y);
        
  //     }
  //   }
  // }
  // console.log(del);
  // for(var i = 0; i < del.length; i++){
  // }
  const fullRows = [];
  data.forEach((col, i) => {
    let count = 0;
    col.forEach((row, j) => {
      if (row > 0) {
        count++;
      }
    });
    if (count === 10) {
      fullRows.push(i);
    }
  });
  const fullRowsCount = fullRows.length;
  console.log(data);
  // data = data.filter((row, i) => !fullRows.includes(i));
  for(var i = 0; i < fullRowsCount; i++){
      data.splice(fullRows[i] , 1);
      data.unshift([0,0,0,0,0,0,0,0,0,0]);
  }
}


function left() {
  var shape = curBlock.shape[curBlock.index];
  for (var y = curYX[0]; y < curYX[0] + shape.length; y++) {
    for (var x = curYX[1]; x < curYX[1] + shape.length; x++) {
      if (isActive(data[y][x]) && isStop(data[y][x - 1])) {
        return;
      }
    }
  }
  curYX = [curYX[0], curYX[1] - 1];
  for (var y = 19; y >= 0; y--) {
    for (var x = 0; x < 10; x++) {
      if (data[y][x - 1] === 0 && isActive(data[y][x])) {
        data[y][x - 1] = data[y][x];
        data[y][x] = 0;
      }
    }
  }
}
function right() {
  var shape = curBlock.shape[curBlock.index];
  for (var y = curYX[0]; y < curYX[0] + shape.length; y++) {
    for (var x = curYX[1]; x < curYX[1] + shape.length; x++) {
      if (isActive(data[y][x]) && isStop(data[y][x + 1])) {
        return;
      }
    }
  }

  curYX = [curYX[0], curYX[1] + 1];
  for (var y = 19; y >= 0; y--) {
    for (var x = 9; x >= 0; x--) {
      if (data[y][x + 1] === 0 && isActive(data[y][x])) {
        data[y][x + 1] = data[y][x];
        data[y][x] = 0;
      }
    }
  }
}
function rotate(){
    var nextIndex = curBlock.index + 1;
    if(nextIndex >= curBlock.shape.length){
      nextIndex = 0;
    }
    var nextShape = curBlock.shape[nextIndex];
    for(var y = curYX[0]; y<  curYX[0] + nextShape.length; y++){
      for(var x = curYX[1]; x < curYX[1] + nextShape.length; x++){
          if(nextShape[y-curYX[0]][x - [curYX[1]]] > 0  && isStop(data[y][x])){
            return;
          }
      }
    }
   
    var shape = curBlock.shape[curBlock.index];
    for(var y = curYX[0]; y <  curYX[0] + shape.length; y++){
      for(var x = curYX[1]; x < curYX[1] + shape.length; x++){
        var nextNode = nextShape[y - curYX[0]][x - curYX[1]];
        if(isActive(nextNode)&& data[y][x]===0){
          data[y][x] = curBlock.color;
        }else if(nextNode ===0 && isActive(data[y][x])){
          data[y][x] = 0;
        }
      }
    }
    curBlock.index = nextIndex;
}


document.addEventListener("keydown", function (e) {
  if (e.code == "KeyS") {
    down();

  }
  else if (e.code == "KeyA") {
    left();
    draw();
  }
  else if (e.code == "KeyD") {
    right();
    draw();
  }
  else if (e.code == "KeyW") {
    rotate();
    draw();
  }
  else if (e.code == "Space") {
    while (down()) {
      // draw();
    }
  }
});
setInterval(down, 1000);
init();