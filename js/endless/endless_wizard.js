$(function	()	{

	//Form Wizard 1
	var currentStep_1 = 1;
	
	//Form Wizard 2
	var currentStep_2 = 1;
	
	$('.wizard-demo li a').click(function()	{
		alert('You must enter your information')
		return false;
	});
	 
	//Form Validation
	$('#basic-constraint').parsley( { listeners: {
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
				return false;
			}
        }
    }}); 
	
	$('#type-constraint').parsley( { listeners: {
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
				return false;
			}
        }
    }}); 
	 
	$('#formValidate1').parsley( { listeners: {
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
				alert('Registration Complete');
				return false;
			}
        }
    }}); 
	
	$('#formValidate2').parsley( { listeners: {
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
				alert('Your message has been sent');
				return false;
			}
        }
    }});

    function valButton(btn) {
        var cnt = -1;
        for (var i = btn.length - 1; i > -1; i--) {
            if (btn[i].checked) {
                cnt = i;
                i = -1;
            }
        }
    }
	 
	$('#formWizard1').parsley( { listeners: {
		onFieldValidate: function ( elem ) {
			// if field is not visible, do not apply Parsley validation!
			if ( !$( elem ).is( ':visible' ) ) {
				return true;
			}

			return false;
		},
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
					
				currentStep_1++;
                var next = currentStep_1 -1;
                var num = $( "#wizardDemo1 li" ).length;
                var percentage = (currentStep_1 / num) * 100;

                if(currentStep_1 == 1) {
                    $('#prevStep1').addClass('disabled');
                    $('#prevStep1').attr('disabled',true);
                } else if(currentStep_1 >= num) {

                 currentStep_1 = num;
                 $('#nextStep1').attr('disabled',true);
                 $('#nextStep1').add('disabled');

                }
                else {
                    $('#prevStep1').attr('disabled',false);
                    $('#prevStep1').removeClass('disabled');

                    $('#nextStep1').attr('disabled',false);
                    $('#nextStep1').removeClass('disabled');


                }

                $('#wizardDemo1 li:eq(' + next  + ') a').tab('show');
                $('#wizardProgress').css("width",percentage + '%');



                /*

                if(currentStep_1 == 1) {
                    $('#nextStep1').attr('disabled',true);
                    $('#nextStep1').addClass('disabled');
                } else {
                    $('#nextStep1').attr('disabled',false);
                    $('#prevStep1').removeClass('disabled');
                }

                $('#wizardDemo1 li:eq(' + next  + ') a').tab('show');
                $('#wizardProgress').css("width",percentage + '%');
                */

				return false;
			}
        }
    }});
	
	$('#formWizard2').parsley( { listeners: {
		onFieldValidate: function ( elem ) {
			// if field is not visible, do not apply Parsley validation!
			if ( !$( elem ).is( ':visible' ) ) {
				return true;
			}

			return false;
		},
        onFormSubmit: function ( isFormValid, event ) {
            if(isFormValid)	{
					
				currentStep_2++;
				
				if(currentStep_2 == 2)	{
					$('#wizardDemo2 li:eq(1) a').tab('show');
					
					$('#prevStep2').attr('disabled',false);
					$('#prevStep2').removeClass('disabled');
				}
				else if(currentStep_2 == 3)	{
					$('#wizardDemo2 li:eq(2) a').tab('show');
				}
				else if(currentStep_2 == 4)	{
					$('#wizardDemo2 li:eq(3) a').tab('show');
					
					$('#nextStep2').attr('disabled',true);
					$('#nextStep2').addClass('disabled');
				}
				
				return false;
			}
        }
    }});
	
	$('#prevStep1').click(function()	{
		
		currentStep_1--;
        var num = $( "#wizardDemo1 li" ).length;
		var per = ( currentStep_1 / num) * 100;
        var next = currentStep_1 - 1;

        $('#wizardDemo1 li:eq(' + next +') a').tab('show');
        $('#wizardProgress').css("width",per +'%');


		if(currentStep_1 == 1)	{
				
			$('#prevStep1').attr('disabled',true);
			$('#prevStep1').addClass('disabled');
			
			//$('#wizardProgress').css("width","33%");
		}
		else if(currentStep_1 >= 2)	{
		
			$('#wizardDemo1 li:eq(' + next + ') a').tab('show');
			//$('#wizardProgress').css("width","66%");
					
			$('#nextStep1').attr('disabled',false);
			$('#nextStep1').removeClass('disabled');

			//$('#wizardProgress').css("width","66%");
		}
		
		return false;
	});
	
	$('#prevStep2').click(function()	{
		
		currentStep_2--;
		
		if(currentStep_2 == 1)	{
		
			$('#wizardDemo2 li:eq(0) a').tab('show');
				
			$('#prevStep2').attr('disabled',true);
			$('#prevStep2').addClass('disabled');
			
		}
		else if(currentStep_2 == 2)	{
			$('#wizardDemo2 li:eq(1) a').tab('show');
		}
		
		else if(currentStep_2 == 3)	{
		
			$('#wizardDemo2 li:eq(2) a').tab('show');
					
			$('#nextStep2').attr('disabled',false);
			$('#nextStep2').removeClass('disabled');
			
		}
		
		return false;
	});
});