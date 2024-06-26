var num1 = 0;
var num2 = 0;
function fn() {
    document.getElementById("tim").innerHTML = num1++;
    document.getElementById("tim1").innerHTML = num2 + ":";
    if (num1 > 60) {
        num1 = 0;
        num2++;
    } else if (num2 > 60) {
        // num2=0;
        // num2++;
    }
}
var sto = setInterval(fn, 500)
document.getElementById("sub").style.display = "none"
var all = [
    {},
    { question: "What is capital city of South Africa ?", options: ["Pretoria", "Cape Town", "Bloemfontein", "All of the above"], answer: 3 },
    { question: "What is the largest planet in our Solar System?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], answer: 2 },
    { question: "What is the smallest bone in the human body?", options: ["Femur", "Rib", "Sternum", "Stapes"], answer: 3 },
    { question: "Which animal is known as man's best friend?", options: ["Cat", "Dog", "Elephant", "Fish"], answer: 1 },
    { question: "Which of the following musicians was known as the King of Pop?", options: ["Elvis Presley", "Michael Jackson", "John Lennon", "Stevie Wonder"], answer: 2 },
    { question: "Which number completes the sequence? 2,5,8,11,14....", options: ["17", "18", "19", "20"], answer: 0 },
    { question: "What has a key but can't open locks?", options: ["A piano", "A door", "A car", "A phone"], answer: 0 },
    { question: "What starts with an E, ends with an E, but only contains one letter?", options: ["An envelope", "A letter", "A word", "A sentence"], answer: 1 },
    { question: "What has a face and two hands but no arms or legs?", options: ["A clock", "A watch", "A mirror", "A picture"], answer: 0 },
    { question: "What has a head, tail, but no body?", options: ["A coin", "A stamp", "A pen ", "A pencil"], answer: 0 },
    { question: "Who is known as the 'Master Blaster' in cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Jacques Kallis"], answer: 0 },
    { question: "What has to be broken before you have to use it?", options: ["A glass", "A door", "An egg", "A book"], answer: 2 },
    { question: "What is always coming but never arrives?", options: ["Yesterday", "Tomorrow", "Today", "Next Week"], answer: 1 },
    { question: "What is the name of the South African national symbol that appears on the country's coat of arms?", options: ["Lion", "Elephant", "Springbok", "Protea"], answer: 3 },
    { question: "What is the largest organ in the body?", options: ["Brain", "Heart", "Lungs", "Skin"], answer: 3 },
    { question: "Which animal is the tallest in the world?", options: ["Elephant", "Giraffe", "Lion", "Tiger"], answer: 1 },
    { question: "How many tribes do we have in South Africa?", options: ["6", "10", "8", "4"], answer: 1 },
    { question: "How many countries are there in Africa?", options: ["45", "50", "54", "60"], answer: 2 },
    { question: "What is the opposite of 'big'?", options: ["Large", "Small", "Tall", "Huge"], answer: 1 },
    { question: "Which country won the FIFA World Cup 2010?", options: ["France", "Argentina", "Spain", "South Africa"], answer: 2 },
]

var num = 0;
var ans1;

document.getElementById("all1").style.display = "none"
var alls = document.getElementById("all")
alls.style.display = "none"

document.getElementById("next").classList.add("str")
document.getElementById("allh").style.display = "none"

document.getElementById("next").addEventListener("click", function fn() {
    document.body.classList.add("chng")
    document.getElementById("allh").style.display = "block"
    document.getElementById("sub").style.display = "block"
    if (num >= all.length - 1) {
        num = 0;
        clearInterval(sto)
        num1 = 0
        num2 = 0
        document.getElementById("all").style.display = "none"
        document.getElementById("next").style.display = "none"
        document.getElementById("sub").style.display = "none"
        document.getElementById("result").style.display = "block"
        return;
    }
    ++num

    document.getElementById("next").classList.remove("str")
    document.getElementById("next").style.display = "none"

    document.getElementById("ques1").innerHTML = ` ${num}) ` + all[`${num}`].question
    document.getElementById("opt1").innerHTML = all[`${num}`].options[0]
    document.getElementById("opt2").innerHTML = all[`${num}`].options[1]
    document.getElementById("opt3").innerHTML = all[`${num}`].options[2]
    document.getElementById("opt4").innerHTML = all[`${num}`].options[3]
    ans1 = all[num].answer;

    alls.style.display = "block"
    document.getElementById("next").innerHTML = `<i class="fas fa-fast-forward"></i>`
})

var obtm = 0;
document.getElementById("sub").addEventListener("click", () => {
    var a1 = document.getElementsByName("opt")
    var ans;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i].checked == true) {
            ans = a1[i].value
            document.getElementById("next").style.display = "inline-block"
        } else if (a1[i].checked == false) {
        } else {
            document.getElementById("next").disabled = true;
        }
    }

    console.log(ans == ans1);
    if (ans == ans1) {
        ++obtm
    }

    console.log(obtm)

    if (num >= all.length - 1) {
        displayResults();
    }
})

document.getElementById("result").style.display = "none"
document.getElementById("all1").style.display = "none"
document.getElementById("result").addEventListener("click", () => {
    document.getElementById("allh").style.display = "none"
    document.body.classList.remove("chng")
    alert(" If You Want Check Your Result Through Email Fill in this Form  ")
    document.getElementById("all").style.display = "none"
    document.getElementById("all1").style.display = "block"
    document.getElementById("result").style.display = "none"
    document.getElementById("sub").style.display = "none"
})

function displayResults() {
    document.getElementById("allh").style.display = "none"
    document.body.classList.remove("chng")
    document.getElementById("resultDisplay").innerHTML = `
        Total Marks is: 20<br>
        Your Marks is: ${obtm}<br>
        Your Percentage is: ${(obtm * 100 / 20).toFixed(2)}%<br>
    `;
    document.getElementById("resultDisplay").style.display = "block";
    document.getElementById("all").style.display = "none"
    document.getElementById("next").style.display = "none"
    document.getElementById("sub").style.display = "none"
    document.getElementById("result").style.display = "none"
}

document.getElementById("submit1").addEventListener("click", () => {
    var params = {
        to_name: document.getElementById("name").value,
        from_name: "Ladapo's Quiz App",
        email: document.getElementById("email").value,
        quiz_results: generateQuizResults()
    };

    const serviceID = "service_va070an";
    const templateID = "template_3lpjun1";

    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            console.log("Email sent successfully:", response);
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            alert("Your Result Is Send To Your Email");
            location.reload()
        })
        .catch((error) => {
            console.error("Email send failed:", error);
            alert("Failed to send message. Please try again later.");
        });
});

function generateQuizResults() {
    return `
    
        Total Marks is: 20\n
        Your Marks is: ${obtm}\n
        Your Percentage is: ${(obtm * 100 / 20).toFixed(2)}%\n
    `;
}