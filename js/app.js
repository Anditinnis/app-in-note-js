const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    
    response.end(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Текущее время</title>
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
                #live-time {
                    font-size: 24px;
                    color: #4CAF50;
                    margin: 20px 0;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Текущее московское время</h1>
                <div id="live-time"></div>
                <p>Сервер Node.js в реальном времени</p>
            </div>

            <script>
                function updateTime() {
                    const options = { 
                        timeZone: 'Europe/Moscow',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    };
                    const time = new Date().toLocaleTimeString('ru-RU', options);
                    document.getElementById('live-time').textContent = time;
                }
                
                // Обновляем время сразу при загрузке
                updateTime();
                
                // И каждую секунду
                setInterval(updateTime, 1000);
            </script>
        </body>
        </html>
    `);
}).listen(3000, "0.0.0.0", function() {
    console.log("Сервер запущен на http://localhost:3000");
});