
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw1() {
   
   
       var ctx = canvas.getContext('2d');
       ctx.fillStyle='#0c91eb';
       ctx.fillRect(0, 0, 500, 325);

      
       ctx.beginPath();
       ctx.arc(100, 78, 35, 0, 2 * Math.PI);
       ctx.fillStyle='yellow';
       ctx.fill();
 

       ctx.beginPath();
       ctx.arc(220, 50, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();
 
       
       ctx.beginPath();
       ctx.arc(260, 55, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();
 
       ctx.beginPath();
       ctx.arc(400, 45, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();

       ctx.beginPath();
       ctx.arc(430, 40, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();
  
       ctx.fillStyle='#3dd966';          //light green
       ctx.fillRect(0, 250, 500, 50);

       ctx.fillStyle='#0f6e28';          //dark green
       ctx.fillRect(0, 300, 500, 30);
     
       ctx.fillStyle='#bd710f';
       ctx.fillRect(170, 230, 170, 70);
       
       ctx.fillStyle='yellow';
       ctx.fillRect(200, 250, 30, 30);
       
       ctx.fillStyle='yellow';
       ctx.fillRect(280, 250, 30, 30);

       ctx.fillStyle='red';
       ctx.fillRect(185, 200, 140, 30);

       ctx.beginPath();
       ctx.strokeStyle = "red"; 
       ctx.moveTo(175, 225);
       ctx.lineTo(190, 203);

       ctx.moveTo(195, 225);
       ctx.lineTo(170, 225);

       ctx.lineWidth = 13;

       ctx.moveTo(310, 225);
       ctx.lineTo(340, 225);
       ctx.moveTo(320, 204);
       ctx.lineTo(335, 225);
       

       ctx.stroke();
       ctx.lineWidth = 13;
       
       ctx.beginPath();
       ctx.lineWidth = "4";
       ctx.strokeStyle = "#422a0b"; 
       ctx.moveTo(20, 300);
       ctx.lineTo(20, 250);
       ctx.moveTo(40, 300);
       ctx.lineTo(40, 250);
       ctx.moveTo(80, 300);
       ctx.lineTo(80, 250);
       ctx.moveTo(100, 300);
       ctx.lineTo(100, 250);
       ctx.moveTo(60, 300);
       ctx.lineTo(60, 250);
       ctx.moveTo(120, 300);
       ctx.lineTo(120, 250);
       ctx.moveTo(140, 300);
       ctx.lineTo(140, 250);
       ctx.moveTo(360, 300);
       ctx.lineTo(360, 250);
       ctx.moveTo(380, 300);
       ctx.lineTo(380, 250);
       ctx.moveTo(400, 300);
       ctx.lineTo(400, 250);
       ctx.moveTo(420, 300);
       ctx.lineTo(420, 250);
       ctx.moveTo(440, 300);
       ctx.lineTo(440, 250);
       ctx.moveTo(460, 300);
       ctx.lineTo(460, 250);
       ctx.moveTo(480, 300);
       ctx.lineTo(480, 250);
       ctx.stroke();


       ctx.beginPath();
       ctx.lineWidth = "4";
       ctx.strokeStyle = "yellow"; 
       ctx.lineCap = 'round';
       ctx.moveTo(100, 110);
       ctx.lineTo(70, 140);
      

       ctx.moveTo(30, 130);
       ctx.lineTo(70, 100);

       ctx.moveTo(40, 100);
       ctx.lineTo(65, 90);

       ctx.moveTo(35, 40);
       ctx.lineTo(65, 55);

       ctx.moveTo(90, 40);
       ctx.lineTo(80, 10);

       ctx.moveTo(120, 45);
       ctx.lineTo(170, 20);

       ctx.moveTo(140, 75);
       ctx.lineTo(175, 75);

       ctx.moveTo(120, 110);
       ctx.lineTo(140, 145);
       ctx.stroke();
       ctx.closePath();
      
       ctx.beginPath();
       
       ctx.arc(310, 100, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();

       ctx.beginPath();
       
       ctx.arc(360, 110, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();


       ctx.beginPath();
       ctx.arc(340, 85, 25, 0, 2 * Math.PI);
       ctx.fillStyle='white';
       ctx.fill();
 

       ctx.beginPath();
   
       ctx.moveTo(260,30);
       ctx.lineTo(280,30);
       ctx.lineCap = 'round';
   
            
       ctx.moveTo(450,30);
       ctx.lineTo(460,25);

       ctx.moveTo(420,60);
       ctx.lineTo(420,70);
  
       ctx.lineWidth = "15";
       ctx.strokeStyle = "white"; 
       ctx.stroke();
}

function draw2() {
   
       var ctx = canvas.getContext('2d');

       ctx.beginPath();
       
       ctx.moveTo(150,20);
       ctx.lineTo(160,10);
       ctx.lineTo(125,10);
       
       ctx.lineTo(125,35);

       ctx.lineTo(160,35);
      

       ctx.stroke();
       

       ctx.beginPath();
       ctx.moveTo(180,125);
       ctx.lineTo(125,45);
       ctx.lineTo(75,125);
       ctx.fillStyle='red';
       ctx.fill();
       ctx.closePath();
       ctx.stroke();
       
       ctx.beginPath();
       ctx.moveTo(30, 125);
       ctx.lineTo(230, 125);
       ctx.lineTo(210, 145);
       ctx.lineTo(50, 145);
       ctx.closePath();

       ctx.fillStyle = 'green';
       ctx.fill();
       ctx.stroke();
     
       
}
     





function draw3() {
   
    var ctx = canvas.getContext('2d');

    ctx.fillStyle='gray';
    ctx.fillRect(0, 0, 245, 245);
    ctx.beginPath();
       ctx.arc(120, 120, 100, 0, 2 * Math.PI);
       ctx.lineWidth = "2";
       ctx.fillStyle='yellow';
       ctx.fill();
       ctx.stroke();
       ctx.beginPath();
       ctx.rotate(.2);
       ctx.lineWidth = "2";
       ctx.arc(144, 110, 50, 0, 2 * Math.PI/2.3);
       ctx.stroke();
       ctx.beginPath();
       ctx.rotate(-.2);
       ctx.ellipse(80, 100, 15, 25, Math.PI / 1, 0, 2 * Math.PI);
       ctx.fillStyle='black';
       ctx.fill();
       ctx.stroke();

       ctx.beginPath();
       ctx.rotate(.1/5);
       ctx.ellipse(160, 98, 15, 25, Math.PI / 1, 0, 2 * Math.PI);
       ctx.fillStyle='black';
       ctx.fill();
       ctx.stroke();
}
