class Main {
    constructor(version, URL,funcionalidades) {
        this.version = version;
        this.URL = URL;
        this.funcionalidades = funcionalidades;
    }

    getVersion() {
        return this.version;
    }

    getURL() {
        return this.URL;
    }

    getFuncionalidades() {
        return this.funcionalidades;
    }
}
module.exports = Main;