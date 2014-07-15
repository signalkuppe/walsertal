
var info = collection('info');

page
({ 
	  path: 'contatti',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'contatti'
	          },
	  title: info.title+' | Contatti',
	  description: 'Entra in contatto con noi',
	  postBuild : function ($)
	  {	
	  	$('body').addClass('contatti');

	  }
});

