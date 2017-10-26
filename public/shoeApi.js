$(document).ready(function() {

    var tableTemplate = document.querySelector('.shoeTamplate');
    var combineTemplate = Handlebars.compile(tableTemplate.innerHTML);
    var tableStock = document.getElementById('tableStock');


    function listStock() {
        $.ajax({
            type: 'GET',
            url: '/api/shoes',
            success: function(shoeData) {
                $.each(shoeData, function(i, shoes) {
                    console.log(shoes);
                    var html = combineTemplate({
                        shoesList: shoes
                    });

                    tableStock.innerHTML = html;
                })
            },
            error: function() {
                console.log('an error has occured');
            }
        }).done(function(results) {

        })
    }
    listStock();


    $('#addButton').on('click', function() {
        var newShoe = {
            brand: document.querySelector('.brand').value,
            size: document.querySelector('.size').value,
            in_stock: document.querySelector('.stock').value,
            color: document.querySelector('.color').value,
            price: document.querySelector('.price').value
        }
        newStock(newShoe);
        listStock();

            document.querySelector('.brand').value = "",
            document.querySelector('.size').value = "",
            document.querySelector('.stock').value = "",
            document.querySelector('.color').value = "",
            document.querySelector('.price').value = ""
    });



});

function newStock(shoes) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/api/shoes',
        data: shoes,
    }).done(function(results) {})

}
