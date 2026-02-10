const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    const apiKey = event.headers['x-api-key'];
    
    if (!apiKey) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'API key required in x-api-key header' })
        };
    }

    try {
        const response = await fetch('https://datamall2.mytransport.sg/ltaodataservice/BusStops', {
            headers: {
                'AccountKey': apiKey,
                'accept': 'application/json'
            }
        });

        const data = await response.json();
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
