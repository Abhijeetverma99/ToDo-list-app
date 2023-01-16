
let form = document.querySelector("form")
let firstInput = document.querySelector("#first-input")
let secondInput = document.querySelector("#second-input")
let outputDiv = document.querySelector(".output-div")



function saveTodo(e) {
    e.preventDefault()
    let headingText = firstInput.value
    let todoText = secondInput.value

    let headingDiv = document.createElement("div")
    headingDiv.className = "heading-div"

    let textDiv = document.createElement("div")
    textDiv.className = "text-div "

    let span = document.createElement("span")
    span.className = "span"
    let h2 = document.createElement("h2")
    h2.innerHTML = headingText
    let p = document.createElement("p")
    p.innerHTML = todoText
    let delBtn = document.createElement("button")
    delBtn.className = "delete-btn"
    delBtn.innerText = "Delete"


    headingDiv.appendChild(h2)
    console.log(headingDiv);

    span.appendChild(headingDiv)
    textDiv.appendChild(p)
    span.appendChild(textDiv)
    span.appendChild(textDiv)
    span.appendChild(delBtn)
    outputDiv.appendChild(span)
    console.log(outputDiv);

    form.reset()


}

form.addEventListener("submit", saveTodo)


function deletTodo(e) {
    if (e.target.className.includes("delete-btn")) {
        let span = e.target.parentElement
        outputDiv.removeChild(span)
    }
}

outputDiv.addEventListener("click", deletTodo)