function spiral() {	    
	        
	var c = document.getElementById('c');
	var context = c.getContext("2d");
	var centerx = context.canvas.width/2;
	var centery = context.canvas.height/2;

	context.clearRect(0, 0, 400, 400);

	var gradient = context.createRadialGradient(centerx,centery,10,centerx,centery,150);
	
	gradient.addColorStop(0,'#000'); //black
	gradient.addColorStop(1,'#ccc'); //grey
    context.fillStyle=gradient;

    context.moveTo(centerx, centery);
    context.beginPath();

	var total = 200; //total count of seeds/dots, constant

	// var c = Math.floor((Math.random()*3)+1); 
	var c = 2; //size constant
	var c2 = c*5; //spacing constant

    var angle = 0; //changable angle for rotation animation


	function rotate() {

	    context.clearRect(0, 0, 400, 400);
		context.beginPath();

		for( var i = 1; i < total; i++ ) {
			r = Math.sqrt(i);
			t = 137.5*Math.PI/180*i;
			t+=angle;
			x = centerx + r * c2 * Math.cos(t);
			y = centery + r * c2 * Math.sin(t);
			context.arc(x, y,c,0,2*Math.PI,false);
		}

		context.fill();
		
		angle++;
	}

	var interval = window.setInterval(rotate, 50); //Looping through the function for the animation

}

window.onload = spiral;