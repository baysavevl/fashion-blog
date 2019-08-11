		function refreshCart() {
			var res = '';
			var size = localStorage.getItem("size");
			for (var i = 1; i <= size; i++) {
				var code = localStorage.getItem(i);
				if (code != null && code != "undefined") {
					res = res + "<li>" + code;
					res = res + "<div class='removeProduct'>";
					res = res + "<span onclick='removeProduct(" + i + ");'>";
					res = res + "REMOVE FROM CART";
					res = res + "</span></div>";
					res = res + "</li>";
				}
			}
			// alert(res);
			var tag = document.getElementsByClassName("listProduct");
			tag[0].innerHTML = res;
			var sum = localStorage.getItem("sum");
			tag = document.getElementById('sumBox');
			tag.innerHTML ="$" + sum;
			refreshHeaderCart();
		}

		function removeProduct(i) {
			//calc sum
			var res = localStorage.getItem(i);
			var sum = parseFloat(localStorage.getItem("sum"));
			sum = sum - parseFloat(res.substr(res.indexOf('$')+1,8));
			localStorage.setItem("sum",sum);
			//remove
			localStorage.removeItem(i);
			refreshCart();
		}