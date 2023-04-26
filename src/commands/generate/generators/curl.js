const generate = ({
    origin,
    path,
    method,
    cookie,
    json,
    body,
    extraHeaders
}) => {
    let curlString = 'curl';

    curlString += ` -X ${method.toUpperCase()}`;

    curlString += ` '${origin}${path}'`;

    if (json) {
        curlString += ` -H 'Content-Type: application/json'`;
    }

    if (extraHeaders) {
        extraHeaders.reduce((res, header) => res += ` -H '${header}'`, curlString);
    }

    if (cookie) {
        curlString += ` -H 'Cookie: ${cookie}'`;
    }

    if (body) {
        curlString += ` -d '${JSON.stringify(body)}'`;
    }

    return curlString;
};

module.exports = {
    generate
};


