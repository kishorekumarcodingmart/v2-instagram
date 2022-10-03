export const sendForm = async(url,dataPass) => {
  await fetch(`https://a947-115-246-250-59.in.ngrok.io/${url}`, {
    method : "POST",
    body : JSON.stringify(dataPass),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => console.log(res))

}