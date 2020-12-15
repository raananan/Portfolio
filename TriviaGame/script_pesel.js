var score=localStorage.getItem("key");
document.getElementById("points").innerHTML = localStorage.getItem('key');



function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('peselButton1').innerHTML = randLetter();
  document.getElementById('peselButton2').innerHTML = randLetter();
  document.getElementById('peselButton3').innerHTML = randLetter();
  document.getElementById('peselButton4').innerHTML = randLetter();
  document.getElementById('peselButton5').innerHTML = randLetter();
  document.getElementById('peselButton6').innerHTML = randLetter();
  document.getElementById('peselButton7').innerHTML = randLetter();
  document.getElementById('peselButton8').innerHTML = "פ";;


    document.getElementById('peselButton9').innerHTML = randLetter();
  document.getElementById('peselButton10').innerHTML = randLetter();
  document.getElementById('peselButton11').innerHTML = randLetter();
  document.getElementById('peselButton12').innerHTML = randLetter();
  document.getElementById('peselButton13').innerHTML = "ס";
  document.getElementById('peselButton14').innerHTML = randLetter();
  document.getElementById('peselButton15').innerHTML = randLetter();
  document.getElementById('peselButton16').innerHTML = "ל";;

  function InsertLetter(id) {
      
   
         var str = document.getElementById("pesel_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("pesel_text_insert").value=res;
     
    var x = document.getElementById("pesel_text_insert").value;
    if(x=="פ  ס  ל")
  {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "elephent.html";
}, 3000);
    }
  }
  
  
