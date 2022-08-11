function check(){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var correct = 0;

	if (question1 == "Respiratory tract"){
		correct++;
}
    if (question2 == "Diabetes") {
    	correct++;
}
    if (question3 == "Bacteria") {
    	correct++
    }  
          
    if (question4 == "Goitre") {
    	correct++
    }  

    

    var messages = ["Good job.", "Not bad", "You really need to do better"];
    var range;

     if (correct < 1){
     	 range = 2;
     }

      if (correct > 0 && correct < 3){
     	 range = 1;
     }

        if (correct > 2){
     	 range = 0;
     }

   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

}

// reflesh page function

function myFunction() {
    location.reload();
}