/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var imgArray = new Array(); //stores all image sources
             var statearray=new Array(); // stores whether each card is up or downward faced currently
             var stateidarray=new Array();//stores 2 state ids for wrongpair function
             var flippedarray=new Array(); //stores the two cards that are curently flipped,stores their elemnt IDs
             var gamestate;//stores the state of the game currently
             var flippedcurrently;//stores number of cards currently flipped up
             var flippedtotal; //stores number of pairs that have been flipped to this point
             var imgs = document.getElementsByClassName("cards");//obtaining a class of controls
             var shuffledarray=new Array();
             var score;
             var tries;
             var shiftindex;;
             var timecounter;
             var myVar;
         
     
            
            function initializegame()
            {
                 //initializing game variables
            	  
                    imgArray[0] = new Image();
                    imgArray[0].src = 'gameimages/acespade.jpg';

                    imgArray[1] = new Image();
                    imgArray[1].src = 'gameimages/joker.jpg';

                    imgArray[2] = new Image();
                    imgArray[2].src = 'gameimages/king.jpg';

                    imgArray[3] = new Image();
                    imgArray[3].src = 'gameimages/queen.jpg';

                    imgArray[4] = new Image();
                    imgArray[4].src = 'gameimages/5hearts.jpg';

                    imgArray[5] = new Image();
                    imgArray[5].src = 'gameimages/8diamonds.jpg';
                    
                    imgArray[6] = new Image();
                    imgArray[6].src = 'gameimages/acespade.jpg';

                    imgArray[7] = new Image();
                    imgArray[7].src = 'gameimages/joker.jpg';

                    imgArray[8] = new Image();
                    imgArray[8].src = 'gameimages/king.jpg';

                    imgArray[9] = new Image();
                    imgArray[9].src = 'gameimages/queen.jpg';

                    imgArray[10] = new Image();
                    imgArray[10].src = 'gameimages/5hearts.jpg';

                    imgArray[11] = new Image();
                    imgArray[11].src = 'gameimages/8diamonds.jpg';
                    shufflecards();
                    var looper;
                            for(looper=0;looper<12;looper++)
                            {
                                statearray[looper]=0;//0 is unflipped and 1 is flipped 
                            }
                            
                         
                            for(looper=0;looper<2;looper++)
                            {
                               flippedarray[looper]=0;//0 is no elementID so array is empty
                            }
                            
                        
                            gamestate=1;        // 0 is not started, 1 is in-game, 2 is ended                                           
                            flippedcurrently=0;
                            flippedtotal=0;
                            score=0;
                            tries=0;
                        	document.getElementById("time").hidden=false;
                     
                            clearInterval(myVar);
                         
                         timecounter=30;
                            initializeUI();
                            myVar = setInterval(myTimer, 1000);
                            
                            document.getElementById("R1C1").onclick=function() {flipcard(0,'R1C1',0)};//MAKE CARD CLICKABLE
                            document.getElementById("R1C2").onclick=function() {flipcard(1,'R1C2',1)};//MAKE CARD CLICKABLE
                            document.getElementById("R1C3").onclick=function() {flipcard(2,'R1C3',2)};//MAKE CARD CLICKABLE
                            document.getElementById("R1C4").onclick=function() {flipcard(3,'R1C4',3)};//MAKE CARD CLICKABLE
                            
                            document.getElementById("R2C1").onclick=function() {flipcard(4,'R2C1',4)};//MAKE CARD CLICKABLE
                            document.getElementById("R2C2").onclick=function() {flipcard(5,'R2C2',5)};//MAKE CARD CLICKABLE
                            document.getElementById("R2C3").onclick=function() {flipcard(6,'R2C3',6)};//MAKE CARD CLICKABLE
                            document.getElementById("R2C4").onclick=function() {flipcard(7,'R2C4',7)};//MAKE CARD CLICKABLE
                            
                            document.getElementById("R3C1").onclick=function() {flipcard(8,'R3C1',8)};//MAKE CARD CLICKABLE
                            document.getElementById("R3C2").onclick=function() {flipcard(9,'R3C2',9)};//MAKE CARD CLICKABLE
                            document.getElementById("R3C3").onclick=function() {flipcard(10,'R3C3',10)};//MAKE CARD CLICKABLE
                            document.getElementById("R3C4").onclick=function() {flipcard(11,'R3C4',11)};//MAKE CARD CLICKABLE
                            
                            
                                                        
                            window.alert("Ready to begin");

            }
            
            
            function initializeUI()
            {
        
                    for(i=0;i<imgs.length;i++)
                    {
                    
                    imgs[i].src="back.jpg";
        document.getElementById("score").innerHTML=score;
            document.getElementById("tries").innerHTML=tries;
          
          }
          
          
                          
                               
            }
            
            function checkvictory()
            {
                    if ((flippedtotal)===6)
                        {
                        gamestate=2;
                        for(i=0;i<imgs.length;i++)
                        {
                              imgs[i].hidden=false;
                
          
                         }
                           var y = document.getElementById("winneraudio"); 
                     y.play();
          window.alert("Congratulations,you win!!! \n \n .Final score is "+ score + " \n Number of tries:" + tries + "\n Time taken :" + (30-timecounter)+ "seconds" );
                     
                          clearInterval(myVar);
                          
                     }
            
            
            }
            
            function nullfunction()
            {
            	//do nothing 
            	
            }
            
            function correctpair()
            {
                    flippedtotal++;
                    flippedcurrently=0;
                    document.getElementById(flippedarray[0]).onclick= function() {nullfunction()};//MAKE CARD UNCLICKABLE by calling do nothing function
                    document.getElementById(flippedarray[1]).onclick=function() {nullfunction()};//MAKE CARD UNCLICKABLE by calling do nothing function
                    score+=200;
                    document.getElementById("score").innerHTML=score;
                    var x = document.getElementById("myAudio"); 
                     x.play();
                    
                     checkvictory() ;
            
            }
            
                      
            function wrongpair()
            {
                    document.getElementById(flippedarray[0]).src="back.jpg";//flip cards on their back
                    document.getElementById(flippedarray[1]).src="back.jpg";//flip cards on their back
                    statearray[stateidarray[0]]=0;
                    statearray[stateidarray[1]]=0;
                    var a = document.getElementById("wrongaudio"); 
                     a.play();
                    
                   flippedcurrently=0;
              }
                                   
            function checkpair()
            {
               if (document.getElementById(flippedarray[0]).src===document.getElementById(flippedarray[1]).src)
               {
             
                 setTimeout(function(){ correctpair(); }, 300);                   
               
                              
               }else 
               {
               
                   setTimeout(function(){ wrongpair(); }, 300);
                
               }
               tries++;
               document.getElementById("tries").innerHTML=tries;
            }
            
            function shufflecards()
            {
                var arraysize=12;
                var arrayindex;//index of card picked up in preloaded array
                var newarrayindex=0;// points to where we are storing stuff in new shuffled array
                                
                
                    
                while(arraysize>0)
                {
                 arrayindex=Math.floor(Math.random() * ((arraysize) - 0)) + 0; //generate random number between 0 and 6
                 shuffledarray[newarrayindex]=new Image();
                 shuffledarray[newarrayindex].src=imgArray[arrayindex].src;//place random image in new array location
                 
               
                 for(shiftindex=arrayindex;shiftindex<(arraysize-1);shiftindex++)//shift everyone from deleted element one up
                 {
                     imgArray[shiftindex].src=imgArray[shiftindex+1].src;//shift elements in array one up
                                          
                 }                
                 
                 newarrayindex++;//increment new location write index
                 arraysize--;//decrement arraysize
                
                 
                            
                }
                
                // window.alert("cards shuffled!!");//inform user that cards are shuffled
                
        
            }
                  
            function myTimer()
             {
                            timecounter--;
                            document.getElementById("time").innerHTML=timecounter.toString();


                                if (timecounter===0)
                                {
                                gamestate=2;
                                 var z = document.getElementById("loseraudio"); 
                                 z.play();
                                window.alert("Time is up.You lose!! \n \n Final score is "+ score + " \n Number of tries:" + tries  );
                                clearInterval(myVar);
                                initializegame();
                                                                
                                }
                                
                                                               
                                
            
            }
                           
            function flipcard(imagenumber,caller,stateid)
            {
           
            if (gamestate>0)
            {
            
               
                            if (statearray[stateid]===0)// if the card is not flipped
                            {
                                document.getElementById(caller).src=shuffledarray[imagenumber].src;//change the source 
                                statearray[stateid]=1 ;//card is now flipped

                                        if (flippedcurrently===0) // if no cards had been flipped prior to this one being flipped
                                        {
                                         flippedarray[0]=caller;//array only gets read when 2 people write to it. add card id to flipped cards array
                                         stateidarray[0]=stateid;
                                        }
                                        if (flippedcurrently===1)// if there was 1 card flipped prior ti flipping this one
                                        {
                                             flippedarray[1]=caller;// add card to second slot of flipped array 
                                             stateidarray[1]=stateid;
                                             
                                        }
                              flippedcurrently++;//increment the number of flipped cards
                              
                              

                             }
               
               
                               else if (statearray[stateid]===1)// if the card is  flipped
                               {
                                     document.getElementById(caller).src="back.jpg";// lay card on its back
                                  statearray[stateid]=0 ;//card is now flipped
                                  
                                     flippedcurrently--;//decrease nuber of flipped cards
                                     

                                }
                                
                                
              
                                if (flippedcurrently===2)
                                {
                                   checkpair();
                              
                                }
             
                                   
                
            
            }
                else
                {

                window.alert("Click on new game first!");

                }
            }
            
