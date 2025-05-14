
    var imageInput=document.getElementById("img_input");
    var preview=document.getElementById("preview");


   imageInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        preview.style.display = 'none';
        preview.src = '';
      }
    });
     
    
