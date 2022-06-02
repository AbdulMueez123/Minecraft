var canvas = new fabric.Canvas("MyCanvas");
 player_x = 10;
 player_y = 10;
 block_width = 30;
 block_height = 30;
var player_object = "";
var block_object = "";
function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
          player_object.set({
               top:player_y, left:player_x });
         canvas.add(player_object);
    })
}
function new_img(get_img
    ){
    fabric.Image.fromURL(get_img , function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
               top:player_y, left:player_x });
         canvas.add(block_object);
    })
}

window.addEventListener("keydown", MyKeydown);

function MyKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed  ==  "80"){
           console.log("p and shift key has pressed together");
           block_width = block_width + 10 ;
           block_height = block_height + 10 ; 
           document.getElementById("current_width").innerHTML = block_width;
           document.getElementById("current_height").innerHTML = block_height;


    }
    if (e.shiftKey == true && keyPressed  ==  "77"){
        console.log("m and shift key has pressed together");
        block_width = block_width - 10 ;
        block_height = block_height - 10 ; 
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if  (keyPressed == "38"){
        up();
        console.log("up");
    }
    if  (keyPressed == "40"){
        down();
        console.log("down");
    } if  (keyPressed == "39"){
       right();
        console.log("right");
    } if  (keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "87"){
        new_img("wall.jpg");
        console.log("W");
    }
    if(keyPressed == "71"){
        new_img("ground.png");
        console.log("G");
    }
    if(keyPressed == "76"){
        new_img("light_green.png");
        console.log("L");
    }
    if(keyPressed == "84"){
        new_img("trunk.jpg");
        console.log("T");
    }
    if(keyPressed == "82"){
        new_img("roof.jpg");
        console.log("R");
    }
    if(keyPressed == "89"){
        new_img("yellow_wall.png");
        console.log("Y");
    }
    if(keyPressed == "68"){
        new_img("dark_green.png");
        console.log("D");
    }
    if(keyPressed == "85"){
        new_img("unique.png");
        console.log("U");
    }
    if(keyPressed == "67"){
        new_img("cloud.jpg");
        console.log("C");
    }


}
function up(){
    if(player_y>=0){
        player_y = player_y - block_height;
        console.log("block image height  = " + block_height);
        console.log("when up arrow is pressed, X =  "+ player_x  + " Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}
function down(){
    if(player_y<=500){
        player_y = player_y + block_height;
        console.log("block image height  = " + block_height);
        console.log("when down arrow is pressed, X =  "+ player_x  + " Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}
function left(){
    if(player_x>0){
        player_x = player_x - block_width;
        console.log("block image width  = " + block_width);
        console.log("when left arrow is pressed, X =  "+ player_x  + " Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}
function right(){
    if(player_x<850){
        player_x = player_x + block_width;
        console.log("block image width  = " + block_width);
        console.log("when right arrow is pressed, X =  "+ player_x  + " Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}