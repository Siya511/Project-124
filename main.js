nose_x = "";
nose_y = "";

function setup(){
    video = createCapture(VIDEO);
    video.size (500, 500);

    canvas = createCanvas(500, 500);
    canvas.position (800, 115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has Initialized");
}

function gotPoses(result){
    if (result.length > 0){
        console.log(result);
    }
}

function draw(){
    background('#eb8bf0');
}