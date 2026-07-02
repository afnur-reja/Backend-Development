fetch("http://localhost:3000", {
    method: 'POST',
    body:"post request"
})
.then(res => res.text())
.then(data => console.log(data))