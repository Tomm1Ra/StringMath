
function validateParam(a)
{

    a = (!a) ? "0" : a;
    a = a.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    return a;
}

function parseOperator(input)
{
    input = (!input) ? "+" : input;
    return input.match(/((\+)|(\-)|(\/)|(\*)|(\^)|(!)|(x)|(X))/g);;
}

module.exports.validateParam = validateParam;
module.exports.parseOperator = parseOperator;
