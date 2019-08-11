		function checkForm () {
			var sum = localStorage.getItem("sum");
			if (sum == 0) {
				return false;
			}

			var name = document.userInfo.name.value;
			if (name.length < 5) {
				var tag = document.getElementById('errorBox');
				tag.innerHTML = "Name must have at least 5 character";
				document.userInfo.name.focus();
				return false;
			}

			var address = document.userInfo.address.value;
			if (address.length < 10) {
				var tag = document.getElementById('errorBox');
				tag.innerHTML = "Address must have at least 10 character";
				document.userInfo.address.focus();
				return false;
			}		
			
			var mail_form = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			if (mail_form.test(document.userInfo.email.value) == false){
				var tag = document.getElementById('errorBox');
				tag.innerHTML = "Email Wrong";
				document.userInfo.email.focus();
				return false;
			}
			
				

			var phone_form = /^[0-9]{10,11}$/;
			if (phone_form.test(document.userInfo.phone.value) == false){
				var tag = document.getElementById('errorBox');
				tag.innerHTML = "Phone number must have 10 or 11 digit 0-9";
				document.userInfo.phone.focus();
				return false;
			}

			var size = localStorage.getItem("size");
			for (var i = 1; i <= size; i++) {
				localStorage.removeItem(i);
			}
			localStorage.removeItem("sum");
			localStorage.removeItem("size");

			window.open("thanks.html");

			return true;
		}

		function refreshCheckout () {
			var sum = localStorage.getItem("sum");
			tag = document.getElementById('sumBox');
			tag.innerHTML ="$" + sum;
			refreshHeaderCart();

			if (sum == 0) {
				tag = document.getElementsByClassName('formDiv');
				tag[0].innerHTML = "You have nothing in cart!</br> Please go back to shopping";
				tag[0].style.textAlign = 'center';
				tag[0].style.fontFamily = 'Bn-Bold';
				tag[0].style.fontSize = '40px';
				tag[0].style.letterSpacing = '5px';
				tag[0].style.color = '#2F2D2D';
			}
		}