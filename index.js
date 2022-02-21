if(!document.cookie && window == window.parent){
  
}else{
  for(let i of document.cookie.split(';')){
    if( i.split('=')[0].match('fch-id')){
      fch_id = i.split('=')[1];
    }
    if( i.split('=')[0].match('fch-name')){
      fch_name = i.split('=')[1];
    }
  }
}
var server_name;
if(document.location.search.substring(1)) {
  for(let i of document.location.search.substring(1).split('&')){
    if( i.split('=')[0].match('server_name')){
      server_name = decodeURI(i.split('=')[1]);
    }
  }
}
function change(from_name) {
  document.getElementById('home').style.display = "none";
  document.getElementById('chat').style.display = "none";
  document.getElementById('setting').style.display = "none";
  document.getElementById(from_name).style.display = "block";
}