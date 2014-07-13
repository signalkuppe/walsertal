
var info = collection('info');

page
({ 
	  path: 'prezzi',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'prezzi'
	          },
	  title: info.title+' | Prezzi',
	  description: 'I nostri prezzi per la stagione estiva e quella invernale',
	  postBuild : function ($)
	  {	
	  	$('body').addClass('prezzi');
	  	$('.year').each(function()
	  	{
	  		$(this).text(new Date().getFullYear())
	  	})

	  }
});

