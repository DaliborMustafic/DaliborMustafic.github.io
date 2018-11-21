

	function onKeyDown(event) {
			var size = Math.floor(Math.random()*255) 
			var r = Math.floor(Math.random()*255) 
			var g = Math.floor(Math.random()*255) 
			var b = Math.floor(Math.random()*255) 
			var color = "rgb(" +r+"," + g+ "," + b+")";

			var maxPoint = new Point(view.size.width, view.size.heigth);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;


			new Path.Circle(point, size).fillColor = color ;
		
	}
var path = new Path.Circle(new Point(300,300),50);
path.fillColor="red"

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 1;
	path.scale(.9)
}