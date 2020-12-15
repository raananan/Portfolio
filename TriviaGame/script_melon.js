 var score=localStorage.getItem("key");
  document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('melonButton1').innerHTML = randLetter();
  document.getElementById('melonButton2').innerHTML = randLetter();
  document.getElementById('melonButton3').innerHTML = randLetter();
  document.getElementById('melonButton4').innerHTML = "א";
  document.getElementById('melonButton5').innerHTML = "ט";
  document.getElementById('melonButton6').innerHTML = randLetter();
  document.getElementById('melonButton7').innerHTML = randLetter();
  document.getElementById('melonButton8').innerHTML = "ב";


    document.getElementById('melonButton9').innerHTML = randLetter();
  document.getElementById('melonButton10').innerHTML = randLetter();
  document.getElementById('melonButton11').innerHTML = randLetter();
  document.getElementById('melonButton12').innerHTML = randLetter();
  document.getElementById('melonButton13').innerHTML = "י";;
  document.getElementById('melonButton14').innerHTML = randLetter();
  document.getElementById('melonButton15').innerHTML = "ח";
  document.getElementById('melonButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("melon_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("melon_text_insert").value=res;
     
    var x = document.getElementById("melon_text_insert").value;
    if(x=="א  ב  ט  י  ח")
  {
  score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "tower.html";
}, 3000);
    }
  }
  
  
