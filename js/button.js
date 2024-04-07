document.querySelector('.mainshare').addEventListener('click', function(){
    userName = prompt("Lets start by asking for your screen name")
    postType = prompt("hey there " + userName + "! What would you like to post about today? \nPlease type pet, recipe, or travel")
    alert("How exciting! Lets take you to the right page")
    if (postType == "pet"){
        window.location.assign("pets.html")
    }
    if (postType == "recipe"){
        window.location.assign("recipes.html")
    }
    if (postType == "travel"){
        window.location.assign("travel.html")
    }
    else{
        alert("page does not exist")
    }
    
}
)

document.querySelector("button").addEventListener('click', function(){
    window.location.assign("index.html")
})
