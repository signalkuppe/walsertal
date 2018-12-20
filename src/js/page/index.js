
var info = collection('info');

page
({ 
	  path: 'index',
	  layout: 'index',
	  blocks: { 
	  			'content': 'index'
	          },
	  title: info.title,
	  description: info.description,
	  postBuild : function ($)
	  {	
	  	$('body').addClass('front');
		

	  }
});

