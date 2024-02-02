<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "deltapaintcompany@gmail.com";
    $subject = "New message from your website";
    $headers = "From: $email";

    $body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $body, $headers);
    header("Location: index.html");
}
?>