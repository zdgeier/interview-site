// Parses arguments from the url query params and creates an entity via Knowledge API
export async function main(argumentJson) {
    if(argumentJson["headers"]["Authorization"] && argumentJson["headers"]["Authorization"] == "dGVzdDp0ZXN0") {
        const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=29a2c9e1c9293a60a656f31d9a945ebe&entityType=ce_sports' + '&v=20220808';
        const data = {
            "name": name, 
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
                            <p>You created a new sport.</p>
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
 