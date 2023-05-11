noseX =0
noseY =0
LeftWrist = 0
RightWrist = 0
Difference = 0
function setup(){
    Canvas = createCanvas(900,600)
    Canvas.position(550,130)

    video = createCapture(VIDEO)
    video.size(500,500)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotResult)
}
function modelLoaded(){
    console.log("Model has been loaded")
}
function gotResult(result){
    if(result.length > 0){
        console.log(result)
        noseX = results[0].pose.nose.x 
        noseY = results[0].pose.nose.y 

        LeftWrist = results[0].pose.LeftWrist.x 
        RightWrist = results[0].pose.RightWrist.x 

        Difference = Math.floor(LeftWrist-RightWrist)
    }
}
function draw(){
    background("#45556e")
    fill("red")
    stroke("black")
    document.getElementById("Size").innerHTML = "The distence between Wrist is:"+Difference+"px"
    text("Prathemesh",noseX,noseY)
    textSize(Difference)
}