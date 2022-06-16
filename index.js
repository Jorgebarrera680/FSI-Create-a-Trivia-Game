let username = window.prompt('please enter your name')

let userscore = 0

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let useranswer = window.prompt(question.text)

    if(useranswer === question.correctanswer){
        userscore = userscore + 10
    }

}
window.alert('your score is:' +userscore)
