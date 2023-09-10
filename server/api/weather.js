export default async function(req,res){
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Mandalay,myanmar&appid=f6f31e6f2b3a76c65401b814d87e147d"
    const  weather = await $fetch(url);

    return weather;
}
