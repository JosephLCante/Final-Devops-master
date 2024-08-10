const fs = require('fs');
const path = require('path');

test('HTML contiene Hola Mundo', () => {
    const filePath = path.join(__dirname, 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');
    expect(html).toContain('Hola Mundo');
});
