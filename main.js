function preload(){
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(220, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 70, 60, 450, 350);
    ellipse (50, 40, 55, 55);
    ellipse (540, 40, 55, 55);
    ellipse (50, 430, 55, 55);
    ellipse (540, 430, 55, 55);
    fill (0,255,255);
    stroke(0, 0, 0);
  
}
function take_snapshot(){
    save('student.png');
}
