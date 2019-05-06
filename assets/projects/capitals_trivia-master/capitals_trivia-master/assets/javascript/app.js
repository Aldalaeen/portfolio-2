 

var questions = [{
            ques: "Whats is the capital of Jordan?",
            ans: ["Amman", "Alkarak", "Riyadh", "Ma'an"],
            name: "Jordan",
            correct: "Amman",
            divClass: ".Jordan"
        },
        {
            ques: "What is the capital of Canada?",
            ans: ["Tokyo ", "Ottawa", "Sydney", "Calgary"],
            name: "Canada",
            correct: "Ottawa",
            divClass: ".Canada"
        },
        {
            ques: "What is the capital of Spain?",
            ans: ["Cordoba", "Tolido", "Madrid", "Granada"],
            name: "Spain",
            correct: "Madrid",
            divClass: ".Spain"
        },
        {
            ques: "What is the capital of Netherland?",
            ans: ["Seville", "Amsterdam", "Ilie Nastase", "Hague"],
            name: "Netherland",
            correct: "Amsterdam",
            divClass: ".Netherland"
        },
        {
            ques: "What is the capital of Austria?",
            ans: ["Graz", "Bregenz", "Zarqa", "Vienna"],
            name: "Austria",
            correct: "Vienna",
            divClass: ".Austria"
        },
        {
            ques: "What is the capital of Thailand?",
            ans: ["Taipei", "Bangkok", "Kuala Lumpur", "Kuching"],
            name: "Thailand",
            correct: "Bangkok",
            divClass: ".Thailand"
        },
        {
            ques: "What is the capital of India?",
            ans: ["Jaipur", "New Delhi", "Aligarh", "Rabat"],
            name: "India",
            correct: "New Delhi",
            divClass: ".India"
        },
        {
            ques: "What is the capital of Egypt?",
            ans: ["Cairo", " Alexndria", "Luxur", "Dumiat"],
            name: "Egypt",
            correct: "Cairo",
            divClass: ".Egypt"
        },
        {
            ques: "What is the capital of Germany?",
            ans: ["Munich ", "Berlin", "California", "Florida"],
            name: "Germany",
            correct: "Berlin",
            divClass: ".Germany"
        },
        {
            ques: "What is the capital of Italy?",
            ans: ["Milan", "Naples", "Venice", "Rome"],
            name: "Italy",
            correct: "Rome",
            divClass: ".Italy"
        }
    ] 

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});


var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}



var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            
            clearInterval(timer);
            return;
        }
    }, 1000);

   
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    
    countdown();
   
    $('.container').fadeOut(500);
   
    $('#answerScreen').show();
    
    $('#correctScreen').append(correctAnswers);
    
    $('#wrongScreen').append(wrongAnswers);

}); 