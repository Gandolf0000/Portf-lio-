async function getUser(username){
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
if (!response.ok){
    throw new Error("Erro")
}
return response.json();
}

module.exports = {getUser}