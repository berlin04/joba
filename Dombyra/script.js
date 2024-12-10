$(document).ready(function(){
    $(".flip").click(function(){
        $(".ad").slideToggle()
    })
})

// $(document).ready(function(){
//     $(".flip").click(function(){
//         $(".ad").animate({right:'200px', opacity: '0.4'}, 1000)
//         $(".ad").animate({left:'0px', opacity: '0.1'}, 2000)

//         // $(".ad").animate({right:'200px', opacity: '1.0'}, 1000)

//         // $(".ad").animate({right:'200px', opacity: '1'}, 1000)
//         // $(".ad").animate({left:'0px', opacity: '0.4'}, 2000)
//     })
// })

// $(document).ready(function(){
//     $(".flip2").click(function(){
//         $(".ad").stop()
//     })
// })

function changeFun() {
    let x = document.getElementById("fn")    
        x.value = x.value.toUpperCase()    
}

function changeImg() {
    let img = document.getElementById("main")
    console.log(img.src)
    if(img.src == "file:///C:/Users/Asus/html_css_js/final/finProject/images/Dombyra.png"){
        img.src = "images/dombyra2.png"
    }
    else {
        img.src = "images/Dombyra.png"        
    }
}

function changeSize() {
    let chImg = document.getElementById("u_img")
    console.log(chImg.style.height)
    if (chImg.style.height == "500px") {
        chImg.style.height = "600px"
    }
    else {
        chImg.style.height = "500px"
    }
}