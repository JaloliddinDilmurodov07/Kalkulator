function javobi(){
    var elInput1 = document.querySelector('.input1').value
    var elInput2 = document.querySelector('.input2').value
     var elAmal = document.querySelector('.amal').value
 
     var qoshish = Number(elInput1)+Number(elInput2)
     var bolish = Number(elInput1)/Number(elInput2)
     var ayrish = Number(elInput1)-Number(elInput2)
     var kopaytirish = Number(elInput1)*Number(elInput2)
    
     if (elAmal== '+' ){
         alert( 'sini javobingiz: ' + qoshish)
     }
     else if (elAmal == '/'){
         alert( 'sini javobingiz: ' + bolish)
     }
     else if (elAmal == '-'){
         alert( 'sini javobingiz: ' + ayrish)
     }
     else if (elAmal == '*'){
         alert( 'sini javobingiz: ' + kopaytirish)
     }
 
     else{
         alert('Xatolik bor !!!')
     }
 
 
 
 
 }