function ShowHideInstructions(){
       par = document.getElementById("Instructions");
    if(par.style.display == 'inline' ){
        par.style.display = 'none';
    }
    else par.style.display = 'inline';
        
        par2 = document.getElementById("list-item");
             if(par2.style.display == 'inline' ){
        par2.style.display = 'none';
    }
    else par2.style.display = 'inline';
    
        par3 = document.getElementById("item");
    if(par3.style.display == 'inline' ){
        par3.style.display = 'none';
    }
    else par3.style.display = 'inline';      
        };      
$(document).ready(function () {
  $(this).keypress(function(event) {
     if (event.which == '13') {
                event.preventDefault();}
                });  
    $(this).bind('copy paste',function(e) {
         e.preventDefault(); return false; 
      });		
 	      
console.log("test");
 addEventListener('DOMSubtreeModified', function (e) {
	if(e.target.tagName.match( "HTML") ){
		console.log(e.target);
		console.log(e.target.tagName);
		console.log(e.target.className);
		if( e.target.classList[1]== 'translated-ltr' || e.target.className=='translated-ltr' || e.target.className=='translated-rtl' || e.target.className=='gr__render_figure-eight_io translated-rtl' || e.target.className=='gr__render_figure-eight_io translated-ltr' || e.target.className=="gr__rehabq_github_io translated-rtl" || e.target.className=="gr__rehabq_github_io translated-ltr") {
			$('#not_eng_worker').val("1");
			alert("page has been translated and translation was canceled");
			console.log(not_eng_worker.value);
			};
		}
	}, return false); console.log("testdone");	   


  $('#demo-form').parsley().on('form:submit', function(formInstance) {
    try {
      window.parent.postMessage($('#demo-form').serialize(), '*');
    } catch(err) {
    console.log(err);
}
    return false;
  });

});
