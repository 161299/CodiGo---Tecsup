$(document).ready(function (){


    let sombra = $("<div></div>");
    sombra.css("position","absolute").css("width","50px").css("height","50px").css("box-shadow","0px 0px 5px #888 inset").css("top",0).css("left",0).css("borderRadius","50%").css("zIndex",3000).css("backgroundColor","#fff").css("border","none")
    $("body").append(sombra)
    
    $("#body1").mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        
        
        // console.log(`ClientX ${e.clientX}`);
        // console.log(`ClientY ${e.clientY}`);
        // console.log(`PageX ${e.pageX}`);
        // console.log(`PageY ${e.pageY}`);
        sombra.css("top",`${e.clientY-25}px`);
        sombra.css("left",`${e.clientX-25}px`);
        
    });
    
    $(".objetivo").mousemove(function (event){
        // console.log(event);
        console.log(event);
        


            Swal.fire({
                icon: 'Succes',
                text: 'Lo hiciste bien',    
                imageUrl: 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image'
            })

    })
    
});

