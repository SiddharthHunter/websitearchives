//global variable for the question number
var qn = 0
//load the questions from the XML File
function getQuestions() {
    obj = document.getElementById("question");
    obj.firstChild.nodeValue=("please wait");
    ajax Callback = nextQuestion;
    ajaxRequest("questions.xml");
    
}
//display the next question
function nextQuestion {
    questions = ajaxreq.responseXML.getElementsByTagName("q");
    obj = document.getElementById("question");
    if (qn < questions.length) {
        q = questions[qn].firstChild.nodeValue;
        obj.firstChild.nodeValue=q;
        
    }
}
//check the user's answer
function checkAnswer() {
    answers  = ajaxreq.responseXML.getElementsByTagName("a");
    a = answers[qn].firstChild.nodeValue;
    answerField = document.getElementById("answer");
    if (a == answerField.value) {
        alert("Correct!");
        
    }
    else {
        alert ("Incorrect! The correct answer is : " + a);
    }
    qn = qn + 1
    answerfield.value = "";
    nextQuestion();
}

// Set up the event handlers for the buttons 
obj = document.getElementById("startq");
obj.onclick = getQuestions();
ans= document.getElementById("submit");
ans.onclick=checkAnswer;