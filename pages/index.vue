<template>
    <div>
        <div class="">This is Index Page</div>
        <Counter />
        <div class="">
            x: {{ x }} 
            y: {{ y }}
        </div>
        <div class="">
            <ul>
                <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
        <h4>User2</h4>
        <div class="">
            <ul>
                <li v-for="user in users2" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
        <h4>User3</h4>
        <div class="">
            <ul>
                <li v-for="user in users3" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
        <hr>
        <div class="">
            <h4>{{  user.name }}</h4>
        </div>

        <div class="">
            <h4>Weather</h4>
            <div class="">Description: {{ weather.weather[0].description }}</div>
            <div class="">Country: {{ weather.sys.country }}</div>
            <div class="">City: {{ weather.name }}</div>
            <div class="">Temprature: {{ weather.main.temp }}</div>
        </div>
    </div>
</template>

<script setup>
// f6f31e6f2b3a76c65401b814d87e147d

    const { x , y } = useMouse();
    const users = ref([]);
    // const users2 = ref([]);
    onMounted(()=>{
        console.log('this is work.')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => users.value = data)
    })

    //ohmyfetch library $fetch (server side fetch data)
    const { data: users2 } = await useAsyncData('users2', ()=> $fetch('https://jsonplaceholder.typicode.com/users'))

    const { data: users3 } = await useFetch('https://jsonplaceholder.typicode.com/users')

    // const url = "https://api.openweathermap.org/data/2.5/weather?q=Mandalay,myanmar&appid=f6f31e6f2b3a76c65401b814d87e147d"

    const { data: user } = await useFetch('https://jsonplaceholder.typicode.com/users/1', { pick: ['id','name','email']});

    const { data: weather } = await useFetch('/api/weather');
    
</script>