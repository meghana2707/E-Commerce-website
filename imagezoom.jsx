<html>
<head>

<meta name="viewport" content="width-device-width, initial-scale=1.0">

<style>
* {box-sizing: border-box;}

.img-zoom-container {
	position: relative;
}

.img-zoom-lens {
	position: absolute;
	border: 1px solid #d4d4d4;
	width: 60px;
	height: 60px;
}

.img-zoom-result {
	border: 1px solid #d4d4d4;
	width: 300px;
	height: 300px;
}

.img-zoom-result {
	width: 300px;
	height: 300px;
}

.dropdown:hover .dropdown-content {
		display: block;
	}
.zoom:hover {
		transition: transform 0.6s;
		transform: scale(1.07);
	}

</style>

<script>
	function imageZoom(imgID, resultID) {
		var img, lens, result, cx, cy;
		img = document.getElementById(imgId);
		result = document.getElementById(resultId);
		lens = document.createElement("DIV");
		lens.setAttribute("class", "img-zoom-lens");
		img.parentElement.insertBefore(lens, img);
		cx = result.offsetWidth / lens.offsetWidth;
		cy = result.offsetHeight / lens.offsetHeight;
		result.style.backgroundImage = "url('" + img.src +"')";
		result.style.backgroundSize = (img.width * cx) + "px" + (img.height * cy) + "px";
		lens.addEventListner("mousemove", moveLens);
		lens.addEventListner("mousemove", moveLens);
		img.addEventListner("mousemove", moveLens);
		lens.addEventListner("touchmove", moveLens);
		img.addEventListner("touchmove", moveLens);
		function moveLens(e) {
			var pos, x, y;
			e.preventDefault();
			pos = getCursorPos(e);
			x = pos.x - (lens.offsetWidth / 2);
			y = pos.y - (lens.offsetHeight / 2);
			if(x > img.Width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
			if(x < 0) {x = 0;}
			if(y > img.height - lens.offsetHeigth) {y = img.heigth - lens.offsetHeight;}
			if(y < 0) {y = 0;}
			lens.style.left = x + "px";
			lens.style.top = y + "px";
			result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
		}
		function getCursorPos(e) {
			var a, x = 0, y = 0;
			e = e || window.event;
			a = img.getBoundingClient.Rect();
			x = e.pageX - a.left;
			y = e.pageY - a.top;
			x = x - window.pageXOffset;
			y = y - window.pageYOffset;
			return {x: x, y: y};
		}
	}

</script>

<script>
	imageZoom("myimage", "myresult");
</script>

</head>
</html>
