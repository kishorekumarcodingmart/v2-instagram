export const sendForm = (url,dataPass, token, Method="POST") => {
    return fetch(`${process.env.REACT_APP_API_KEY}${url}`, {
    method : Method,
    body : JSON.stringify(dataPass),
    headers: { 'Content-Type': 'application/json', 'x-access-token' : token },
  })
  .then(res => res.json())

}