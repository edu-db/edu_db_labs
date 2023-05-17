<?php

require '../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class UserController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getAllUsers(Request $request, Response $response)
    {
        $sql = "SELECT * FROM `users`";
        $result = mysqli_query($this->connection, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        mysqli_close($this->connection);

        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getUserById(Request $request, Response $response, $args)
    {
        $name = $args['user_id'];
        $sql = "SELECT * FROM `users` WHERE `username`='$name'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        $user = mysqli_fetch_assoc($result);

        if ($user === null) {
            $response->getBody()->write(json_encode(['message' => 'User not found']));
        } else {
            $response->getBody()->write(json_encode($user));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function addUser(Request $request, Response $response)
    {
        $data = $request->getParsedBody();

        $email = $data['email'];
        $password = $data['password'];
        $username = $data['username'];

        $sql = "INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES (NULL, '$email', '$password','$username')";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'User created']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to create user']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function deleteUser(Request $request, Response $response, $args)
    {
        $user_id = (int) $args['user_id'];
        $sql = "DELETE FROM `users` WHERE `id`='$user_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'User deleted']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to delete user']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }
}

class QuizController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getQuizById(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "SELECT * FROM `quiz` WHERE `id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if (mysqli_num_rows($result) === 0) {
            $response->getBody()->write(json_encode(['message' => 'Quiz not found']));
        } else {
            $quiz = mysqli_fetch_assoc($result);
            $response->getBody()->write(json_encode($quiz));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function getAllQuizzes(Request $request, Response $response)
    {
        $sql = "SELECT * FROM `quiz`";
        $result = mysqli_query($this->connection, $sql);
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        mysqli_close($this->connection);

        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function addQuiz(Request $request, Response $response)  
    {
        $data = $request->getParsedBody();

        $title = $data['title'];
        $description = $data['description'];
        $datetime = $data['datetime'];

        $sql = "INSERT INTO `quiz` (`id`, `title`, `description`, `datetime`) VALUES (NULL, '$title', '$description', '$datetime')";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'Quiz created']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to create quiz']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }

    public function deleteQuiz(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "DELETE FROM `quiz` WHERE `id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);

        mysqli_close($this->connection);

        if ($result) {
            $response->getBody()->write(json_encode(['message' => 'Quiz deleted']));
        } else {
            $response->getBody()->write(json_encode(['message' => 'Failed to delete quiz']));
        }

        return $response->withHeader('Content-Type', 'application/json');
    }
}

class QuestionController
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function getQuestionsByQuiz(Request $request, Response $response, $args)
    {
        $quiz_id = (int) $args['quiz_id'];
        $sql = "SELECT question FROM `question` WHERE `quiz_id`='$quiz_id'";
        $result = mysqli_query($this->connection, $sql);
        
        mysqli_close($this->connection);
        
        $questions = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $questions[] = $row['question'];
        }
        
        $response->getBody()->write(json_encode($questions));
        return $response->withHeader('Content-Type', 'application/json');
    }
}

$connection = mysqli_connect('127.0.0.1', 'root', '', 'mydb');

$app = AppFactory::create();

$userController = new UserController($connection);
$quizController = new QuizController($connection);
$questionController = new QuestionController($connection);

$app->get('/src/allusers', [$userController, 'getAllUsers']);
$app->get('/src/user/{user_id}', [$userController, 'getUserById']);
$app->post('/src/adduser', [$userController, 'addUser']);
$app->delete('/src/user/{user_id}', [$userController, 'deleteUser']);

$app->get('/src/allquizzes', [$quizController, 'getAllQuizzes']);
$app->get('/src/quiz/{quiz_id}', [$quizController, 'getQuizById']);
$app->post('/src/addquiz', [$quizController, 'addQuiz']);
$app->delete('/src/quiz/{quiz_id}', [$quizController, 'deleteQuiz']);

$app->get('/src/questions/{quiz_id}', [$questionController, 'getQuestionsByQuiz']);

$app->run();