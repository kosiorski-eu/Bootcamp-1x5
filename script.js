(function($) {

    $(document).ready(function() {
		
		var button = $(".button"),
			text = $(".text"),
			ul = $("<ul>").addClass("list");
		
		$("#container").append(ul);
		
		button.on("click", function(e){
			
			e.preventDefault();
			
			
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/users",
				success: function(data, status, XHR){
					
					for(var i = 0; i < data.length; i++ ){
						
						var name = $("<li>").addClass("list-item " + i).text(
							"Name: " + data[i].name
							+ ", Username: " + data[i].username
							+ ", E-mail: " + data[i].email);
						
						ul.append(name);
					 
						
						
						console.log(data[i].name);
					}
					
				}
				
			});
			
			

 				
			
		})
    });

})(jQuery);


















