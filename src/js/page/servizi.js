
var info = collection('info');

page
({ 
	  path: 'servizi',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'servizi'
	          },
	  title: info.title+' | Servizi',
	  description: 'I nostri servizi per il tuo soggiorno: fitness, sauna e solarium',
	  postBuild : function ($)
	  {	
	  	$('body').addClass('servizi');

	  }
});

