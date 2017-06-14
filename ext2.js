$(document).ready(function() {
	
	function move_div(){
		window_width = $(window).width();
		window_height = $(window).height();
		
	}

	
	
	
	
	function getRndInt(arg){
		return Math.floor(Math.random()*(arg));
	}
	
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	//----------------------------------------------------------------------------------------------------------------------------------------------
	
	var selAlph = new Array(26);
	var selected = new Array(26);
	var assigned = new Array(26);
	var i = 0 , j = 0;
	
	for(i=0;i<25;i++){
		selAlph[i] = 0;
		selected[i] = 0; 		
	}
	i=0;
	while(i<13){
		var ran = getRndInt(26);
		if(selected[ran]==0){
			selAlph[i] = ran ; 
			selected[ran]=1;
			i++;
		}
	}
	
	for(i=0;i<25;i++){
		selected[i] = 0;
 		assigned[i] = 50;
	}
	i=0;
	while(i<12){
		var index_1 = getRndInt(26);
		var condition1 = 0;
		if(selected[index_1]==0){
			assigned[index_1] = alphabet[selAlph[i]];
			condition1 = 1;
			selected[index_1] = 1;
		}
			if(condition1 == 1){
			i++;
			}
		
	}
	i=0;
	while(i<12){	
		var index_2 = getRndInt(26);
		var condition2 = 0;
		if(selected[index_2]==0){
			assigned[index_2] = alphabet[selAlph[i]];
			condition2 = 1;
			selected[index_2] = 1;
		}
			if( condition2 == 1 ){
			i++;
		}
	}

	for(i=0;i<25;i++){
		if(assigned[i]==50){
			assigned[i] = alphabet[selAlph[12]];
		}
	}
	
	//---------------------------------------------------------------------------------------------------------------------------------------
	
	$("table").hide();
	
	
	$("#play").click(function() {
		$("#instructions").slideUp(1000);
		$("table").fadeIn(1000);
	
	for(j=1;j<=5;j++){
			for(i=1;i<=5;i++){
				$("tr").eq(j-1).children().eq(i-1).text(assigned[(j-1)*5 + (i-1)]);
			}
		}
	});
	
	//------------------------------------------------------------------------------------------------------------------------------------------
	
	
	
	//-------------------------------------------------------------------------------------------------------------------------------------------
	
	   

	
	
	//------------------------------------------------------------------------------------------------------------------------------------------

	$("#Instructions").click(function() {
		$("#instructions").slideDown(1000);
		$("table").fadeOut(1000);
		$("#play").text('Continue...');
	});
	
});