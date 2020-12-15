 var score=localStorage.getItem("key");
  document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('towerButton1').innerHTML = randLetter();
  document.getElementById('towerButton2').innerHTML = "מ";
  document.getElementById('towerButton3').innerHTML = randLetter();
  document.getElementById('towerButton4').innerHTML = randLetter();
  document.getElementById('towerButton5').innerHTML = randLetter();
  document.getElementById('towerButton6').innerHTML = randLetter();
  document.getElementById('towerButton7').innerHTML = randLetter();
  document.getElementById('towerButton8').innerHTML = "ל";


    document.getElementById('towerButton9').innerHTML = "ג";
  document.getElementById('towerButton10').innerHTML = randLetter();
  document.getElementById('towerButton11').innerHTML = randLetter();
  document.getElementById('towerButton12').innerHTML = randLetter();
  document.getElementById('towerButton13').innerHTML = "ד";
  document.getElementById('towerButton14').innerHTML = randLetter();
  document.getElementById('towerButton15').innerHTML = randLetter();
  document.getElementById('towerButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("tower_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("tower_text_insert").value=res;
     
    var x = document.getElementById("tower_text_insert").value;
    if(x=="מ  ג  ד  ל")
   {
   score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "tiger.html";
}, 3000);
    }
  }
  
  
