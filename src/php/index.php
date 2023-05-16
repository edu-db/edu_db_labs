<?php 
header("Content-Type: application/json");

// Обработка GET-запроса
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = array('message' => 'Привет, это API');
    echo json_encode($response);
    exit();
}
?>