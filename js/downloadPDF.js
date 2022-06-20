const button = document.getElementById('btn-download')

  function generatePDF () {

    
    var w = document.getElementById("timeline__content").offsetWidth;
    var h = document.getElementById("timeline__content").offsetHeight;
  

    html2canvas(document.getElementById("timeline__content"), {
       
      dpi: 300, // Set to 300 DPI
      scale: 50, // Adjusts your resolution
      onrendered: function(canvas) {
        var img = canvas.toDataURL("image/jpeg", 1);
        var doc = new jsPDF('L', 'px', [w, h]);
        doc.addImage(img, 'JPEG', 0, 0, w, h);
        doc.addPage();
        doc.save('sample-file.pdf');
      }
    });
  
   
  }

  button.addEventListener('click', generatePDF)