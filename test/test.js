const fs = require('fs'); 
const { ReportSubject } = require('../src/observer');

test('Generates HTML report correctly', () => {
    const reportSubject = new ReportSubject();
    reportSubject.generateReport('html');

    const report = fs.readFileSync('./output/cidades-report.html', 'utf8');
    expect(report).toContain('Relatório de Nomes de Cidades');
    expect(report).toContain('<li>'); // Verifica se pelo menos um item foi listado
});
