from http.server import HTTPServer, BaseHTTPRequestHandler

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Backend Python funcionando - Grupo 3 Fedora')

if __name__ == '__main__':
    print('Servidor backend en puerto 5000')
    HTTPServer(('0.0.0.0', 5000), Handler).serve_forever()

