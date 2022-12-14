
export async function main(argumentJson) {
    const authHeader = argumentJson["headers"]["Authorization"]
    if(authHeader && authHeader == "Basic dGVzdDp0ZXN0") {
        return {
            "body": `      
                <!DOCTYPE html>
                <html lang="en">
                <head>
                </head>
                <body>
                    <div style=" margin-top: 10%; margin-left: 30%; text-align: center;">
                        <body>
                            <h1>Yext Games</h1>
                            <form action="/apikey" method="get">
                                <label>Interviewee Name:</label>
                                <input class="inputfield" type="text" name="name"/>
                            </form>
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
                        Unauthorized
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