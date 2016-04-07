function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}



function changeJumbo(){

    var PAGE = document.getElementById("Jumbo").className ;
    
    if (PAGE == "pageOne") {
        document.getElementById("Jumbo").className = "pageTwo";
        document.getElementById("jumboHeader").innerHTML = "Illidaaan~";
    } else {
        document.getElementById("Jumbo").className = "pageOne";
        document.getElementById("jumboHeader").innerHTML = "Dante wants YOU!";}
    

    
    
}  