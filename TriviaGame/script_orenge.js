 var score=localStorage.getItem("key");
  document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('orengeButton1').innerHTML = randLetter();
  document.getElementById('orengeButton2').innerHTML = randLetter();
  document.getElementById('orengeButton3').innerHTML = "ת";
  document.getElementById('orengeButton4').innerHTML = randLetter();
  document.getElementById('orengeButton5').innerHTML = randLetter();
  document.getElementById('orengeButton6').innerHTML = randLetter();
  document.getElementById('orengeButton7').innerHTML = randLetter();
  document.getElementById('orengeButton8').innerHTML = "פ";


    document.getElementById('orengeButton9').innerHTML = randLetter();
  document.getElementById('orengeButton10').innerHTML = "ו";
  document.getElementById('orengeButton11').innerHTML = randLetter();
  document.getElementById('orengeButton12').innerHTML = randLetter();
  document.getElementById('orengeButton13').innerHTML = "ז";
  document.getElementById('orengeButton14').innerHTML = randLetter();
  document.getElementById('orengeButton15').innerHTML = randLetter();
  document.getElementById('orengeButton16').innerHTML = randLetter();

  function InsertOrengeLetter(id) {
      
   
         var str = document.getElementById("orenge_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("orenge_text_insert").value=res;
     
    var x = document.getElementById("orenge_text_insert").value;
    if(x=="ת  פ  ו  ז")
   {
   score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "usa.html";
}, 3000);
    }
  }
  