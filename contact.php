 <?php 
// === contact.php ===

// Load PHPMailer manually
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

header('Content-Type: application/json');

$recaptcha_secret = 'YOUR_RECAPTCHA_SECRET_KEY';
$admin_email = 'sweetenedcleaningservices@gmail.com';

// DB config
$db_host = 'localhost';
$db_name = 'YOUR_DATABASE';
$db_user = 'YOUR_DB_USER';
$db_pass = 'YOUR_DB_PASSWORD';

// SMTP config
$smtp_host = 'smtp.yourdomain.com';
$smtp_user = 'SMTP_USERNAME';
$smtp_pass = 'SMTP_PASSWORD';
$smtp_port = 587;

// === 1. Verify reCAPTCHA ===
$captcha = $_POST['g-recaptcha-response'] ?? '';
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptcha_secret}&response={$captcha}");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
  echo json_encode(['success' => false, 'message' => 'Captcha failed.']);
  exit;
}

// === 2. Validate input ===
$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$fulladdress = trim($_POST['fulladdress'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');
$consent = isset($_POST['consent']) ? 'Yes' : 'No';

if (!$name || !$phone || !$fulladdress || !$email || !$service) {
  echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
  exit;
}

// === 3. Save to DB ===
try {
  $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $pdo->prepare("INSERT INTO contact_requests (name, phone, fulladdress, email, service, message, consent)
    VALUES (?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute([$name, $phone, $fulladdress, $email, $service, $message, $consent]);
} catch (PDOException $e) {
  echo json_encode(['success' => false, 'message' => 'DB error: ' . $e->getMessage()]);
  exit;
}

// === 4. Send admin email ===
$mail = new PHPMailer\PHPMailer\PHPMailer(true);
try {
  $mail->isSMTP();
  $mail->Host = $smtp_host;
  $mail->SMTPAuth = true;
  $mail->Username = $smtp_user;
  $mail->Password = $smtp_pass;
  $mail->SMTPSecure = 'tls';
  $mail->Port = $smtp_port;

  $mail->setFrom($smtp_user, 'Sweetened Cleaning Services');
  $mail->addAddress($admin_email);
  $mail->isHTML(true);
  $mail->Subject = "New Callback Request - $name";
  $mail->Body = "
    <h3>New Contact Submission</h3>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Address:</strong> $fulladdress</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Service:</strong> $service</p>
    <p><strong>Message:</strong> $message</p>
    <p><strong>Consent:</strong> $consent</p>
  ";
  $mail->send();
} catch (Exception $e) {
  // ignore, DB is fine
}

// === 5. Confirm to user ===
$confirm = new PHPMailer\PHPMailer\PHPMailer(true);
try {
  $confirm->isSMTP();
  $confirm->Host = $smtp_host;
  $confirm->SMTPAuth = true;
  $confirm->Username = $smtp_user;
  $confirm->Password = $smtp_pass;
  $confirm->SMTPSecure = 'tls';
  $confirm->Port = $smtp_port;

  $confirm->setFrom($smtp_user, 'Sweetened Cleaning Services');
  $confirm->addAddress($email);
  $confirm->isHTML(true);
  $confirm->Subject = "Thank you!";
  $confirm->Body = "
    <h3>Hi $name,</h3>
    <p>Thank you for your request for <strong>$service</strong>. We will reach out soon!</p>
    <p>— Sweetened Cleaning Services</p>
  ";
  $confirm->send();
} catch (Exception $e) {
  // ignore
}

// === 6. Done ===
echo json_encode(['success' => true]);
