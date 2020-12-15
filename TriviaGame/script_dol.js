var score=localStorage.getItem("key");
document.getElementById("points").innerHTML = localStorage.getItem('key');


function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('dolButton1').innerHTML = randLetter();
  document.getElementById('dolButton2').innerHTML = "פ";
  document.getElementById('dolButton3').innerHTML = randLetter();
  document.getElementById('dolButton4').innerHTML = randLetter();
  document.getElementById('dolButton5').innerHTML = randLetter();
  document.getElementById('dolButton6').innerHTML = "י";
  document.getElementById('dolButton7').innerHTML = "ן";
  document.getElementById('dolButton8').innerHTML = "ל";


    document.getElementById('dolButton9').innerHTML = randLetter();
  document.getElementById('dolButton10').innerHTML = randLetter();
  document.getElementById('dolButton11').innerHTML = "ו";
  document.getElementById('dolButton12').innerHTML = randLetter();
  document.getElementById('dolButton13').innerHTML = randLetter();
  document.getElementById('dolButton14').innerHTML = randLetter();
  document.getElementById('dolButton15').innerHTML = randLetter();
  document.getElementById('dolButton16').innerHTML = "ד";

  function InsertLetter(id) {
      
   
         var str = document.getElementById("dol_text_insert").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("dol_text_insert").value=res;
     
    var x = document.getElementById("dol_text_insert").value;
    if(x=="ד  ו  ל  פ  י  ן")
        {
   window.localStorage.setItem('key',110);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "mic.html";
}, 3000);
    }
  }

  
