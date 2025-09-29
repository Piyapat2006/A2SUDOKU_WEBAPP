let valid = true;
let row = 9;
let col = 9;
let cell_size = 50;
let space = 20;
let x = -1;
let y = -1;
let a = 0;
let b = 0;

let board = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background(255);
  sudokutable();
  selectCell();
  drawButtons();
}

function sudokutable() {
  stroke(0);
  fill(255);
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      strokeWeight(2);
      rect(j * cell_size + space, i * cell_size + space, cell_size, cell_size);
    }
  }

  for (let i = 0; i <= 3; i++) {
    strokeWeight(5);
    line(i * cell_size * 3 + space, space, i * cell_size * 3 + space, cell_size * 9 + space);
    line(space, i * cell_size * 3 + space, cell_size * 9 + space, i * cell_size * 3 + space);
  }

  drawnum();
}

function drawnum() {
  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      let num = board[m][n];
      if (num !== 0) {
        fill(0);
        text(num, n * cell_size + cell_size / 2 + space, m * cell_size + cell_size / 2 + space);
      }
    }
  }
}

function selectCell() {
  if (x >= 0 && y >= 0 && x < row && y < col) {
    highlight();
    rect(x * cell_size + space, y * cell_size + space, cell_size, cell_size);

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === board[y][x] && board[i][j] !== 0) {
          highlight();
          rect(j * cell_size + space, i * cell_size + space, cell_size, cell_size);
        }
      }
    }
  }
}

function highlight() {
  noStroke();
  fill(255, 230, 120, 120);
}

function drawButtons() {
  stroke(0);
  strokeWeight(2);
  
  for (let i = 0; i < 9; i++) {
    fill(255);
    rect(i * cell_size + space, 10 * cell_size + space, cell_size, cell_size);
    fill(0);
    text(i + 1, i * cell_size + space + cell_size / 2, 10 * cell_size + cell_size / 2 + space);
  }

  if (x >= 0 && y >= 10 && x < row && y < 11) {
    fill(255, 200, 200, 150);
    rect(x * cell_size + space, y * cell_size + space, cell_size, cell_size);
  }
}

function mousePressed() {
  let mx = mouseX;
  let my = mouseY;
  
  x = Math.floor((mx - space) / cell_size);
  y = Math.floor((my - space) / cell_size);

  if (x >= 0 && y >= 0 && x < row && y < col) {
    if (board[y][x] === 0) {
      a = y;
      b = x;
    }
  }

  if (x >= 0 && y >= 10 && x < row && y < 11) {
    if (board[a][b] === 0) {
      board[a][b] = x + 1;
    }
  }
}
