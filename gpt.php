<?php

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate form data
  if (empty($name) || empty($email) || empty($message)) {
    // Handle empty fields
    echo "Please fill in all fields.";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Handle invalid email format
    echo "Invalid email format.";
    exit;
  }

  // Send email
  $to = "cbitz02@gmail.com";
  $subject = "New message from your website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    // Handle successful email sent
    echo "Message sent successfully!";
  } else {
    // Handle email send error
    echo "Oops! Something went wrong. Please try again later.";
  }
}

?>
