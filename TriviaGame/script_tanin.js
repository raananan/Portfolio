 var score=localStorage.getItem("key");

document.getElementById("points").innerHTML = localStorage.getItem('key');



function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('taninButton1').innerHTML = randLetter();
  document.getElementById('taninButton2').innerHTML = "ת";
  document.getElementById('taninButton3').innerHTML = randLetter();
  document.getElementById('taninButton4').innerHTML = randLetter();
  document.getElementById('taninButton5').innerHTML = randLetter();
  document.getElementById('taninButton6').innerHTML = randLetter();
  document.getElementById('taninButton7').innerHTML = randLetter();
  document.getElementById('taninButton8').innerHTML = "נ";


    document.getElementById('taninButton9').innerHTML = randLetter();
  document.getElementById('taninButton10').innerHTML = randLetter();
  document.getElementById('taninButton11').innerHTML = randLetter();
  document.getElementById('taninButton12').innerHTML = randLetter();
  document.getElementById('taninButton13').innerHTML = "י";
  document.getElementById('taninButton14').innerHTML = randLetter();
  document.getElementById('taninButton15').innerHTML = "ן";
  document.getElementById('taninButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("tanin_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("tanin_text_insert").value=res;
     
    var x = document.getElementById("tanin_text_insert").value;
    if(x=="ת  נ  י  ן")
  {
     score=parseInt(score,10)+10;
      window.localStorage.setItem('key',score);
             window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "ping.html";
}, 3000);
    }
  }
     

  
