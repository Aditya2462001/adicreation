var imagefile = document.querySelector('#imagefile');

var canvas = document.querySelector('#canvas'); 

var btn = document.querySelector('#button'); 

const inpBtn = document.querySelector('.imageInpBtn');

const fileName = document.querySelector('.name-file');



btn.onclick =handleImageTOPdf ;
function  handleImageTOPdf()
{
/////convert the canvas into pdf using this function
    html2canvas(canvas,{
        onrendered: function(canvas)
        {
            var imageData = canvas.toDataURL('image/png');

            var doc = new jsPDF('p','mm');

            doc.addImage(imageData,'png',5,10,200,180);
            doc.save('download.pdf');
        }
    });
        function down(){
        Swal.fire({
            icon: "success",
            title:"Image downloaded successfully",
            text :"Thank you for view the site ",
            footer:"&copy all rights reserved by web creation",
         });
        }
        down();
}
var ctx = canvas.getContext('2d');




inpBtn.addEventListener("click",function()
{
    imagefile.click();
});

///create the choosen image into canvas and give preview

imagefile.addEventListener("change",handleImage,false);

 function  handleImage(e)
 {

   console.log(e.value);
    if(e.target.files[0])
    {
   var reader = new FileReader();

   reader.onload = function (event)
   {
         var image = new Image();
         image.onload = function ()
         {
             canvas.width = image.width-20;
             canvas.height = image.height-20;
             ctx.drawImage(image,0,0);
         }
         image.src = event.target.result;
         
   }
   reader.readAsDataURL(e.target.files[0]);
   fileName.innerHTML = e.target.value;
   window.addEventListener("change",function(){
       Swal.fire({
           icon: "success",
           title:"Image uplaoded successfully",
           text :"",
           footer:"&copy all rights reserved by web creation",
       });
    });
}
    
else
{
    window.addEventListener("change",function()
    {
        Swal.fire({
            icon: "warning",
            title:"Image fail to uplaod",
            text :"you not select any file!!!!",
            footer:"&copy all rights reserved by web creation",
        });
    })
    var image = new Image();
    image.onload = function ()
    {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image,0,0);
    }
    image.src ="";
    fileName.innerHTML = "No file choosen !";
}
 }

//  .match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)