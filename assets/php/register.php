<?php
    $nome = $_POST["name"];
    $email = $_POST["email"];
    $senha = $_POST["password"];
    $dataNasc = $_POST["dataNasc"];
    $RG = $_POST["rg"];
    $CPF = $_POST["cpf"];
    $erros = [];

    if(empty($nome) || strstr ($nome, ' ') == FALSE) {
        $erros['name'] = "Favor digitar seu nome corretamente";
    }
    if(strlen($email) < 8 || strstr ($email, '@') == FALSE ) {
        $erros['email'] = "Favor digitar seu email corretamente";
    }
    if(empty($senha)) {
        $erros['senha'] = "Favor digitar uma senha";
    }
    if(empty($dataNasc)) {
        $erros['dataNasc'] = "Favor informar sua data de nascimento";
    }
    if(empty($RG)) {
        $erros['rg'] = "Favor inserir seu RG corretamente";
    }
    if(empty($CPF)) {
        $erros['cpf'] = "Favor inserir seu CPF corretamente";
    }
    if(empty($erros)) {
         $resultado = include 'insere.inc.php';

        if (isset($resultado['success'])) {
            $erros['success'] = $resultado['success'];
        }

        if (isset($resultado['error'])) {
            $erros['error'] = $resultado['error'];
        }
    }

    echo json_encode($erros);
?>