var score=localStorage.getItem("key");  
document.getElementById("points").innerHTML = localStorage.getItem('key');
 

function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('usaButton1').innerHTML = randLetter();
  document.getElementById('usaButton2').innerHTML = randLetter();
  document.getElementById('usaButton3').innerHTML = randLetter();
  document.getElementById('usaButton4').innerHTML = randLetter();
  document.getElementById('usaButton5').innerHTML = randLetter();
  document.getElementById('usaButton6').innerHTML = randLetter();
  document.getElementById('usaButton7').innerHTML = randLetter();
  document.getElementById('usaButton8').innerHTML = randLetter();


    document.getElementById('usaButton9').innerHTML = "ל";
  document.getElementById('usaButton10').innerHTML = randLetter();
  document.getElementById('usaButton11').innerHTML = randLetter();
  document.getElementById('usaButton12').innerHTML = randLetter();
  document.getElementById('usaButton13').innerHTML = "ד";
  document.getElementById('usaButton14').innerHTML = randLetter();
  document.getElementById('usaButton15').innerHTML = randLetter();
  document.getElementById('usaButton16').innerHTML = "ג";

  function InsertLetter(id) {
      
   
         var str = document.getElementById("usa_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("usa_text_insert").value=res;
     
    var x = document.getElementById("usa_text_insert").value;
    if(x=="ד  ג  ל")
   {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "pese.html";
}, 3000);
    }
  }
  
  
