 <?php
// === load_posts.php ===
// Enable CORS for local testing
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Example: posts stored in a JSON file
$posts = file_get_contents('posts.json');

echo $posts;
?>
