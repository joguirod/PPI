const axios = require('axios')
const cheerio = require('cheerio')
const readlineSync = require('readline-sync')

function main(){
    const url = readlineSync.question("Insira uma URL: ")
    const word = readlineSync.question("Escreva uma palavra ou termo para buscar: ")

    search_word(url, word)

}

async function search_word(url, word_to_search){
    try {
        const response = await axios.get(url)
        const html = response.data
        const $ = cheerio.load(html)
        const pageText = $('body').text().toLowerCase()
        const words = pageText.split(/\s+/)

        const occurrences = words.reduce((acc, currentWord, currentIndex) => {
            if (currentWord.includes(word_to_search)) {
                const startIndex = Math.max(0, currentIndex - 10);
                const endIndex = Math.min(words.length - 1, currentIndex + 10);
                const context = words.slice(startIndex, endIndex + 1).join(' ');
                acc.push({ word: currentWord, context: context });
            }
            return acc;
        }, []);

        console.log(`Ocorrências da palavra "${word_to_search}" encontradas:`);
        occurrences.forEach((occurrence, index) => {
            console.log(`Ocorrência ${index + 1}:`);
            console.log('Contexto:', occurrence.context);
            console.log('-----------------------------------');
        });

    } catch (error) {
        console.error('Erro ao buscar a página:', error)
    }

}

main()