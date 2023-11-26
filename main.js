noseX= 0;
noseY= 0;

function preload() {
lipsImg = loadImage('https://i.postimg.cc/G2SGXxFk/lipsImg.png');
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet IS INITIALIZED.');
}

function draw() {
image(video, 0, 0, 500, 500);
image(lipsImg, noseX, noseY, 70, 50);
}
function take_snapshot() {
    save('myLipstickFilter.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x-35;
        noseY= results[0].pose.nose.y+25;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

