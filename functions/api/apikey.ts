// Parses arguments from the url query params and creates an entity via Knowledge API
function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();//Timestamp
    let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
export async function main(argumentJson) {
    if(argumentJson["headers"]["Authorization"] && argumentJson["headers"]["Authorization"] == "dGVzdDp0ZXN0") {
        const url = argumentJson["requestUrl"];
        const questionMark = url.indexOf("?");
        const urlParams = new URLSearchParams(url.substring(questionMark));

        const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=29a2c9e1c9293a60a656f31d9a945ebe&entityType=ce_interviewee&v=20220808';
        const apiKey = generateUUID();
        const data = {
            "name":  urlParams.get("name"), 
            "c_apiKey": apiKey,
        }
        const response = await fetch(postUrl, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data),
        });
        return {
            "body": `      
            <!DOCTYPE html>
                <html lang="en">
                <head>
                </head>
                <body>
                    <div style=" margin-top: 10%; margin-left: 30%; text-align: center;">
                        <body>
                            <h1>Thank you!</h1>
                            <p>You created a new interviewee.</p>
                            <p>API Key: ${apiKey}</p>
                        </body>
                    </div>
                </body>
                </html>
            `,
            "statusCode": 200,
            "headers": {
                "Cache-control": "no-store",
                "X-Yext-Test": "Example header",
            },
        };
    }
 }
 