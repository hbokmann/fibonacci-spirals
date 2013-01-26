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

	var c = 3; //size constant
	var c2 = c*2; //spacing constant

    var angle = 0; //changable angle for rotation animation

    var count = 1; //changable count of seeds/dots

	function rotate() {

	    context.clearRect(0, 0, 400, 400);
		context.beginPath();

		for( var i = 1; i < count; i++ ) {
			r = Math.sqrt(i);
			t = 137.5*Math.PI/180*i;
			t+=angle;
			x = centerx + r * c2 * Math.cos(t);
			y = centery + r * c2 * Math.sin(t);
			context.arc(x, y,c,0,2*Math.PI,false);
		}

		context.fill();
		
		angle--;

		if(count<total && count>0) {
			count+=10;
		} else if (count>total && total!=0) {
			total=0;
		} else if (count>total && total==0) {
			count-=10;
		} else if (count<0) {
			total=600;
			count+=10;
		}

	}

	var interval = window.setInterval(rotate, 50); //Looping through the function for the animation

}

window.onload = spiral;