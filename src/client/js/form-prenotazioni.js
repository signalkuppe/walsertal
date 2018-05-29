$(document).ready(function()
{
	if($('#prenotazioni').length)
	{
		var $form= $('#prenotazioni');

		$form.submit(function (e)
		{

		    var isValid = true;

		    if($('#arrival-date').val() == "" || $('#departure-date').val()== "" ){
		        isValid = false;
		        if($('body').data('language')=='it')
		        	alert('Completa tutti i campi prima di inviare il modulo')
		        if($('body').data('language')=='en')
		        	alert('Fill the required fields')
		       	
		        return false;
		    }

		    if (isValid)
		    {
		    	e.preventDefault();
		    	var arrivo = $('#arrival-date').val(),
		    		partenza = $('#departure-date').val(),
		    		adulti= $('#adulti').val(),
		    		bambini= $('#bambini').val();

				window.location = '/contatti.html?arrivo='+arrivo+'&partenza='+partenza+'&adulti='+adulti+'&bambini='+bambini+'';
		    }

		});
	}

	if($('#completa-prenotazione').length)
	{
		function GetQueryStringParams(sParam)
		{
		    var sPageURL = window.location.search.substring(1);
		    var sURLVariables = sPageURL.split('&');

		    for (var i = 0; i < sURLVariables.length; i++)
		    {
		        var sParameterName = sURLVariables[i].split('=');
		        if (sParameterName[0] == sParam)
		        {
		            return sParameterName[1];
		        }
		    }
		}

		$('#arrival-date').val(GetQueryStringParams('arrivo'));
		$('#departure-date').val(GetQueryStringParams('partenza'));
		$('#adulti').val(GetQueryStringParams('adulti'));
		$('#bambini').val(GetQueryStringParams('bambini'));

	

	    $('#completa-prenotazione').submit(function (e)
		{

		var isValid = true,
		emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		    if($('#arrival-date').val() == "" || $('#departure-date').val()== "" || !emailReg.test($('#Field9').val()) || !$('#privacy').is(':checked')){
		        isValid = false;
		        if($('body').data('language')=='it')
		        	alert('Completa tutti i campi prima di inviare il modulo')
		        if($('body').data('language')=='en')
		        	alert('Fill the required fields')
		       	
		        return false;
		    }
		    else {
		    	console.log('ok')
		    	return true;
		    }
		});

	}
})

