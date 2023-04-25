// Given a string and array of keywords, highlight the words in the string
// that are part of the array of keywords.

// const str = "Ultimate JavaScript / FrontEnd Guide";
// const words = ['Front', 'End', 'JavaScript'];
// highlight(str, words);
// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"

// Steps 
// 1. Make the str as array of words and take each one, check the same exists in words are not 
// 2. If the full word exits then add strong tag and return it 
// 3. Else break the word in muliple piece and check the same on words array 


const highLightWords = (str, words) => {

    let formattedStr = str.split(" ");

    let result = formattedStr.map(formattedWord => {
        let output = '';
        if (words.includes(formattedWord)) {
            output += `<strong>${formattedWord}</strong>`;
        } else {
            for (let index = 0; index < formattedWord.length; index++) {
                let prefix = formattedWord.slice(0, index + 1);
                let suffix = formattedWord.slice(index + 1);

                if (words.includes(prefix) && words.includes(suffix)) {
                    output += `<strong>${prefix}${suffix}</strong>`;
                    break;
                } else if (words.includes(prefix) && !words.includes(suffix)) {
                    output += `<strong>${prefix}</strong>${suffix}`
                }else if(!words.includes(prefix) && words.includes(suffix)){
                    output += `${prefix}<strong>${suffix}</strong>`
                }
            }
        }
        return output !== '' ? output : formattedWord;
    })

    return result.join(" ");
}
const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['Front', 'End', 'Ulti'];
console.log(highLightWords(str, words));
"Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"