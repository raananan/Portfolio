 var score=localStorage.getItem("key");
  document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('micButton1').innerHTML = randLetter();
  document.getElementById('micButton2').innerHTML = randLetter();
  document.getElementById('micButton3').innerHTML = randLetter();
  document.getElementById('micButton4').innerHTML = "ר";
  document.getElementById('micButton5').innerHTML = randLetter();
  document.getElementById('micButton6').innerHTML = "ק";
  document.getElementById('micButton8').innerHTML = "י";
  document.getElementById('micButton7').innerHTML = randLetter();


    document.getElementById('micButton9').innerHTML = randLetter();
  document.getElementById('micButton10').innerHTML = randLetter();
  document.getElementById('micButton11').innerHTML = "מ";
  document.getElementById('micButton12').innerHTML = "ו";
  document.getElementById('micButton13').innerHTML = randLetter();
  document.getElementById('micButton14').innerHTML = "פ";
  document.getElementById('micButton15').innerHTML = "ו";
  document.getElementById('micButton16').innerHTML = "ן";

  function InsertLetter(id) {
      
   
         var str = document.getElementById("mic_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("mic_text_insert").value=res;
     
    var x = document.getElementById("mic_text_insert").value;
    if(x=="מ  י  ק  ר  ו  פ  ו  ן")
 {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "melon.html";
}, 3000);
    }
  }
  
