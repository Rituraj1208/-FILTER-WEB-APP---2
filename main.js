function preload() {
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0 , 0 , 300, 300);
}

function take_snapshot() {
    save('myfilter.png');
}

function modelLoaded() {
    console.log("posNet is initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        console.log("mustachex= " + results[0].pose.mustache.X);
        console.log("mustachey= " + results[0].pose.mustache.Y);
    }
}