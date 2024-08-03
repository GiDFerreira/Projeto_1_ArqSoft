const fs = require('fs');
const { HtmlAdapter } = require('./adapter');

class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class ReportSubject extends Subject {
    generateReport(cities, format = 'html') {
        let report;
        let outputFileName;

        if (format === 'html') {
            const htmlAdapter = new HtmlAdapter(cities);
            report = htmlAdapter.formatAsHtml();
            outputFileName = './output/cidades-report.html';
        } else {
            throw new Error('Unsupported report format');
        }

        //Verifica se o diretório "output" existe, se não, cria-o
        const outputDir = './output';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        //Escreve o relatório no arquivo apropriado
        fs.writeFileSync(outputFileName, report, 'utf8');
        this.notify(report);
    }
}

module.exports = { ReportSubject, LoggerObserver };
