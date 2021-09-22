const userInput=document.querySelector(".user-input");
const translateBtn=document.querySelector("#translate-btn");
const output=document.querySelector(".output");

const dothrakiApiURL="	https://api.funtranslations.com/translate/dothraki.json";

function getTranslateURL(text){
 return dothrakiApiURL+ "?" + "text=" +text;
}

translateBtn.addEventListener("click",()=>{
  let inputText=userInput.value;

  fetch(getTranslateURL(inputText))
  .then(response => response.json())
  .then(json =>{output.innerText=json.contents.translated})
  .catch(error =>console.log(error));
})