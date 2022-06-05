noseX=0;
noseY=0;
difference = 0;
rightWristX =0;
leftWristX =0;

function setup() {
    video =createCapture(VIDEO);
    video.size(550,500);
    

    canvas= createCanvas(550,550);
    canvas.position(560,150);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    background('#969A97');

    document.getElementById("font_size").innerHTML ="Font size of The text will be ="+difference+"px";
    fill("green");
    textsize(difference);
    text('Shashwat',50,250)
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
    
        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x;
    
        difference=floor(left_wrist_x - right_wrist_x);
    
        console.log("rightwrist_x ="+results[0].pose.rightWrist.x+"rightwrist_y ="+results[0].pose.rightWrist.y);
        console.log("leftwrist_x ="+results[0].pose.leftWrist.x+"leftwrist_y ="+results[0].pose.leftWrist.y);
     
    
    }
    
}
