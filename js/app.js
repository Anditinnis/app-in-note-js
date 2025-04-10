const http = require("http");

http.createServer(function(request, response) {
    // Устанавливаем заголовок Content-Type для HTML
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    
    // Отправляем HTML-страницу
    response.end(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NodeJS Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h1 {
                    color: #2c3e50;
                }
                p {
                    color: #7f8c8d;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Привет из NodeJS!</h1>
                <p>Это HTML-страница, сгенерированная сервером</p>
                <p>Текущее время: ${new Date().toLocaleTimeString()}</p>
            </div>
        </body>
        </html>
    `);
}).listen(process.env.PORT || 3000, "0.0.0.0", function() {
    console.log("Сервер запущен");
});