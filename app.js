document.querySelector('.inputBox').addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        document.querySelector('.submitBtn').click()
    }
})
 
let stopKeyword = ["sex","nude","fuck","vulgur","penis","vagina"]
var flag = false;
function checkKeyword(keyword){
     
     stopKeyword.forEach((item)=>{
        if (item == keyword){
            flag = true;
            
        }
        console.log("koi keyword mila")
        console.log("flag",flag)
        
        
     })
     return flag;
}


let apiKey = "DIp25B51wsY1qjGVws7amkZEc92J8TRX";

let count = 10;
// console.log(inputval)

async function giveData(){
    var inputval = document.querySelector('.inputBox').value
    const whatCame = checkKeyword(inputval);
    if( whatCame == true){
        console.log("ifchla",whatCame)
        alert("you are restricted to use this keyword")
        flag = false;
    }
    else{
        let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputval}&limit=${count}&offset=0`;
        const variableName = await fetch(finalURL);
        return variableName.json() ;
    }
    
    }

async function searchGif(){
    console.log("len",document.querySelectorAll(".imageShow")[0].children.length)
    if(document.querySelectorAll(".imageShow").length){
        document.querySelector(".imageShow").innerHTML = '';
    }
    console.log("firstconsole done")
    const result = await giveData();

    result.data.forEach((item)=> {
        var mainElem = document.createElement('div')
        mainElem.classList.add('imageBtnWrapper')
        var imageElement = document.createElement('img')
        imageElement.setAttribute("class","imageClass")
        imageElement.setAttribute("src",item.images.downsized.url)
        mainElem.appendChild(imageElement)
        var textShow = document.createElement("button")
        textShow.innerHTML = "Copy Gif"
        textShow.classList.add("copyPaste")
        mainElem.appendChild(textShow)
        document.querySelector('.imageShow').appendChild(mainElem)
        textShow.addEventListener('click',copyURLToClipBoard)
    })
}
document.querySelector('.submitBtn').addEventListener("click",searchGif)

function copyURLToClipBoard(event){
    console.log("copypaste chla",event.target.previousElementSibling )
    const urlToCopy = event.target.previousElementSibling.getAttribute("src")
    console.log("url",urlToCopy)
    navigator.clipboard.writeText(urlToCopy);
    event.target.innerHTML = "copied url ..."
    setTimeout(function(){
     event.target.innerHTML = "copy Gif"
    },1000)
}
