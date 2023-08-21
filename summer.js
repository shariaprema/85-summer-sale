
function handleClickBtn(target){

const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
const li = document.createElement('li');
li.innerText = itemName;
console.log(li)

}