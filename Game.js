class Game {
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
                
            }
            
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4]

        car1.addImage(car1IMG);
        car2.addImage(car2IMG);
        car3.addImage(car3IMG);
        car4.addImage(car4IMG);
    }
    play(){
        form.hide();
        //textSize(30);
       // text("GAME STARTED",120,100);
       Player. getPlayerInfo ();

       if (allPlayers!==undefined){
           background(ground);
           image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index=0;
        var x=200;
        var y=0;

    
        for(var i in allPlayers ){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[i].distance;

            cars[index-1].x=x;
            cars [index-1].y=y;

            if (index===player.index){
               cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                        
            }
          
            
        }
       }
       if(keyIsDown(UP_ARROW)&&player.index!==null){
           player.distance+=20;
           player.update();
       }
       if(player.distance>3800){
           gameState=2;
       }
       drawSprites();

    }
    end(){
        console.log("game ended")
    }

}