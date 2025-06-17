 <?php
// === process_booking.php ===

// Enable error reporting (for debugging only; remove in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1️⃣ Sanitize form input
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $type = htmlspecialchars($_POST['type']);
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $fulladdress = htmlspecialchars($_POST['fulladdress']);
    $phone = htmlspecialchars($_POST['phone']);

    // 2️⃣ Save booking to a file (or database)
    $entry = "Date: $date\nTime: $time\nType: $type\nName: $fullname\nEmail: $email\nAddress: $fulladdress\nPhone: $phone\n---\n";
    file_put_contents('bookings.txt', $entry, FILE_APPEND | LOCK_EX);

    // 3️⃣ Send notification to admin
    $admin_to = "sweetenedcleaningservices@gmail.com";
    $admin_subject = "New Cleaning Booking Received";
    $admin_headers = "From: $email\r\n";
    mail($admin_to, $admin_subject, $entry, $admin_headers);

    // 4️⃣ Auto-send confirmation to the client
    $client_subject = "Sweetened Cleaning Services - Booking Confirmation";
    $client_message = "Hello $fullname,\n\n"
        . "Thank you for booking with Sweetened Cleaning Services.\n"
        . "Here are your booking details:\n\n"
        . "Date: $date\n"
        . "Time: $time\n"
        . "Service Type: $type\n"
        . "Address: $fulladdress\n"
        . "Phone: $phone\n\n"
        . "We will get in touch soon to confirm your appointment.\n\n"
        . "Best regards,\nSweetened Cleaning Services Team";

    $client_headers = "From: sweetenedcleaningservices@gmail.com\r\n";
    mail($email, $client_subject, $client_message, $client_headers);

    // 5️⃣ Redirect to thank you page
    header("Location: thankyou.html");
    exit();
} else {
    echo "Invalid request method.";
}
?>


