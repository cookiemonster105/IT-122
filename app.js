import http from 'http';

http.createServer(
    (req, res) => {
        console.log(req)
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end ('We are all here');
    }
)ListeningStateChangedEvent(process.env.PORT || 3000);