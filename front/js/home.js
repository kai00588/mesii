console.log('working fine')
$(document).ready(function () {
    $.get('/movies',function(data,stauts){
        var movies = data.data
        movies.map(function(value,index){
            $(".top-movies").append(`
            <div class='card'>
                <img src='' alt='No Image Found'/>
                <div class='meta'>
                    <h2>${value}</h2>
                </div>
            </div>
            `)
        })
    })
});