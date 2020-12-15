var score=localStorage.getItem("key");  
document.getElementById("points").innerHTML = localStorage.getItem('key');



function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('tigerButton1').innerHTML = randLetter();
  document.getElementById('tigerButton2').innerHTML = randLetter();
  document.getElementById('tigerButton3').innerHTML = randLetter();
  document.getElementById('tigerButton4').innerHTML = randLetter();
  document.getElementById('tigerButton5').innerHTML = randLetter();
  document.getElementById('tigerButton6').innerHTML = randLetter();
  document.getElementById('tigerButton7').innerHTML = randLetter();
  document.getElementById('tigerButton8').innerHTML = "נ";


    document.getElementById('tigerButton9').innerHTML = randLetter();
  document.getElementById('tigerButton10').innerHTML = randLetter();
  document.getElementById('tigerButton11').innerHTML = randLetter();
  document.getElementById('tigerButton12').innerHTML = randLetter();
  document.getElementById('tigerButton13').innerHTML = "מ";
  document.getElementById('tigerButton14').innerHTML = randLetter();
  document.getElementById('tigerButton15').innerHTML = randLetter();
  document.getElementById('tigerButton16').innerHTML = "ר";

  function InsertLetter(id) {
      
   
         var str = document.getElementById("tiger_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("tiger_text_insert").value=res;
     
    var x = document.getElementById("tiger_text_insert").value;
    if(x=="נ  מ  ר")
   {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "orenge.html";
}, 3000);
    }
  }
  
  
