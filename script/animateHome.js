

setTimeout(fade_out, 4000);
function fade_out() {  
  console.log("calling fadeout new ")
  
  $('html,body').animate({ scrollTop: "100px" }, 'slow');
  
}		

