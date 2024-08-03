const fs = require('fs');
const { HtmlReportSubject, LoggerObserver } = require('./src/observer'); 

//Cria uma instância de HtmlReportSubject e LoggerObserver
const reportSubject = new HtmlReportSubject();
const logger = new LoggerObserver();

//Anexa o observer e gerar o relatório
reportSubject.attach(logger);
reportSubject.generateReport(cities);
