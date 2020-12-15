
var score=localStorage.getItem("key");
document.getElementById("points").innerHTML = localStorage.getItem('key');



function randLetter() {
    var letters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "ק", "צ", "ש", "ר", "ת"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
}

        document.getElementById('lionButton1').innerHTML = randLetter();
  document.getElementById('lionButton2').innerHTML = "ה";
  document.getElementById('lionButton3').innerHTML = randLetter();
  document.getElementById('lionButton4').innerHTML = randLetter();
  document.getElementById('lionButton5').innerHTML = randLetter();
  document.getElementById('lionButton6').innerHTML = randLetter();
  document.getElementById('lionButton7').innerHTML = randLetter();
  document.getElementById('lionButton8').innerHTML = randLetter();


    document.getElementById('lionButton9').innerHTML = randLetter();
  document.getElementById('lionButton10').innerHTML = randLetter();
  document.getElementById('lionButton11').innerHTML = "ר";
  document.getElementById('lionButton12').innerHTML = randLetter();
  document.getElementById('lionButton13').innerHTML = "א";
  document.getElementById('lionButton14').innerHTML = randLetter();
  document.getElementById('lionButton15').innerHTML = randLetter();
  document.getElementById('lionButton16').innerHTML = "י";

  function InserLiontLetters(id) {
      
   
        
         var str = document.getElementById("insert_lion_text").value;
         var res=str.replace("-",document.getElementById(id).innerHTML);    
         document.getElementById("insert_lion_text").value=res;
     
    var x = document.getElementById("insert_lion_text").value;
    if(x=="א  ר  י  ה")
        {
           score=parseInt(score,10)+10;
             window.localStorage.setItem('key',score);
 document.getElementById('points').innerHTML = localStorage.getItem("key");

       $("p1").show(1000);
  document.getElementById("answer").innerHTML = "יפה מאוד";
        setTimeout(function () {
   window.location.href = "tanin.html";
}, 3000);
        }
     }

  
