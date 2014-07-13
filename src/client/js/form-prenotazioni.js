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
		    	/*
		        $.ajax({
		            type: "POST",
		            url: $form.attr('action'),
		            data: $form.serialize(),
		            success: function(data){
		            },
		            error: function (){

		            }
		        });*/

		console.log('post')
					return true;
		    }

		});
	}
})

