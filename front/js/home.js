console.log('working fine')
$(document).ready(function () {
    // $.get('/movies',function(data,stauts){
    //     var movies = data.data
    //     movies.map(function(value,index){
    //         $(".top-movies").append(`
    //         <div class='card'>
    //             <img src='' alt='No Image Found'/>
    //             <div class='meta'>
    //                 <h2>${value}</h2>
    //             </div>
    //         </div>
    //         `)
    //     })
    // })
});
$(window).on('scroll', function(){
    if($(window).scrollTop()>=65 && !$('.navbar').hasClass('fixed')){
        $('.navbar').addClass('fixed'); 
    }
    else if($(window).scrollTop()<95 && $('.navbar').hasClass('fixed')){
       $('.navbar').removeClass('fixed') 
    }
});
$.get("https://movie-api-messi.herokuapp.com",
    function (data, textStatus, jqXHR) {
        for(let index = 0;index < 24;index ++){
            const name = data[index].name
            $(".top-movies").append(`
            <div class='card' onclick='movieClick("${name}")'>
                <img src='${data[index].img}' alt='No Image Found'/>
                <div class='meta'>
                    <h2>${data[index].name}</h2>
                </div>
            </div>
            `)
        }
    }
);
function movieClick(name){
    let data = name.split("(");
    data = data[0].trim()
    window.location.href= `/movie/${data}`
}