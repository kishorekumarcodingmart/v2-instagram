export const sendForm = (url,dataPass, token) => {
    return fetch(`${process.env.REACT_APP_API_KEY}${url}`, {
    method : "POST",
    body : JSON.stringify(dataPass),
    headers: { 'Content-Type': 'application/json', 'x-access-token' : token },
  })
  .then(res => res.json())

}