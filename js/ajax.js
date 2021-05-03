$(function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Formulario',
            body: 'enviado',
            userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
         },
    })
    .then((response) => response.json())
    .then((json) => {
        respuestaApi = $("#submit").click(function(){
           confirm(json.title +' '+json.body)
        })
    });
});