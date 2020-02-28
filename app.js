addEventListener('load', function(e) {

    var alphabet ="abcdefghijklmnopqrstuvwxyz";
    
    var key="cestcrypte";
    
    var word="la phrase en clair";
    
    var letter="";
    
    var outWord="";
    
    if (word.length>key.length){
     key += key;
    }
    
    for(i=0; i<=word.length; i++){
    
      if(word[i]===" "){
        letter=word[i];
        key=key.padStart(key.length+1, letter);
      }else{
        letter = alphabet.indexOf(word[i])+alphabet.indexOf(key[i]);
        //console.log(letter);
        if(letter>=alphabet.length){
        //console.log(letter);
        letter -= alphabet.length;
        //console.log(letter);
        } 
        letter = alphabet[letter];
        console.log(letter);
      }
    
      //console.log(word[i],key,letter);
      
      outWord += letter;
     document.querySelector('#test').innerHTML = outWord;
     }
    });