var score=localStorage.getItem("key"); 
document.getElementById("points").innerHTML = localStorage.getItem('key');



function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('pingButton1').innerHTML = randLetter();
  document.getElementById('pingButton2').innerHTML = "פ";
  document.getElementById('pingButton3').innerHTML = randLetter();
  document.getElementById('pingButton4').innerHTML = randLetter();
  document.getElementById('pingButton5').innerHTML = randLetter();
  document.getElementById('pingButton6').innerHTML = randLetter();
  document.getElementById('pingButton7').innerHTML = "נ"
  document.getElementById('pingButton8').innerHTML = "י";


    document.getElementById('pingButton9').innerHTML = "ן";
  document.getElementById('pingButton11').innerHTML = randLetter();
  document.getElementById('pingButton10').innerHTML = randLetter();
  document.getElementById('pingButton12').innerHTML = "ו";
  document.getElementById('pingButton13').innerHTML = "ג";
  document.getElementById('pingButton14').innerHTML = randLetter();
  document.getElementById('pingButton15').innerHTML = randLetter();
  document.getElementById('pingButton16').innerHTML = "ו";

  function InsertPingLetter(id) {
      
   
         var str = document.getElementById("ping_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("ping_text_insert").value=res;
     
    var x = document.getElementById("ping_text_insert").value;
    if(x=="פ  י  נ  ג  ו  ו  י  ן")
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
  
