// Parses arguments from the url query params and creates an entity via Knowledge API
export async function main(argumentJson) {
    return {
        "body": `      
            <!DOCTYPE html>
            <html lang="en">
            <head>
            </head>
            <body>
                <div style=" margin-top: 10%; margin-left: 30%; text-align: center;">
                    <body>
                        <h1>Hello, bot!</h1>
                        <p>You failed to create a new sport, replicant scum.</p>
                    </body>
                </div>
            </body>
            </html>
        `,
        "statusCode": 401,
        "headers": {
            "Cache-control": "no-store",
            "WWW-Authenticate": "Basic realm=\"User Visible Realm\""
        },
      };
 }
 