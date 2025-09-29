valid = true;
row = 9;
col = 9;
cell_size = 50;
space=20;
x = -1;
y = -1;
board =  [
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

function sudokutable(){
    stroke(0);
    fill(255);
    i = 0;
    while(i < 9){
        j=0;
        while(j < 9){
            strokeWeight(2);
            rect(j*cell_size+space, i* cell_size+space, cell_size, cell_size);
            j+=1;
        }
        i+=1;
    }
    i=0;
    while(i<=3){
        strokeWeight(5);
        line(i*cell_size*3+space,space,i*cell_size*3+space,cell_size*9+space);
        i+=1;
    }
    i=0;
    while(i<=3){
        strokeWeight(5);
        line(space,i*cell_size*3+space,cell_size*9+space,i*cell_size*3+space);
        i+=1;
    }
    drawnum();
}

function drawnum(){
    fill(0);
    m = 0;
    while (m < row){
        n = 0;
        while (n < col){
            num = 0;
            if(board[m][n] != 0){
                num = board[m][n];
                text(num, n*cell_size + cell_size/2+space, m*cell_size + cell_size/2+space);
            }
            n+=1;
        }
        m+=1;
    }
}

function pressed(){
    if(mousePressed){
    x = mouseX;
    y = mouseY;
    x=(x-space)/cell_size;
    y=(y-space)/cell_size;
    }
}

function select(){
    if((x>=0)&&(y>=0)&&(x<row)&&(y<col)){
        highlight();
        rect(x*cell_size+space,y*cell_size+space,cell_size,cell_size);
        i = 0;
        while(i<9){
            j = 0;
            while(j<9){
                if((board[i][j]==board[y][x])&&(board[i][j]!=0)){
                    highlight();
                    rect(j*cell_size+space,i*cell_size+space,cell_size,cell_size);
                }
                j+=1;
            }
            i+=1;
        }
    }
}

function highlight(){
    noStroke();
    fill(255,230,120,120);   
}

function botton(){
    stroke(0);
    strokeWeight(2);
    i=0;
    n=1;
    while(i<9){
        fill(255);
        rect(i*cell_size+space,10*cell_size+space,cell_size,cell_size);
        fill(0);
        text(n,i*cell_size+space+cell_size/2,10*cell_size+cell_size/2+space);
        i+=1;
        n+=1;
    }
}
function setup() {
    createCanvas(displayWidth,displayHeight);
    textAlign(CENTER,CENTER);
    textSize(40);
}

function draw() {
    background(255);
    sudokutable();
    pressed();
    botton();
}
