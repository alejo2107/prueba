let x= $(document);
x.ready(inicializarEventos)

function inicializarEventos(){
    let x=$("td");
    x.click(presionFila);
}

function presionFila(){
    let x=$(this);
    x.css("background-color","#0000ff")
}