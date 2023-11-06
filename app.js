let apiKey = "DIp25B51wsY1qjGVws7amkZEc92J8TRX";

let count = 50;
// console.log(inputval)

async function giveData(){
    var inputval = document.querySelector('.inputBox').value
    let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputval}&limit=${count}&offset=0`;
    console.log("giveData")
    const variableName = await fetch(finalURL);
    return variableName.json() ;
    }

async function searchGif(){
    console.log("len",document.querySelectorAll(".imageShow")[0].children.length)
    if(document.querySelectorAll(".imageShow").length){
        document.querySelector(".imageShow").innerHTML = '';
    }
    console.log("firstconsole done")
    const result = await giveData();

    result.data.forEach((item)=> {
        console.log("id",item)
        var imageElement = document.createElement('img')
        imageElement.setAttribute("src",item.images.downsized.url)
        document.querySelector(".imageShow").appendChild(imageElement)
    })
}
document.querySelector('.submitBtn').addEventListener("click",searchGif)