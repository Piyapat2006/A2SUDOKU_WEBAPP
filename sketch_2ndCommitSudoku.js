valid = true;
slected = (-1,-1);
cell_size = 50;
row = 9;
col = 9;
user_input = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],    
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
         ];
board =  [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function setup(){
    createCanvas(col*cell_size,row*cell_size);
    textAlign(CENTER, CENTER);
    textSize(16);
}

function draw(){
    background(255);
    sudokutable();
    drawnum();
}
    
    
function sudokutable(){
    fill(255);
    i = 0;
    while (i < 9){
        j=0;
        while (j < 9){
            strokeWeight(2);
            rect(j*cell_size, i* cell_size, cell_size, cell_size);
            j+=1;
        }
        i+=1;
    }
}
        
function drawnum(){
    textSize(16);
    fill(0,0,0);
    m = 0;
    while (m < row){
        n = 0;
        while (n < col){
            num = ' ';
            if (board[m][n] != 0){
                num = board[m][n];
            }
            else if (user_input[m][n] != 0){
                num = user_input[m][n];
            }
            text(str(num), n*cell_size + cell_size/2, m*cell_size + cell_size/2);
            n+=1;
        }
        m+=1;
    }
}
