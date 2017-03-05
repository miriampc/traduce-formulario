var title=document.getElementById('form-signin-heading');
var email=document.getElementById('inputEmail');
var pswd=document.getElementById('inputPassword');
var check=document.getElementsByTagName('span')[0];
var btn=document.getElementById('traduce');

function traductor(){
  title.innerHTML="Por favor inicia sesión";
  email.placeholder="Correo Electrónico";
  pswd.placeholder="Contraseña";
  check.innerHTML="Recordar datos";
  btn.innerHTML="Iniciar Sesión";
}
traductor();

document.getElementById('traduce').onclick = function mostrar(){
    var imp=document.getElementById('print');
    if(email.value.length==0 || pswd.value.length==0){
      alert("Ingrese sus datos");
    }else{
      imp.innerHTML="<h4>Datos de formulario</h4>"+
                    "El correo electrónico ingresado es: "+email.value+
                    "<br>La clave ingresada es: "+pswd.value;
    }
}

document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
}
