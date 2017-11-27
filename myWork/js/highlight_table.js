var trs = document.getElementById('table1').getElementsByTagName('tr');  
window.onload = function(){  
 for( var i=0; i<trs.length; i++ ){  
  trs[i].onmousedown = function(){  
   tronmousedown(this);  
  }  
 }  
}  
function tronmousedown(obj){  
 for( var o=0; o<trs.length; o++ ){  
  if( trs[o] == obj ){  
   trs[o].style.backgroundColor = '#F0F6EA';  
  }  
  else{  
   trs[o].style.backgroundColor = '';  
  }  
 }  
} 