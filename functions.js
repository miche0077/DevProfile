let name = document.getElementById('name')
let avatar = document.getElementById('avatar')
let biografia = document.getElementById('bio')
let url = document.getElementById('url')
let login = document.getElementById('login')
let locat = document.getElementById('location')
let twit = document.getElementById('twitter')
let rep = document.getElementById('repositories')
fetch('https://api.github.com/users/miche0077')
.then((respose) =>{
    return respose.json()
    
})
.then((body)=>{
    console.log(body)
    name.innerText = body.name;
    avatar.src = body.avatar_url;
    biografia.innerText = body.bio;
    url.innerHTML = 'Visit my profile:' + " " + body.html_url;
    login.innerText = "My user:" + " " + body.login;
    locat.innerHTML = "My location:"+ " " + body.location;
    twit.innerText = "My Twitter:"+ " "+ body.twitter_username
    rep.innerText = "Number of repositories:"+ " " + body.public_repos
    return body
}).catch( e => console.log(e))



    

