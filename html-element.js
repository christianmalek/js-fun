/**
 * Creates a template string function to create html elements.
 * @param {*Name of the element} element 
 */
function createElementFn(element) {
    return (template, ...expressions) => {
        return `<${element}>${template.reduce((acc, part, i) => {
            return acc + expressions[i - 1] + part
        })}</${element}>`
    }
}