
var info = collection('info');
var appartamenti = collection('appartamenti');
var href= function (a)
{
	console.log(a.slug)
  return 'appartamenti/' + a.slug
}

appartamenti.forEach(function(a){
	page
	({ 
	      path: href(a),
	      href: href,
		  layout: 'interna',
		  blocks: { 
		  			'content': a.slug
		          },
		  title: info.title+' | '+a.title,
		  description: a.title,
		  postBuild : function ($)
		  {	

		  	$('body').addClass('appartamento');

		  }
	});
})

