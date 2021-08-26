function check() {
	var c=0;
	var q1=document.quiz.Question1.value;
	var q2=document.quiz.Question2.value;
	var q3=document.quiz.Question3.value;
	var q4=document.quiz.Question4.value;
	var result=document.getElementById('result');
	var quiz=document.getElementById("quiz");
	if(q1=="HummingBird") {c++}
	if(q2=="Burj khalifa") {c++}
	if(q3=="Vande Bharat Express") {c++}
	if(q4=="Russia") {c++}	
		document.write(c);
	quiz.style.display="none";
   	
}	