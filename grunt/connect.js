port = 4200;
module.exports = {
    server: {
        options: {
            port: port,
            base: ['./src'],
            keepalive: true,
            open: {
                target: 'http://localhost:'+port+'/auth.html'
            }
        }
    }
};
