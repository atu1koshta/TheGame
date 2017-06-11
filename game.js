$(document).ready(function() {
	function getRndInt(){
		return Math.floor(Math.random()*(26));
	}
	
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	$("#11").text(alphabet[getRndInt()]);
	$("#12").text(alphabet[getRndInt()]);
	$("#13").text(alphabet[getRndInt()]);
	$("#14").text(alphabet[getRndInt()]);
	$("#15").text(alphabet[getRndInt()]);
	$("#16").text(alphabet[getRndInt()]);
	
	
	$("#21").text(alphabet[getRndInt()]);
	$("#22").text(alphabet[getRndInt()]);
	$("#23").text(alphabet[getRndInt()]);
	$("#24").text(alphabet[getRndInt()]);
	$("#25").text(alphabet[getRndInt()]);
	$("#26").text(alphabet[getRndInt()]);
	
	
	$("#31").text(alphabet[getRndInt()]);
	$("#32").text(alphabet[getRndInt()]);
	$("#33").text(alphabet[getRndInt()]);
	$("#34").text(alphabet[getRndInt()]);
	$("#35").text(alphabet[getRndInt()]);
	$("#36").text(alphabet[getRndInt()]);
	
	
	$("#41").text(alphabet[getRndInt()]);
	$("#42").text(alphabet[getRndInt()]);
	$("#43").text(alphabet[getRndInt()]);
	$("#44").text(alphabet[getRndInt()]);
	$("#45").text(alphabet[getRndInt()]);
	$("#46").text(alphabet[getRndInt()]);
	
	
	$("#51").text(alphabet[getRndInt()]);
	$("#52").text(alphabet[getRndInt()]);
	$("#53").text(alphabet[getRndInt()]);
	$("#54").text(alphabet[getRndInt()]);
	$("#55").text(alphabet[getRndInt()]);
	$("#56").text(alphabet[getRndInt()]);
	
	
	$("td").click(function(){
		$(this).animate({color: '#e4453A'},1000);
		$(this).addClass('color');
	});
	
	$("#hide").click(function(){
		$("td").removeClass('color').css('color','#E8F62A');
	});
	
	$("#reveal").click(function(){
		$('#hide').attr("disabled", "disabled");
		
		$("td").animate({color: '#e4453A'},1000,function enableButton(){
												$('#hide').removeAttr('disabled');
												}
		);
		$("td").addClass('color');
	});
	
	$('#cheat_box').keyup(function(){
		var cheat = $(this).val();
		
		if(cheat == "I CHEAT"){
			$("#reveal").removeAttr('disabled');
			$("#hide").removeAttr('disabled');
		}
	});
	
});

