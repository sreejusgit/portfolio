//Check off Specific items by clicking 
$("ul").on("click","li",function (){
	//if Li is gray we turn it black else gray	
$(this).toggleClass("completed");

	});

//CLicl on X to delete Do 
$("ul").on("click","span",function(event){

$(this).parent().fadeOut(500,function(){

$(this).remove();
})

	event.stopPropagation();

})

$("input[type='text']").keypress(function(event){

	if(event.which===13){
		console.log("you hit enter")
		var todoText=$(this).val();
		$(this).val("");

		//Create a New Li and add new Li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>")
	}
	
})

$(".fa-plus" ).click(function(){
	$("input[type='text']").fadeToggle();

})