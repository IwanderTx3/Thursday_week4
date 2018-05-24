
let stories = news["articles"]
let displayStories = document.getElementById("displayStories")

stories.forEach((item)=>{
    let storyItem = `<div class="displayStories">
    <div class="storyBox">
    <div>
    <img class="image" src="${item.urlToImage}"/>
    </div>
    <div>
    <h5> ${item.author}</h5>
    <h5> ${item.title}</h5>
    <h5> ${item.description}</h5>
    <a href="${item. url}"> ${item. url}</a>
       <h5> ${item.publishedAt}</h5>
    </div>
    </div>
    </div>
    `
displayStories.innerHTML += storyItem
})