// //Check off specific to do list by clicking
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}
// 		//turn it black
	
// 	//else
// 	else{
// 		$(this).css({
// 			color:"gray",
// 			textDecoration:"line-through"
// 		});
// 	}
// });

//short version of the above code

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//clicking on x to delete Todo
$("ul").on("click", "span", function(event){
	// alert("click a span!");
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
});

//add a listener to the input
$("input[type='text']").keypress(function(event){
	// alert("key press!");
	if(event.which === 13){
		// alert("you hit enter");
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
	}


});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

