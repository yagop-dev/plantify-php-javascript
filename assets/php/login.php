<?php
    include "conecta_mysql.inc.php";

    $email = $_POST["email"];
    $senha = $_POST["password"];

    $sql = "SELECT * FROM usuários WHERE Email = '${email}' AND Senha = '${senha}'";
    $result = $conexao->query($sql);

    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();
        echo json_encode([
            "success" => "Login realizado!",
            "user" => $usuario
        ]);
    } else {
        echo json_encode(["error" => "Email ou senha incorretos"]);
    }

    $conexao->close()
?>