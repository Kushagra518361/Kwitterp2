function addUser() 
{
    user_name = document.getElementById("user_input").value ; 
    localStorage.setItem("User name", user_name) ; 
    window.location = "room.html" ;
}
$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

height = window.height;
width = window.width ; 

if(width<=300) {
    document.getElementById("splits_1").style.display = "none" ;
} 
