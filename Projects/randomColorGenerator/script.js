const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber, randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerText = randomCode;
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();