
var $overlay = $('<div id="overlay"></div>');
var $button = $('<button class="go_project"></button>');
// var $photo_container = $('#proj-01');
var $data = "";

var infoPro = [
'<h1>Online Registration Form</h1><p>Responsive, mobile-friendly registration form with a wide variety of HTML form input types and attributes.<a href="https://github.com/f36Lemus/my-online-registration-Project-3" target="_blank"> Code in github.</a></p>', 
'<h1>Interactive Dashboard</h1><p> For a web application using advanced web techniques including SVG graphics and JavaScript programming. Involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.<a href="https://github.com/f36Lemus/My_web_app_dashboard_v2" target="_blank"> Code in github.</a></p>',
'<h1>Web site performance</h1><p>Here my skills about optimization of graphics, HTML, CSS, and JavaScript to take a poorly optimized page and reduce the total load size, improving significantly it performance.The original weight site was 11 MB and over 43 requests. The final output is less than 1.2 MB and 24 requests.<a href="https://github.com/f36Lemus/My-performance-optimization-v2-R" target="_blank"> Code in github.</a><p>',
"<h1>Accessibility Refactor</h1><p>For this project I modified the website files provided for the rock band 'Accessible Frog' to improve the site's accessibility for users.To allow anyone and everyone to use the web, regardless of physical or hardware differences.<a href='https://github.com/f36Lemus/accessibility_refactor_v1.6' target='_blank'> Code in github.</a></p>",
'<h1>SVG Site Update</h1><p>In this project I optimized this web page by using common techniques for adding SVG (scalable vector graphics). Because this streamlined image format is becoming a widely used graphics format, replacing other types of images on many websites.<a href="https://github.com/f36Lemus/my_svg_update_v2-2" target="_blank"> Code in github.</a></p>',
'<h1>Use a Public API to Create a Gallery</h1><p>Communication with APIs allows to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. In this project I used one API to grab data and display items in an attractive gallery of images. <a href="https://github.com/f36Lemus/my-Web-Api" target="_blank"> Code in github.</a></p>'
];

var see_projec = [
'https://f36lemus.github.io/my-online-registration-Project-3/',
'https://f36lemus.github.io/My_web_app_dashboard_v2/',
'https://f36lemus.github.io/My-performance-optimization-v2-R/',
'https://f36lemus.github.io/accessibility_refactor_v1.6/',
'https://f36lemus.github.io/my_svg_update_v2-2/',
'https://f36procom.000webhostapp.com/star-war/'
]


$(".more-info").click(function(event){
    
    var $photo_container = $(this).parent();
    $photo_container.append($button);
    $photo_container.append($overlay);
    

	event.preventDefault();
	var about_project = $(this).attr("data-tip");
	$button.show();
	$overlay.show();
	$button.transition({opacity: 1}, 600);
	$overlay.transition({opacity: .9}, 600);
	
	// $overlay.css("opacity", 1);

	
    console.log(about_project);
	

	var info_projecHTML  = '<div class="descrip-proj">';
	    info_projecHTML += '<span class="close">X</span>';
	    info_projecHTML += '<p>' + infoPro[about_project] + '</p>';
	    info_projecHTML += '</div>';
	    info_projecHTML += '<div>';
	    // info_projecHTML += '<button class="go_project">';
	    // info_projecHTML += '<a href="#">See the project</a>';
	    // info_projecHTML += '</button>';
	    // info_projecHTML += '</div>';

	$overlay.html(info_projecHTML); 

	var address_proj = '<a href="' + see_projec[about_project] + '" target="_blank">See the project</a>';

	$button.html(address_proj);

	var $close = $('.close');

	$close.click(function(){
      //Hide the overlay
      $overlay.hide(); 
      $button.hide();
      $overlay.transition({opacity: 0}, 800);
      $button.transition({opacity: 0}, 800);

  });
});