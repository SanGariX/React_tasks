export const weatherApi = async (value, day) => {
    const URL = 'http://api.weatherapi.com/v1'
    const Api_key = 'ce2cb9b2a3da414bb5b172546231704'
    const params = new URLSearchParams({
        key: Api_key,
        q: value,
        lang: 'uk',
        days: day,
    })
    const respons = await fetch(`${URL}/forecast.json?${params}`)
    if (!respons.ok) {
        throw new Error(respons.statusText)
    }
    const data = await respons.json()
    return data
}