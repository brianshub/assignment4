$(document).ready( function(){
	
	$("a").click( function(event){
    	event.preventDefault();
	});

	// Adds random color to flipScript text
	$(document).ready(function(){
  		$("#logo").mouseover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("color", color);
  });
});


	$(".read-more").click(showMore);
	$(".read-less").click(showLess);
	$(".learn-more").click(learnMore);
	$("#logo").mouseover(flipScript);
	$("#logo").mouseout(changeBack);
	$("#jqfun").dblclick(changeText);
	$("img").dblclick(changeText2);

	// hides Show More button, displays Show Less button, and and additional content
	function showMore(){
		hideButton1();
		showButton1();
		$("#show-this-on-click").slideDown();
	}
	// Hide Show More function
	function hideButton1(){
		$(".read-more").hide();
	}
	// Display Show Less funtion
	function showButton1(){
		$(".read-less").show();
	}
	// hides Show Less button, displays Show More button, and hides additional content
	function showLess(){
		hideButton2();
		showButton2();
		$("#show-this-on-click").slideUp();
	}
	// Hide Show Less funtion
	function hideButton2(){
		$(".read-less").hide();
	}
	// Display Show More function
	function showButton2(){
		$(".read-more").show();
	}
	// hides Learn More button, and displays additional content
	function learnMore(){
		hideButton3();
		$("#learn-more-text").slideDown();
	}
	// Hide Learn More button funtion
	function hideButton3(){
		$(".learn-more").hide();
	}
	// Flips Relaxr backwards (for fun really!!)
	function flipScript(){
		cursor();
		$("h1").removeClass("logo").addClass("newlogo");
	}
	// Adds pointer to the h1 tag (no use really!!)
	function cursor(){
		$("h1").css("cursor", "pointer");
	}
	// Allows Relaxer to flip back on mouseout, and return text color back to normal
	function changeBack(){
		$("h1").removeClass("newlogo").addClass("logo").css("color", "#fff");
	}
	// Changes first h2 text on double click
	function changeText(){
		$("h2#jqfun").text("How I learned to have tons of fun with jQuery!").css("color", "#043049");	
	}
	// Chnages first h2 text back to original tet on double click
	function changeText2(){
		$("h2#jqfun").text("How I implemented Relaxr in 2 weeks and changed my life.");
	}
});






