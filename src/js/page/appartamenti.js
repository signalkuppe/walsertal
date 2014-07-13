
var info = collection('info');

page
({ 
	  path: 'appartamenti',
	  layout: 'interna',
	  blocks: { 
	  			'content': 'appartamenti'
	          },
	  title: info.title+' | Appartamenti',
	  description: 'Il residence dispone di 8 appartamenti , di cui 4 monolocali e 4 bilocali, arredati con gusto e dotati di bagno, angolo cottura, forno a microonde, frigo, tv color, e stoviglie',
	  postBuild : function ($)
	  {	
	  	$('body').addClass('appartamenti');

	  }
});

