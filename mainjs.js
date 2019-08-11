		function init(){
			if (localStorage.getItem("size") == null || localStorage.getItem("size") =="undefined") {
				localStorage.setItem("size", 0);
				localStorage.setItem("sum", 0);
			}

			var main = document.getElementsByClassName("mainDiv");
			main[0].style.minHeight = window.innerHeight + "px";
		}

		function refreshHeaderCart() {
			var sum = localStorage.getItem("sum");
			tag = document.getElementById('headerSumBox');
			tag.innerHTML ="$" + sum;
		}