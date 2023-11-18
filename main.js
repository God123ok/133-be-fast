
img = "";
status = "";
objects = [];
function preload(){
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    dacument.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
    image(img, 0,0, 640, 420)

    if(status != "")
    {
        for (1 = 0; 1 <objects.leangth; 1++)
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        fill("#FF0000") ;
        percent = floor(objects[1].confidence * 100);
        text(objects[1].label +" "+ percent + "%", objects[i].x, objects[i].y );
        noFill();
        stroke("FF0000");
        rect(objects[i].x, objects[i].y, objects[1].width, objects[i].height);
     
    }
    }
    fill("FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("FF000");
    rect(30, 60, 450, 350);

    fil("FF000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF000");
    rect(300, 90, 270,320);
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    ObjectDetector.destector.detect(img, gotResut);
}
function gotResult(error, resuts) {
    if (error) {
        console.log(error);
    
    }
    console.log(results);
    objects = rresults;
}
