
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
	  	var next = parseInt(new Date().getFullYear()) + 1;
	  	$('body').addClass('prezzi');
	  	$('.year').each(function()
	  	{
	  		$(this).text(new Date().getFullYear())
	  	})
	  	$('.yearnext').each(function()
	  	{
	  		$(this).text(new Date().getFullYear() +'/'+next)
	  	})
	  }
});

