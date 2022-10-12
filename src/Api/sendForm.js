export const sendForm = (url,dataPass) => {
    return fetch(`http://192.168.1.54:3000/${url}`, {
    method : "POST",
    body : JSON.stringify(dataPass),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())

}