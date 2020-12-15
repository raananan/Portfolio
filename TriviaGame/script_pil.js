var score=localStorage.getItem("key");  
document.getElementById("points").innerHTML = localStorage.getItem('key');
 

function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('pilButton1').innerHTML = randLetter();
  document.getElementById('pilButton2').innerHTML = randLetter();
  document.getElementById('pilButton3').innerHTML = randLetter();
  document.getElementById('pilButton4').innerHTML = randLetter();
  document.getElementById('pilButton5').innerHTML = randLetter();
  document.getElementById('pilButton6').innerHTML = randLetter();
  document.getElementById('pilButton7').innerHTML = randLetter();
  document.getElementById('pilButton8').innerHTML = "ל";


    document.getElementById('pilButton9').innerHTML = randLetter();
  document.getElementById('pilButton10').innerHTML = "פ";
  document.getElementById('pilButton11').innerHTML = randLetter();
  document.getElementById('pilButton12').innerHTML = randLetter();
  document.getElementById('pilButton13').innerHTML = "י";
  document.getElementById('pilButton14').innerHTML = randLetter();
  document.getElementById('pilButton15').innerHTML = randLetter();
  document.getElementById('pilButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("pil_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("pil_text_insert").value=res;
     
    var x = document.getElementById("pil_text_insert").value;
    if(x=="פ  י  ל")
  {
   score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "plan.html";
}, 3000);
    }
  }
  
  
