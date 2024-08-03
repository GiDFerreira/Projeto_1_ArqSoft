class HtmlAdapter {
    constructor(cities) {
        this.cities = cities;
    }

    formatAsHtml() {
        let htmlContent = `
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>`;
        
        this.cities.forEach(cidade => {
            htmlContent += `<li>${cidade}</li>`;
        });

        htmlContent += `
        </ul>
    </body>
    </html>`;
        
        return htmlContent;
    }
}

module.exports = { HtmlAdapter };
