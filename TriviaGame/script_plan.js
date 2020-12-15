var score=localStorage.getItem("key");  
document.getElementById("points").innerHTML = localStorage.getItem('key');
 

function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('planButton1').innerHTML = randLetter();
  document.getElementById('planButton2').innerHTML = "מ";
  document.getElementById('planButton3').innerHTML = randLetter();
  document.getElementById('planButton4').innerHTML = randLetter();
  document.getElementById('planButton5').innerHTML = randLetter();
  document.getElementById('planButton6').innerHTML = randLetter();
  document.getElementById('planButton7').innerHTML = randLetter();
  document.getElementById('planButton8').innerHTML = "ט";


    document.getElementById('planButton9').innerHTML = randLetter();
  document.getElementById('planButton10').innerHTML = "ס";
  document.getElementById('planButton11').innerHTML = randLetter();
  document.getElementById('planButton12').innerHTML = randLetter();
  document.getElementById('planButton13').innerHTML = "ו";
  document.getElementById('planButton14').innerHTML = randLetter();
  document.getElementById('planButton15').innerHTML = randLetter();
  document.getElementById('planButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("plan_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("plan_text_insert").value=res;
     
    var x = document.getElementById("plan_text_insert").value;
    if(x=="מ  ט  ו  ס")
   {
   score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "apple.html";
}, 3000);
    }
  }
  
