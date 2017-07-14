
var info = collection('info');

page
({ 
	  path: 'pacchetti',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'pacchetti'
	          },
	  title: info.title+' | Pacchetti',
	  description: 'I nostri pacchetti speciali',
	  postBuild : function ($)
	  {	
	  	$('body').addClass('pacchetti');

	  }
});
