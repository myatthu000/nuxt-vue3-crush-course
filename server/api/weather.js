export default async function(req,res){
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=Mandalay,myanmar&appid
    // =${process.env.OPEN_WEATHER_MAP_API_KEY}`
    let url = `https://api.openweathermap.org/data/`+
    `2.5/weather?q=Mandalay,myanmar&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;
    const  weather = await $fetch(url);

    return weather;
}
