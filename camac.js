var first_half = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Contact Us</title>
		<link rel="stylesheet" href="camac.css">
		<link rel="icon" href="camac_favicon.ico" type="image/x-icon">
		<script src="camac.js"></script>
		<style>
			section {
				font-family: verdana;
			}
		</style>
	</head>
	<body id="wrapper">
		<header>
    		<a href="camac.html"><img src="camac_logo.png" width="66" height="66" alt=""></a>
    		<a class="camac_logo" href="camac.html">CAMAC Enterprises Ltd.</a>
    		<div>
    			<input class="search_input" type="text" id="search_phrase" placeholder="Search..">
    			<button class="search_button" onclick="searchMe()">Go</button>
    		</div>
    	</header> 
		<nav>
            <table>
            	<tr>
            		<td><a href="camac.html">HOME</a></td>
					<td><a href="about.html">ABOUT US</a></td>
					<td><a href="products.html">PRODUCTS</a></td>
					<td><a href="news.html">NEWS</a></td>
					<td><a href="navigation.html">SITE MAP</a></td>
					<td><a href="contact.html">CONTACT US</a></td>
            	</tr>
            </table>
        </nav>
        <main>
        	<section>

`;
var second_half=`</section>
        </main>
        <footer>
            <div></div>
            <small>Copyright &copy; 2018 Camac Enterprises Ltd. created by Sonia (Jane) Zhang</small>
		</footer>
	</body>
</html>`

var search = '';

function sofa_fittings(search) {
	var str = "sofa settings";
	var ret;
	ret = str.includes(search);
	return ret;
}

function sinuous_spring(search) {
	var str = `CAMAC sinuous spring is approved with good quality by local sofa manufacturers. Electrophoresis surface treatment makes the spring better anti-rust protected. Assured high quality wire and well tempered, no sag spring, no break. Packing in wooden case and carton are available now for different customers' needs.`;
	var ret;
	ret = str.includes(search);
	return ret;
}

function sofa_legs(search) {
	var str = `We have various sofa legs available. Our wooden sofa legs are of good quality and competitive price. Birch, rubber wood, cherry, and beech are available. We can supply show wood for sofa and other furniture. Custom design and manufacturing are welcome.`;
	var ret;
	ret = str.includes(search);
	return ret;
}
function sofa_webbing(search) {
	var str = `We have various sofa webbings available such as CASW-5PE-40, CASW-5LG-60, CASW-5PE-80, CASW-5LJ-78, CASW-5BL-67`;
	var ret;
	ret = str.includes(search);
	return ret;
}
function sofa_sleeper(search) {
	var str = "sofa sleeper sofa mechanism sofa bed sofa bed mechanism";
	var ret;
	ret = str.includes(search);
	return ret;
}
function fiber_pads(search) {
	var str = `Fiber pad is mainly for mattress production. Hot melt, needle punch, spray glue felt/pad are available.`;
	var ret;
	ret = str.includes(search);
	return ret;
}
function gas_spring(search) {
	var str = "gas spring";
	var ret;
	ret = str.includes(search);
	return ret;
}
function non_woven(search) {
	var str = `Most popular used non woven fabrics are PP Spun-bonded non-woven fabrics.`;
	var ret;
	ret = str.includes(search);
	return ret;
}

function camac(search){
	var str = "camac CAMAC Camac about About history story";
	var ret;
	ret = str.includes(search);
	return ret;
}

function news(search) {
	var str = "news recent events promo sales promotion sale discount new products new product";
	var ret;
	ret = str.includes(search);
	return ret;
}

function contact(search) {
	var str = "contact reach address phone cell cellphone telephone email electronic mail location time";
	var ret;
	ret = str.includes(search);
	return ret;
}
function getResults(search) {
	var return_links = [];
	var i = 0;

	if (sinuous_spring(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/sinuous_spring.html';
		i++;	
	}
	if (fiber_pads(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/fiber_pads.html';
		i++;
	}
	if (non_woven(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/non_woven.html';
		i++;	
	}
	if (gas_spring(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/gas_spring.html';
		i++;
	}
	if (sofa_fittings(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/sofa_fittings.html';
		i++;
	}
	if (sofa_sleeper(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/sofa_sleeper.html';
		i++;
	}
	if (sofa_legs(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/sofa_legs.html';
		i++;
	}
	if (sofa_webbing(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/products/sofa_webbing.html';
		i++;
	}
	if (camac(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/about.html';
		i++;	
		return_links[i] = 'http://www.ansonzhang.ca/camac.html';
		i++;	
		return_links[i] = 'http://www.ansonzhang.ca/news.html';
		i++;	
		return_links[i] = 'http://www.ansonzhang.ca/contact.html';
		i++;	
	}
	if (news(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/news.html';
		i++;	
	}
	if (contact(search)) {
		return_links[i] = 'http://www.ansonzhang.ca/contact.html';
		i++;	
	}
	return return_links; 
}


function searchMe() {
	
    search = document.getElementById("search_phrase").value;
    if ('' != search) {
    	var results = getResults(search);
    	var links = '<ul>';
    	for (var i = 0 ; i < results.length; ++i) {
    		links += '<li><a href="' + results[i] + '">' + results[i] + '</a></li>';
    	}
    	links+= '</ul>';
    	var you_have_searched = '<p>You have searched "' + search +'".</p>';
    	var your_search_returns = '<p>Your search returns: </p>'
    	var contact_us = `<p>Cannot find what you're looking for? <a href="http://www.ansonzhang.ca/contact.html">Contact us</a> for more information!`;
    	var resultdoc = first_half + you_have_searched + your_search_returns + links + contact_us + second_half;
    	document.body.innerHTML = '';
    	document.write(resultdoc);
    	search = '';
    	resultdoc = '';
    	you_have_searched = '';
    	your_search_returns = '';
    	contact_us = '';
//     	document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
    } else {
    	alert('Please enter a search')
    }
}