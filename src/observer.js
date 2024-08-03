const fs = require('fs');
const { HtmlAdapter } = require('./adapter');

class ReportSubject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }

    generateReport(format = 'html') {
        const data = fs.readFileSync('./data/cidades-1.json', 'utf8');
        const parsedData = JSON.parse(data);

        //Extrai as cidades de todos os estados
        const cities = [];
        parsedData.estados.forEach(estado => {
            cities.push(...estado.cidades);
        });

        let report;
        if (format === 'html') {
            const htmlAdapter = new HtmlAdapter(cities);
            report = htmlAdapter.formatAsHtml();
            fs.writeFileSync('./output/cidades-report.html', report, 'utf8');
        } else {
            throw new Error('Unsupported report format');
        }

        this.notify(report);
    }
}

module.exports = { ReportSubject };
