function spiral() {	    
	        
	var c = document.getElementById('c');
	var context = c.getContext("2d");
	var centerx = context.canvas.width/2;
	var centery = context.canvas.height/2;

	context.clearRect(0, 0, 400, 400);

	var gradient = context.createRadialGradient(centerx,centery,10,centerx,centery,150);
  
	gradient.addColorStop(0,'#FF0000'); //red
	gradient.addColorStop(0.4,'#600'); //brown
    gradient.addColorStop(0.7,'#FF9900'); //yellow
    gradient.addColorStop(1,'#000'); //black
    context.fillStyle=gradient;

    context.moveTo(centerx, centery);
    context.beginPath();

	var total = 600; //total count of seeds/dots, constant

	var c = 2; //size constant
	var c2 = c*3; //spacing constant

    var increase = Math.PI * 2 / total;
    var angle = 0; //changable angle for rotation animation
		
	function rotate() {
	    context.clearRect(0, 0, 400, 400);
		context.beginPath();
		for( var i = 0; i < total; i++ ) {
			r = Math.sqrt(i);
			t = 137.5*Math.PI/180*i;
			angle+=increase;
			x = centerx + r * c2 * Math.cos(t) * Math.cos( angle );
			y = centery + r * c2 * Math.sin(t) * Math.cos( angle );
			context.arc(x, y,c,0,2*Math.PI,false);	 
		}

		context.fill();

		angle -= 0.06;
	}

    var interval = window.setInterval(rotate, 30); //Looping through the function for the animation    

}

window.onload = spiral;