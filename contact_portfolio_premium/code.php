<?php
// Protection contre les injections d'en-têtes et le détournement de session
header("X-Frame-Options: DENY");
header("X-Content-Type-Options: nosniff");
header("Content-Type: text/html; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Récupération et assainissement strict (Sanitization - OWASP A03:2021)
    $firstName = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_SPECIAL_CHARS);
    $lastName = filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject_type = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

    // 2. Validation des données côté serveur (Validation - OWASP A04:2021)
    if (!$firstName || !$lastName || !$email || !$message) {
        die("Security Alert: Invalid or malicious input detected.");
    }

    // 3. Configuration de l'e-mail de destination
    $to = "degbeperside@gmail.com";
    $email_subject = "Portfolio Contact: " . $subject_type . " from " . $firstName . " " . $lastName;
    
    // Construction du corps du message en texte brut pour éviter les injections HTML
    $email_body = "You have received a new secure message from your portfolio contact form.\n\n".
                  "First Name: $firstName\n".
                  "Last Name: $lastName\n".
                  "Email: $email\n".
                  "Purpose: $subject_type\n\n".
                  "Message:\n$message\n";

    // En-têtes sécurisés (Évite le SPAM et le Spoofing)
    $headers = "From: webmaster@cybersec.pro\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 4. Envoi de l'e-mail
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Redirection vers une page de succès ou retour avec un code HTTP propre
        echo "<script>alert('Message sent successfully and securely!'); window.location.href='code.html';</script>";
    } else {
        echo "<script>alert('Transmission failure. Please contact directly via LinkedIn.'); window.history.back();</script>";
    }
} else {
    // Rejet direct si accès non autorisé par POST
    http_response_code(405);
    die("Method Not Allowed");
}
?>
