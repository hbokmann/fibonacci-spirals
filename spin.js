function spiral() {	    
	        
	var c = document.getElementById('c');
	var context = c.getContext("2d");
	var centerx = context.canvas.width/2;
	var centery = context.canvas.height/2;

	context.clearRect(0, 0, 400, 400);

	var gradient = context.createRadialGradient(centerx,centery,10,centerx,centery,150);
  
	gradient.addColorStop(0,'#FF3300'); //orange
	gradient.addColorStop(0.4,'#600'); //brown
    gradient.addColorStop(0.7,'#FF9900'); //yellow
    gradient.addColorStop(1,'#000'); //black
    context.fillStyle=gradient;

    context.moveTo(centerx, centery);
    context.beginPath();

	var total = 600; //total count of seeds/dots, constant

	var c = 2; //size constant
	var c2 = c*3; //spacing constant

    var angle = 0; //changable angle for rotation animation

    var golden_angle = 137.5*Math.PI/180;

	function rotate() {

	    context.clearRect(0, 0, 400, 400);
		context.beginPath();
		for( var i = 1; i < total; i++ ) {
			r = Math.sqrt(i);
			t=i*angle;
			x = centerx + r * c2 * Math.cos(t);
			y = centery + r * c2 * Math.sin(t);
			context.arc(x, y,c,0,2*Math.PI,false);

		}

		if (angle>golden_angle) {
			clearInterval(interval);
		}

		context.fill();
		angle+=0.003;
	}

	var interval = window.setInterval(rotate, 50); //Looping through the function for the animation

}

window.onload = spiral;