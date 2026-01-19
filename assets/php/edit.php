<?php
    include __DIR__ . "/conecta_mysql.inc.php";

    $data = json_decode(file_get_contents("php://input"), true);

    $campo = $data["campo"];
    $valor = $data["valor"];
    $nome  = $data["nome"];
    $senha = $data["senha"];
    $rg    = $data["rg"];

    $permitidos = ["Nome", "Email", "CPF", "RG", "DataNasc"];

    if (!in_array($campo, $permitidos)) {
        echo json_encode(["erro" => "Campo inválido"]);
        exit;
    }

    $campoSeguro = $campo;

    $sql = $conexao->prepare("UPDATE usuários 
    SET $campoSeguro = ? 
    WHERE Nome = ? AND Senha = ? AND RG = ?");
    $sql->bind_param("ssss", $valor, $nome, $senha, $rg);
    $sql->execute();

    echo json_encode(["status" => "ok"]);
?>