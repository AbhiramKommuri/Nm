canvas = document.getElementById("canvas");
xfc = canvas.getContext("2d");

var x = 10; 
var y = 10;

var xtwo = 10; 
var ytwo = 110;

background_img = "https://i.postimg.cc/KzWwHPcq/racing.gif";
rover_img = "rover.png";

function loadimages(){
    var backroundTag = new Image();
    backroundTag.onload = uploaone;
    backroundTag.src = "https://i.postimg.cc/bv5d35nK/racing.jpg";

    var roverTag = new Image();
    roverTagtwo.onload = uploatwo;
    roverTag.src = "http://www.clker.com/cliparts/q/0/m/g/P/c/red-sports-car-top-view-md.png";

    var roverTagtwo = new Image();
    roverTagtwo.onload = uploathree;
    roverTagtwo.src = "https://openclipart.org/image/800px/190175";
}


function uploadone(){
 xfc.drawImage(backgroundTag,0,0,canvas.width,canvas.height);
};

function uploadtwo(){
    xfc.drawImage(roverTag,x,y,100,90);
   }

   function uploadthree(){
    xfc.drawImage(roverTag,xtwo,ytwo,100,90);
   }

window.addEventListener("keydown",functionname())

function functionname(e){
    if(keyPressed == '38') { up(); console.log("up"); console.log("down");
} if(keyPressed == '40') { down();
} if(keyPressed == '37') { left();
         console.log("left");
} if(keyPressed == '39') { right();
             console.log("right"); }
}

function uploadtwo(){
    xfc.drawImage(roverTagtwo,x,y,100,90);
   }

window.addEventListener("keydown",functionnametwo())

function functionnametwo(e){
    if(keyPressed == '38') { uptwo(); console.log("up");
     console.log("down");
} if(keyPressed == '40') { downtwo();
} if(keyPressed == '37') { lefttwo();
         console.log("left");
} if(keyPressed == '39') { righttwo();
             console.log("right"); }
}

