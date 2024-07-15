export async function onRequest(context) {
    const url = `https://www.cbr.ru/scripts/XML_daily_eng.asp?d=0`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return new Response("Error fetching currency data", {status: 500});
        }

        const data = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/xml");
        let value = '';

        const valutes = doc.getElementsByTagName("Valute");
        for (let i = 0; i < valutes.length; ++i) {
            const valute = valutes[i];
            const charCode = valute.getElementsByTagName("CharCode")[0].childNodes[0].nodeValue;
            if (charCode === "USD") {
                const value = valute.getElementsByTagName("Value")[0].childNodes[0].nodeValue;
                console.log(`Value of USD: ${value}`);
                break;
            }
        }

        return new Response(value);
    } catch (error) {
        console.error(error);
        return new Response("Error occurred while fetching weather data", {status: 500});
    }
}