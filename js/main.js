 $(document).ready(function(){


 	if(window.location.href.indexOf('index') > -1){
 		//Slider

		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
		  });
 	}
 	

 	//Posts

 	if(window.location.href.indexOf('index') > -1){
 	
		 	var posts = [

		 			{
		 				title: "Germinación",
			 			date: 'Publicado el día: ' + moment().format("MMMM Do YYYY"),
			 			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea.   "
		 			},
		 				{
		 				title: "Plantación",
			 			date: moment().format("MMMM Do YYYY"),
			 			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea.   "
		 			},
		 				{
		 				title: "Cultivo",
			 			date: moment().format("MMMM Do YYYY"),
			 			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea.   "
		 			},
		 				{
		 				title: "Germinación",
			 			date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM"),
			 			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos atque ad distinctio quos dicta doloribus quisquam autem non odio nostrum possimus minima itaque qui, molestias consequuntur rerum optio esse ea.   "
		 			}
		 	];


		 	


		 	posts.forEach((item, index) =>{

		 		var post = `
		 			<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>${item.content}</p>
					</article>
					<a href="#" class="button-more">Leer más</a>
					`;


				$('#posts').append(post);

		 	});


 }
 	


 	//Selector de tema

 	var theme = $("#theme");

 	$("#to-green").click(function(){
 		theme.attr("href", "css/green.css");
 	});

 	$("#to-red").click(function(){
 		theme.attr("href", "css/red.css");
 	});

 	$("#to-blue").click(function(){
 		theme.attr("href", "css/blue.css");
 	});


 	//Scroll ariiba de la web

 	$('.subir').click(function(e){

 		e.preventDefault();

 		$('html, body').animate({
 			scrollTop: 0
 		}, 500);

 		return false;

 	});


 	//Login false

 	$('#login form').submit(function(){

 		var form_name=$('#form_name').val();

 		localStorage.setItem('form_name',form_name);

 	});

 		var form_name = localStorage.getItem('form_name');

 		if(form_name != null && form_name != "undefined"){

 			var about_parrafo=$('#about p');

 			
 			about_parrafo.html('<br><strong>Bienvenid@ ' + localStorage.getItem('form_name') +'</strong>');
 			about_parrafo.append("<a href='#' id='logout' >Cerrar sesión</a>")
 			
 			$('#login').hide();

 			$("#logout").click(function(){
 				localStorage.clear();
 				location.reload();
 			})
 		}
 		
 
 	//Acordeon de la pagina sobre mi

 	if(window.location.href.indexOf('about') > -1){

 		$("#acordeon").accordion();
 	}


 	//Reloj

 	if(window.location.href.indexOf('about') > -1){

 		$("#acordeon").accordion();
 	}

 	if(window.location.href.indexOf('reloj') > -1){

 		setInterval(function(){

 			var reloj = moment().format("hh:mm:ss");
 			$("#reloj").html(reloj)
 			
 		},1000);
 		
 	}

  });