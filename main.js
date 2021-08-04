res="";
acc=0;
rough;
resLength=0;
res;
function preload(){
    img=loadImage('image.jpg');
}
function setup(){
    Canvas=createCanvas(600,500);
    Canvas.parent('webcam');
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("The model is loaded");
    status="true";
    objectDetector.detect(img, Results);
}
function Results(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    resLength=results.length;
    console.log(results.length);
    res=results;
    for(k=0;k<resLength;k++){
        // if(results[k].label=="cup"){
        //     if(results[k].confidence>0.85){
        //         console.log(results[k].label);
        //         document.getElementById("status").textContent="Danger found";
        //     }
        // }
        if(results[k].label=="bullet" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else if(results[k].label=="bullets" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else if(results[k].label=="gun" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else if(results[k].label=="knife" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else if(results[k].label=="bombs" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else if(results[k].label=="bomb" && results[k].confidence>0.8){
            console.log(results[k].label);
            document.getElementById('status').textContent="Danger found";
            break;
        }
        else{
            document.getElementById("status").textContent="No danger found";
        }
    }
}
function draw(){
    image(img,0,0,600,500);
    if(status != ""){
        for(m=0;m<resLength;m++){
            fill("red");
            acc=res[m].confidence*100;
            acc=round(acc*1)/1;
            // acc=round(acc*10)/10;
            acc=acc + "%";
            rough=res[m].label + " " + acc;
            text(rough,res[m].x,res[m].y);
            noFill();
            stroke("red");
            rect(res[m].x,res[m].y,res[m].width,res[m].height);
        }
    }
}