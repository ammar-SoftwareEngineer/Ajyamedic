function more(){
	let moreBtn=document.getElementById('more');
	let text=document.querySelector('.text')
	

	if(text.style.display=='inline'){
		text.style.display="none";
		moreBtn.innerHTML='اقرأ المزيد';

	}else{
		text.style.display="inline";
		moreBtn.innerHTML='اقرأ اقل';
	}
}

