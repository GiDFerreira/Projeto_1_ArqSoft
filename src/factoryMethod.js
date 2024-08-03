class JsonParser {
    parse(data) {
        throw new Error("This method should be overridden!");
    }
}

class CitiesJsonParser extends JsonParser {
    parse(data) {
        return JSON.parse(data).cities;
    }
}

class JsonParserFactory {
    static createParser(filename) {
        if (filename.endsWith('cidades-2.json')) {
            return new CitiesJsonParser();
        }
        throw new Error("Unsupported file type!");
    }
}

module.exports = { JsonParserFactory, CitiesJsonParser };
