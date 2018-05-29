
var info = collection('info');

page
({ 
	  path: 'privacy',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'privacy'
	          },
	  title: info.title+' | Privacy',
	  description: 'Privacy e condizioni',
	  postBuild : function ($)
	  {	

	  	$('body').addClass('privacy');

	  }
});

