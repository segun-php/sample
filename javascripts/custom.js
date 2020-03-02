//alert('hello');
$(document).ready(function(){
	
	$('#i-nav').click(function(){
		$('#list_menu > ul').toggleClass('show');
	       
		   $(this).toggleClass('open');
			//alert('hello');   
		   
    
	
	});
});

$(document).ready(function(){
	
	$('#i-nav2').click(function(){
		$('nav').toggleClass('show2');
	       
		   $(this).toggleClass('open2');
			//alert('hello');   
		   
    
	
	});
});