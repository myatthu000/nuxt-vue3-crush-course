<template>
    <div class="">
        <title>Nuxt 3 Example</title>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
        </nav>
        <slot />
    </div>
</template>