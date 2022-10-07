export async function main(argumentJson) {
    const authHeader = argumentJson["headers"]["Authorization"]
    if(authHeader) {
        return {
            "body": `      
                <!DOCTYPE html>
                <html lang="en">
                <head>
                </head>
                <body>
                    <div style=" margin-top: 10%; margin-left: 30%; text-align: center;">
                        <body>
                            <h1>Nice</h1>
                            <p>${JSON.stringify(argumentJson['headers'])}</p>
                        </body>
                    </div>
                </body>
                </html>
            `,
            "statusCode": 200,
            "headers": {
                "Cache-control": "no-store",
                "WWW-Authenticate": "Basic realm=\"User Visible Realm\""
            },
          };
    }

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
                        <p>${JSON.stringify(argumentJson)}</p>
                        <p>${JSON.stringify(argumentJson['headers'])}</p>
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