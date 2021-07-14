let REST_URL = 'http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/'   

export async function getSectors(sectorCountry, sectorName){
try {
    console.log(sectorCountry, sectorName)
    const response = await fetch(
        `${REST_URL}/query-sector-country?country=${sectorCountry}&sector=${sectorName}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              }
        }
    )
    const out = await response.json()

    return {
        output: out,
        status: response.status
      }
} catch (error) {
    return {
      error: error,
      status: '404'
    }
}
}

export async function getSectorsName(countryCode){
    try {
        countryCode = 'IND'
        const response = await fetch(
            `${REST_URL}/query-sectors?country=${countryCode}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        const out = await response.json()

    return {
        output: out,
        status: response.status
      }
    } catch (error) {
        return {
            error: error,
            status: '404'
          }
    }
}

