valid = true;
board = [
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
    createCanvas(500,800);
    textAlign(CENTER, CENTER);
    textSize(16);
}

function draw(){
    background(255);
    sudokutable();
    drawnum(board);
}
    
    
function sudokutable(){
    fill(255);
    i = 0;
    while (i < 9){
        j=0;
        while (j < 9){
            rect(width/11+(j)*width/11,height-(17-i)*width/11,width/11,width/11);
            j+=1;
        }
        i+=1;
    }
}
        
function drawnum(bo){
    textSize(16);
    fill(0,0,0);
    m = 0;
    while (m < 9){
        n = 0;
        while (n < 9){
            num = bo[m][n];
            if (num == 0){
                num = " ";
            }
            text(str(num), width/11+(n)*width/11+width/22, height-(17-m)*width/11+0.5*width/11);
            n+=1;
        }
        m+=1;
    }
}
