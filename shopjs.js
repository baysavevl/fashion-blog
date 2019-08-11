		xSlideShow = 0;
		function runSlideShow () {
			tag = document.getElementsByClassName("imgContainer");
			tag[0].style.transform = "translateX(-" + xSlideShow + "%)";
			tag[0].style.transition = "transform 1.5s";
			xSlideShow += 20;
			if (xSlideShow > 80) {
				xSlideShow = 0;
			}
			setTimeout("runSlideShow()",4000);
		}

	

		function addProduct(id) {
			var tag = document.getElementById(id);
			var str = tag.innerHTML;
			var res = str.slice(0, str.indexOf('</div>')+6);
			var size = localStorage.getItem("size");
			size++;
			localStorage.setItem("size", size);
			localStorage.setItem(size,res);

			//calc sum
			var sum = parseFloat(localStorage.getItem("sum"));
			sum = sum + parseFloat(res.substr(res.indexOf('$')+1,8));
			localStorage.setItem("sum",sum);

			refreshHeaderCart()
		}