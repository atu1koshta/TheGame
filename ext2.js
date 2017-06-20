$(document).ready(function() {
	
	
	
	function getRndInt(arg){
		return Math.floor(Math.random()*(arg));
	}
	
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	//-----------------------------------------------assigning alphabets to cards-----------------------------------------------------------------------------------------------
	
	var selAlph = new Array(26);
	var selected = new Array(26);
	var assigned = new Array(26);
	var i = 0 , j = 0, win = 0;
	
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
	var j;
	for(i=0;i<25;i++){
		if(assigned[i]==50){
			assigned[i] = "";
			j = i;
		}
	}
	
	//---------------------------------------------------------------------------------------------------------------------------------------
	
	$("table").hide();
	$("#turn").hide();
	$("#score").hide();
	$("#Win").hide();
	$("#finalScore").hide();
	$('#totalTurns').hide();
	
	
	ondragstart = function(){return false;};
	
	function assign(){
		for(j=1;j<=5;j++){
			for(i=1;i<=5;i++){
				$("tr").eq(j-1).find('span').eq((i-1)*2).text(assigned[(j-1)*5 + (i-1)]);
			}
		}
	}
	$("#play").click(function() {
		$("#instructions").slideUp(1000);
		$("table").fadeIn(1000);
		$("#turn").fadeIn(500);
		$("#score").fadeIn(500);
		assign();
	});
	
	//------------------------------------------------------------------------------------------------------------------------------------------
	
	function removeClass(){                                                                           //function to reflip card
		$('td').removeClass('flipped');
		
	}
	var win = 0;
	function same(){
		$('#'+ (id[0])).removeClass('card');
		$('#'+ (id[1])).removeClass('card');
		win++;
		if (win==12){
		$("td").hide();
		$("#Win").fadeIn(2000);
		$("#turn").hide();
		$("#score").hide();
		$("#finalScore").fadeIn(2500);
		$('#totalTurns').fadeIn(2500);
		$('#play').text('PLAY AGAIN');
		$('a').text('PLAY AGAIN');
		$('#Instructions').click(function(){
			location.reload();
			$("#instructions").slideUp(1000);
		});
		$('playAgain').show();
	}
	}
	
	
	var count = 0;
	var score = 0;
	var turn = 0;

	var id = new Array(2);
	                                                     
	var letter = new Array(2);
	 
    
	$('td').click(function(){
		
	$(this).addClass('flipped');
	
	
	
	
	
	
	id[count] = parseInt($(this).attr('id')); 
	letter[count] = $(this).find('.back').text();
	count++;
	
	if(count==2){
		if (id[0] != id[1] && letter[0] == letter[1]){
			setTimeout(same,300);
			score+=5; 
			count=0;
			turn++;
		}
		else{
			setTimeout(removeClass,500);
			score-=1;
			count=0;
			turn++;
		}
	}
	
	$('.count').text(turn);
	$('.score').text(score);
	
	if(score>=50){
	$('#performance').text('You played Superb!!! or It might be a LUCK...');
	}else if(score>=40 && score<50){
		$('#performance').text('Excellent Work......your memory is awesome');
	}else if(score>=20 && score<40){
		$('#performance').text('Nice try......you can score more next time');
	}else if(score<20 && score >=10){
		$('#performance').text('you somehow completed....maybe by not using your memory at peak');
	}else if(score>0 && score<10 ){
		$('#performance').text('Average play !! Better luck next time');
	}else{
		$('#performance').text('Poor Performance!!')
	}
	
	$('#finalScore').html("FINAL SCORE <br/>" + score);

	$('#totalTurns').html("TOTAL TURNS <br/>" + turn);
	
	
	});
	
	
	
	
	
	$("#Instructions").click(function() {
		$("#instructions").slideDown(1000);
		$("table").fadeOut(1000);
		$("#turn").fadeOut(1000);
		$("#score").fadeOut(1000);
		$("#play").text('Continue...');
	});
	
});

