function vali(){
 let nombre = document.getElementById("name").value;
 let fecha = document.getElementById("date").value ;
 let apodo = document.getElementById("apodo").value ;

 if(nombre == "Nicol"|| nombre == "nicol" && fecha == "2004-09-05" && apodo == "ESTRELLA"){
    Swal.fire({
        title: 'FELIZ CUMPLEAÑOS!',
        text: 'Todos los datos son correctos',
        imageUrl: 'https://besthqwallpapers.com/Uploads/24-11-2019/112984/thumb2-black-and-white-cats-4k-cute-animals-3d-art-yin-and-yang.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Gatos',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Vamosss!!!',
            'Espero le guste la pagina 🤭',
            'success'
          );
          setTimeout(function(){
            window.location.href = '../Principal/index.html'
          },2000);
        }
      })
 }
 else if(nombre != "Nicol"|| nombre != "nicol" || fecha != "2004-09-05" || apodo != "ESTRELLA"){
    Swal.fire({
        icon: 'error',
        title: 'Oh noo...',
        text: 'Escribiste Algo Mal 😣!',
        footer: 'Revisa Nuevamente'
      })
 }
}