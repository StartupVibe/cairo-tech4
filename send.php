<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars($_POST['name'] ?? '');
    $email   = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    $to = "mainoffice@cairotech.net"; // ← الإيميل بتاعك
    $subject = "New Contact Message from " . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "
        <html>
        <head>
            <meta http-equiv='refresh' content='3;url=https://cairotech.net//'>
            <style>
                body { 
                    font-family: 'Poppins', Arial, sans-serif; 
                    background-color: #f8f9fa;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    flex-direction: column;
                    color: #333;
                }
                .box {
                    background: #fff;
                    padding: 40px 60px;
                    border-radius: 20px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    text-align: center;
                    animation: fadeIn 0.6s ease;
                }
                h2 { color: #00b894; font-weight: 600; }
                p { margin-top: 10px; font-size: 15px; color: #666; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        </head>
        <body>
            <div class='box'>
                <h2>✅ تم إرسال الرسالة بنجاح!</h2>
                <p>سيتم إعادتك إلى الصفحة الرئيسية خلال ثوانٍ...</p>
            </div>
        </body>
        </html>
        ";
    } else {
        echo "
        <html>
        <head>
            <meta http-equiv='refresh' content='5;url=https://cairotech.net//#contact'>
            <style>
                body { 
                    font-family: 'Poppins', Arial, sans-serif; 
                    background-color: #fff3f3;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    flex-direction: column;
                    color: #c0392b;
                }
                .box {
                    background: #fff;
                    padding: 40px 60px;
                    border-radius: 20px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h2 { color: #e74c3c; }
                p { margin-top: 10px; font-size: 15px; color: #777; }
            </style>
        </head>
        <body>
            <div class='box'>
                <h2>❌ حدث خطأ أثناء الإرسال</h2>
                <p>سيتم إعادتك إلى صفحة التواصل بعد لحظات...</p>
            </div>
        </body>
        </html>
        ";
    }
} else {
    echo "Access denied.";
}
?>
