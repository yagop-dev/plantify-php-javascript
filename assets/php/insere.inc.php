<?php
    include 'conecta_mysql.inc.php';

    $nome = $_POST["name"];
    $email = $_POST["email"];
    $senha = $_POST["password"];
    $dataNasc = $_POST["dataNasc"];
    $RG = $_POST["rg"];
    $CPF = $_POST["cpf"];
    $Carrinho = json_encode([]);;

    $sql = "INSERT INTO usuários (Nome, Email, Senha, DataNasc, CPF, RG, Carrinho) VALUES";
    $sql .= "('$nome', '$email', '$senha', '$dataNasc', '$CPF', '$RG', '$Carrinho')";

    if($conexao->query($sql) === TRUE) {
        return(["success" => "Você foi cadastrado com sucesso!"]);
    } else {
        echo json_encode(["error" => $conexao->error]);
    }

    $conexao->close();
?>