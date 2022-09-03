https://teachablemachine.withgoogle.com/models/nYqWI_It-/

function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nYqWI_It-/model.json", modelready);

}

function modelready(){
    classifier.classify(gotResults)
}

function gotResults(error,result){
   if(error){
       console.log(error);
   } 
   else{
       console.log(result);
       var sound = result[0].label;
   var confidence = result[0].confidence;
   document.getElementById("result_label").innerHTML = "I can hear " + sound;
   document.getElementById("result_confidence").innerHTML = "Accuracy- " + confidence.toFixed(2);
   }
var red=Math.floor(Math.random()*255);
var blue=Math.floor(Math.random()*255);
var green=Math.floor(Math.random()*255);
document.getElementById("result_label").style.color="rgb("+red+", "+green+", "+blue+")";
   
}