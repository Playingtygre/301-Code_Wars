function capitalize(s){
  var even= [];
  for(var i = 0; i < s.length; i++){
      if (i % 2 == 0) {
          even += s[i].toUpperCase();
      }
      else {
          even += s[i].toLowerCase();
       }
       };
  
  
  var odd = [];
  for(var i = 0; i < s.length; i++){
      if (i % 2 != 0) {
          odd += s[i].toUpperCase();
      }
      else {
          odd += s[i].toLowerCase();
       }  
  }
  
return [even,odd];
};