
window.localStorage.setItem('key',0);
var score=localStorage.getItem("key");
document.getElementById('points').innerHTML = localStorage.getItem("key");

function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

        document.getElementById('myButton1').innerHTML = randLetter();
  document.getElementById('myButton2').innerHTML = "כ";
  document.getElementById('myButton3').innerHTML = randLetter();
  document.getElementById('myButton4').innerHTML = randLetter();
  document.getElementById('myButton5').innerHTML = randLetter();
  document.getElementById('myButton6').innerHTML = randLetter();
  document.getElementById('myButton7').innerHTML = randLetter();
  document.getElementById('myButton8').innerHTML = "ל";


    document.getElementById('myButton9').innerHTML = randLetter();
  document.getElementById('myButton10').innerHTML = randLetter();
  document.getElementById('myButton11').innerHTML = randLetter();
  document.getElementById('myButton12').innerHTML = randLetter();
  document.getElementById('myButton13').innerHTML = "ב";
  document.getElementById('myButton14').innerHTML = randLetter();
  document.getElementById('myButton15').innerHTML = randLetter();
  document.getElementById('myButton16').innerHTML = randLetter();

  function InsertLetter(id) {
      
   
         var str = document.getElementById("intexet").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("intexet").value=res;
     var showelem=document.getElementById("answer").innerHTML;
    var x = document.getElementById("intexet").value;
    if(x=="כ  ל  ב")
    {
score=parseInt(score,10)+10;
      window.localStorage.setItem('key',this.score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = " ! תשובה נכונה";
       setTimeout(function () {
   window.location.href = "lion.html";
}, 3000);
    }
     }

  
