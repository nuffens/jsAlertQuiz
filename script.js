var questions = [
    {
         prompt: "what color is the sky? \n(a)blue \nred \norange \npurple",
         response: "a"
    },
    {
         prompt: "how many days are in a week? \ntwo \neight \nfifteen \nseven",
         response: "a"
    },
    {
         prompt: "what is the first letter of the alphabet? \na \nb \nn \nj \nh \nt",
         response: "a"
    }
];

var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);