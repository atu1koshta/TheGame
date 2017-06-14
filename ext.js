$(document).ready(function() {
	
	function getRndInt(arg){
		return Math.floor(Math.random()*(arg));
	}
	
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var selAlph = new Array(26);
	var selected  = new Array(26);
	var indices = new Array(26);
	var i=0;
	var j;
	
	for (i = 25; i >= 0; i--){
		selected[i] = 0;
		indices[i] = 0;
	}
	
	i = 0;
	while(i < 12)
	{
		ran = getRndInt(25);
		if (selected[ran] == 0){
			var in1 = getRndInt(25);
			while(indices[in1] == 1){
				in1 = getRndInt(25);
			}
			indices[in1] = 1;
			
			var in2 = getRndInt(25);
			while(indices[in2] == 1){
				in2 = getRndInt(25);
			}
			indices[in2] = 1;
			
			selAlph[in1] = alphabet[ran];
			selAlph[in2] = alphabet[ran];
			selected[ran] = 1;
			i++;
		}
	}
	
	ran = getRndInt(25);
	while(selected[ran] == 1)
	{
		ran = getRndInt(25);
	}
	for(var k = 0; k < 26; k++){
		if(indices[k] == 0){
			break;
			}
	}
	selAlph[k] = alphabet[ran];
		
	$("table").hide();
	$("#play").click(function() {
		$("#instructions").slideUp(1000);
		$("table").fadeIn(1000);
		
		
		$("#11").text(selAlph[0]);
		$("#12").text(selAlph[1]);
		$("#13").text(selAlph[2]);
		$("#14").text(selAlph[3]);
		$("#15").text(selAlph[4]);
		$("#21").text(selAlph[5]);
		$("#22").text(selAlph[6]);
		$("#23").text(selAlph[7]);
		$("#24").text(selAlph[8]);
		$("#25").text(selAlph[9]);
		$("#31").text(selAlph[10]);
		$("#32").text(selAlph[11]);
		$("#33").text(selAlph[12]);
		$("#34").text(selAlph[13]);
		$("#35").text(selAlph[14]);
		$("#41").text(selAlph[15]);
		$("#42").text(selAlph[16]);
		$("#43").text(selAlph[17]);
		$("#44").text(selAlph[18]);
		$("#45").text(selAlph[19]);
		$("#51").text(selAlph[20]);
		$("#52").text(selAlph[21]);
		$("#53").text(selAlph[22]);
		$("#54").text(selAlph[23]);
		$("#55").text(selAlph[24]);
	});
	
	

	$("#Instructions").click(function() {
		$("#instructions").slideDown(1000);
		$("table").fadeOut(1000);
		$("#play").text('Continue...');
	});
	
});


//----------------------------------flip------------------------------------------------

