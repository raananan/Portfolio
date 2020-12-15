 var score=localStorage.getItem("key");
  document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('appleButton1').innerHTML = randLetter();
  document.getElementById('appleButton2').innerHTML =  randLetter();
  document.getElementById('appleButton3').innerHTML = randLetter();
  document.getElementById('appleButton4').innerHTML = randLetter();
  document.getElementById('appleButton5').innerHTML = "ת";
  document.getElementById('appleButton6').innerHTML = randLetter();
  document.getElementById('appleButton7').innerHTML = "פ";
  document.getElementById('appleButton8').innerHTML = randLetter();


    document.getElementById('appleButton9').innerHTML = randLetter();
  document.getElementById('appleButton10').innerHTML = randLetter();
  document.getElementById('appleButton11').innerHTML = randLetter();
  document.getElementById('appleButton12').innerHTML = randLetter();
  document.getElementById('appleButton13').innerHTML = "ו";
  document.getElementById('appleButton14').innerHTML = randLetter();
  document.getElementById('appleButton15').innerHTML = randLetter();
  document.getElementById('appleButton16').innerHTML = "ח";

  function InsertLetter(id) {
      
   
         var str = document.getElementById("apple_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("apple_text_insert").value=res;
     
    var x = document.getElementById("apple_text_insert").value;
    if(x=="ת  פ  ו  ח")
        {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',this.score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "dolphine.html";
}, 3000);
    }
  }
  
