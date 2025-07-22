function back() {
    window.location.href="https://miroshkin0207.github.io/maks"
}
function getRandom(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min
}
readyFeedbacks = [
    "Это очень крутое приложение! Невероятно удобный и приятный для глаз интерфейс, высокое качество звонков, возможность установки аватара и многое другое! Одназначно 5 звёзд!",
    "Отличное приложение! (Текст не изменять, всё, что в скобках, удалить, оплата после публикации произойдёт на указанные реквизиты в течение 15 минут).",
    "Ловит даже на парковке!",
    "Ловит даже на морковке!",
    "Идеальный аналог Телеграма, здесь есть всё то же и даже больше! Мне нравится. А 1-звёздочные отзывы - это всё накрутка недружественных стран.",
    "Превосходное приложение, идеально для общения и звонков! Особенно мне нравится безопасность!"
]
let eval = Number(document.querySelector("#evaluation").innerHTML)
let countEvals = 0
const parent = document.querySelector("#grayRect")
for (let i = 1; i <= 10; i++) {

    const parentForPair = document.createElement("div")
    parentForPair.classList.add("parentForPair")

    let avatar = document.createElement("img")
    avatar.src = "avatar.png"
    avatar.classList.add("avatars")

    let nick = document.createElement("p")
    nick.innerHTML = "Бот"
    nick.classList.add("nicks")
    
    let feedback = document.createElement("p")
    feedback.innerHTML = readyFeedbacks[getRandom(0, 5)]  
    feedback.classList.add("comments")

    parent.appendChild(feedback)
    parentForPair.appendChild(avatar)
    parentForPair.appendChild(nick)
    parent.appendChild(parentForPair)
    countEvals++
    eval = (eval + 5) / countEvals
    document.querySelector("#evaluation").innerHTML = eval
}