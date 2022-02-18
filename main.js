harry_potter="";
peter_pan="";

leftwtistX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload(){
    peter_pan=loadSound("music2.mp3");
    harry_potter=loadSound("music.mp3");   
}

function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
    image(video,0,0,700,500);
    
    }

    function modelLoaded(){
        console.log("model loaded");
    }

    function gotPoses(results){
        if(results.length>0){
            console.log(results);
            leftwristX = results[0].pose.leftWrist.x;
            leftwristY = results[0].pose.leftWrist.y;
            rightwristX=results[0].pose.rightWrist.x;
            rightwristY=results[0].pose.rightWrist.y; 
            console.log("left Wrist X= "+leftwristX);
            console.log("left Wrist Y= "+leftwristY);
            console.log("right Wrist X= "+rightwristX);
            console.log("right Wrist Y= "+rightwristY);
        }
    }

console.log(rightwristX);