async function getUser(){
    const response = await fetch('/session');
    const jsonRes = await response.json();
    console.log("From main page script");
    console.log(jsonRes.username);
    return jsonRes.username;
}
const userEl = document.getElementById("user-id");
const userNameEl = getUser().then((user) => {
    userEl.innerHTML = user;
})