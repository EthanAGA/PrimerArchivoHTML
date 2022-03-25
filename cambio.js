function setInterruptor(interruptor){
    var imagen;
     if(interruptor==0){
      imagen ="Imágenes/foto 0.jpg";
     }else{
         imagen ="Imágenes/foto 1.jpg";
     }
     document.getElementById('imagen').src=imagen; 
   }