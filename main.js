function setup(){
    canvas= createCanvas(500,500);
    canvas.position(500,150);
    
    video= createCapture(VIDEO);
    video.size(400,400);
    
    poseNet= ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
    
    }
    
    function modelloaded(){
    console.log('poseNet is now initialized');
    
    
    }
    
    function gotPoses(results){
    if(results.length>0){
    console.log(results);
    
    }
    
    }
    
    function draw(){
    background('#DC143C');
    
    }
    