
$(document).ready(function() {
	$(".letter").lettering();
	$(".colors").lettering();
});

$(document).ready(function() {
	// move focus to first text box
	$("#name").focus();
	$("#customization-selected").focus();
	
	// the handler for the click event of a submit button
	$("#customer_info").submit(
		function(event) {
			var isValid = true;
			
			// validate the  name entry
			var Name = $("#name").val().trim();
			if (Name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#name").next().text("");
			}
			$("#name").val(Name);

			// validate the street address entry
			var street_address = $("#street_address").val().trim();
			if (street_address == "") { 
				$("#street_address").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#street_address").next().text("");
			}
			$("#street_address").val(street_address);
			
			// validate the city entry
			var city = $("#city").val().trim();
			if (city == "") {
				$("#city").next().text("This field is required.");
				isValid = false;
			} else if( ! /^[a-zA-Z]+$/.test(city)){
				$("#city").next().text("City name must be letters");
				isValid = false;
			}
			 else {
				$("#city").next().text("");
			}
			$("#city").val(city);
			
			// validate the state entry
		
			var state = $("#state").val().trim();
			if (state == "") {
				$("#state").next().text("This field is required.");
				isValid = false;
			} else if ( state.length != 2 || ! /^[a-zA-Z]+$/.test(state)) {
				$("#state").next().text("Use 2-character letter code.");
				isValid = false;
			} else {
				$("#state").next().text("");
			}
			$("#state").val(state);
			
			// validate the zip-code entry
			//var zipPattern = [0 - 9];
			var zip = $("#zip").val().trim();
			
			if (zip == "") {
				$("#zip").next().text("This field is required.");
				isValid = false;
			} else if ( zip.length != 5  || ! /^[0-9]+$/.test(zip)) {
				$("#zip").next().text("Use 99999 format.");
				isValid = false;
			} else {
				$("#zip").next().text("");
			}
			$("#zip").val(zip);
		
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email_1").val().trim();
			if (email == "") { 
				$("#email_1").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email_1").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email_1").next().text("");
			}
			$("#email_1").val(email);
						
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();
			}
			else{
				thankYou();
			}
		} // end function
	);	// end submit
	
}); // end ready
function thankYou() {
	$("#dialog").dialog({
	});
}

Vue.component('product', {
	props:{
		name: {
			type: String,
			required: true
		},
		stock: {
			type: Number
		},
		image: {
			type: String
		}
	},
   template: `
   <div class="product">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title letter">{{ name }}</h5>
				<img :src="image" class="card-img-top">
				
				<p></p>
				<p v-if="stockEmpty()" style="color: red" > No more {{ name }} in Stock</p>
				<p>Amount of {{ name }} in cart: {{ cart }}</p>
				<button :disabled="cartEmpty()" v-on:click="removeFromCart">-</button>
				<button :disabled="stockEmpty()" v-on:click="addToCart">+</button>
				<button :disabled="cartEmpty()" onclick="location.href='FontsandColors.html'" class="btn">Customize Me</button>
				</div>
			</div>
	`,
   data: function() {
      return {
        	 cart: 0
      }
   },
	methods:{
		addToCart: function() {
			this.cart += 1;
			this.stock -= 1;
		},
		removeFromCart: function() {
			this.cart -= 1;
			this.stock += 1;
		},
		cartEmpty: function(){
			if(this.cart == 0){
				return true;
			}
			else{
				return false;
			}
		},
		stockEmpty: function(){
			if(this.stock == 0){
				return true;
			}
			else{
				return false;
			}
		},
		sendProduct: function(){
			this.emit$('product-name');
		}
	}
});
 
var products = new Vue({
	el: '#products'	,
	
	
});

var customization = new Vue({
	el: '#customization',
	data: {
		name: '',
		product: ''
	},
	methods: {
		color: function () {
			
		},
		font: function () {
			
		}
	}
});

var cols = {
  "r":"#FF0000",
  "o":"#ff6600",
  "y":"#FFFF00",
  "g":"#008000",
  "bu":"#060679",
  "pu":"#bf00ff",
  "pi":"#FF54A1",
  "bo":"#5c330a",
  "ba":"#000000"
}
	 var Clist = document.getElementsByName("color");
 	 for (var i=0;i<Clist.length;i++) {
  		 Clist[i].onclick=function() {
   		  	var col = cols[this.value];
   		 	 document.getElementById("customization-selected").style.color = col;
    	}
 	 }
function selectBold(){
		document.getElementById("customization-selected").style.fontFamily = "Ultra";
}
function selectItalic(){
		document.getElementById("customization-selected").style.fontFamily = "Allan";
}
function selectScript(){
		document.getElementById("customization-selected").style.fontFamily = "Dancing Script";
}

