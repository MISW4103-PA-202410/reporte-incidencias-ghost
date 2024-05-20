var faker = require('faker');

function dataSource(data) {
    const regex = /\{(?<data_source>data_pool|faker|dinamic_data_pool|invalid_dinamic_data_pool)\((?<attribute>\w*)\)\}/;
    const  match =  regex.exec(data);
    const data_pool = match ? match.groups.data_source : 'default';
    const attribute = match ? match.groups.attribute : '';
    return [data_pool, attribute];
}

function fakerPool(attribute) {
    if (attribute === 'alphaNumeric')
    {
        return faker.random.alphaNumeric(20);
    }
    else if (attribute === 'sentence_255')
    {
        return faker.lorem.sentence(256);
    }
    else if (attribute === 'sentence_3')
    {
        return faker.lorem.sentence(3);
    }
    else if (attribute === 'alphaNumeric_100'){
        return faker.random.alphaNumeric(100);
    }
    else if (attribute === 'alphaNumeric_150'){
        return faker.random.alphaNumeric(150);
    }
    else if (attribute === 'alphaNumeric_256'){
        return faker.random.alphaNumeric(256);
    }
    else if (attribute === 'url')
    {
        return faker.internet.url();
    }
}

function dataGenerator(data) {
    //Regex to get the data pool and the attribute
    let data_source = dataSource(data);
    let data_pool = data_source[0];
    let attribute = data_source[1];
    //Get the data
    let content = '';
    if (data_pool === 'faker') {
        content = fakerPool(attribute);
    } else if (data_pool === 'data_pool') {
        content = scope.dataPool.page[attribute];
    } else if (data_pool === 'dinamic_data_pool') {
        list_attribute = scope.dinamicDataPool.page[attribute];
        const rand_index = faker.random.number({ min: 0, max: list_attribute.length - 1});
        content = list_attribute[rand_index];
    } else if (data_pool === 'invalid_dinamic_data_pool') {
        content = scope.invalidDinamicDataPool.page[attribute];
    } else if (data_pool === 'default') {
        content = data;
    }
    return content;
}

module.exports = [
    dataGenerator,
    dataSource,
    fakerPool
]