const axios = require('axios')
const cheerio = require('cheerio')

async function show_links() {
    try{
        const response = await axios.get("https://www.santosfc.com.br/")
        const html = response.data
        const $ = cheerio.load(html)
        // const links = $('a').attr('href')
        const links = []

        
        $('a').each((index, element) => {
            const href = $(element).attr('href');
            // desconsiderando link vazio e anchor link(link que deve apontar para parte superior da página)
            if (href && href.trim() !== '' && href !== '#') {
                links.push(href);
            }
        });

        for(const link of links){
            console.log(link)
        }

        /*
        const data = $.extract({
            links: {
                selector: 'a',
                value: 'href',
            },
        })
        */

    } catch(error){
        console.log(error)
    }
}

show_links()