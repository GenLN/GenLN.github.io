function ValidateForm()
{
	// Store
	
	// body...
	var ime=document.getElementById('Ime').value;
	var email=document.getElementById('email').value;
	var tel=document.getElementById('tel').value;

	var checks=document.getElementsByName('Dani');
	var chk_arr="";
	var multip=false;
	var rao2=false;
	var rao=false;
	


		//ime provjera
	if(ime.length<4)
		document.getElementById('pr_ime').style.display="block";
	else
		if(document.getElementById('pr_ime').style.display=="block")
				document.getElementById('pr_ime').style.display="none";


			//telefon provjera
	if(isNaN(tel)==true || tel.length<9)
		document.getElementById('pr_tel').style.display="block";
	else
		if(document.getElementById('pr_tel').style.display=="block")
				document.getElementById('pr_tel').style.display="none";
		
			//mail provjera
	if(email.length<9)
		document.getElementById('pr_email').style.display="block";
	else
		if(document.getElementById('pr_email').style.display=="block")
				document.getElementById('pr_email').style.display="none";


	var radio=document.getElementsByName('Izbor');
	var radio2=document.getElementsByName('Doba');

	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked===true)
			rao=true;
	}
	for (var i = 0; i < radio2.length; i++) {
		if(radio2[i].checked===true)
			rao2=true;
	}

	for (var i = 0; i < 6; i++) 
	{
		if(checks[i].checked===true)
		{
		chk_arr+=checks[i]+" ";
		multip=true;
		}
	}


	if(ime==="" || email===""||tel==="" ||multip===false || rao===false || rao2===false)
		document.getElementById('osobni').style.display="block";	
	else
	{
		if(document.getElementById('osobni').style.display!="none")
			document.getElementById('osobni').style.display="none";
		console.log("Uspjesno poslano!");
		alert("Uspjesno ste poslali kontakt informacije!");
		location.reload();	
	}

}