const LoginPage = require('../clases/LoginPage');

async function post_basico(page) {
    const formPage = new LoginPage(page);
    await formPage.login('miusuario', 'micontraseña');
    // Agregar aquí el código para crear un post básico
}

async function post_completo(page) {
    const formPage = new LoginPage(page);
    await formPage.login('miusuario', 'micontraseña');
    // Agregar aquí el código para crear un post básico
}

module.exports = { post_basico };