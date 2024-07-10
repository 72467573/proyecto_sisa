<?php
if($_SERVER['REQUEST_METHOD']==='POST'){
    #PASO #1: Declaramos las variables
    $nombres= $_POST['nombres'];
    $correo= $_POST['correo'];
    $tel= $_POST['tel'];

    #PASO #2: Indicamos el Destinatario
    $destinatario='72467573@certus.edu.pe';
    
    #PASO3 #3: Indicamos el Asunto
    $asunto='Consultas de SISA';

    #PASO #4 Diseñamos el cuerpo del mensaje
    $cuerpo= 'Nombre comlpeto: ' . $nombres. '\n';
    $cuerpo .= 'correo: ' . $email. '\n';
    $cuerpo .= 'Celular: ' . $tel. '\n';

    #PASO #5: Programamos el envio al servidor de correo
    if(mail($destinatario, $asunto, $cuerpo)){
        echo "Mensaje enviado correctamente.";
    }
    else{
        echo "Mensaje no enviado";
    }
}

?>