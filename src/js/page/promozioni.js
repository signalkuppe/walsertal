
var info = collection('info');

page
({ 
	  path: 'promozioni',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'promozioni'
	          },
	  title: info.title+' | Promozioni e offerte',
	  description: 'Promozioni e offerte speciali',
	  postBuild : function ($)
	  {	

	  	$('body').addClass('promozioni');

	  }
});

