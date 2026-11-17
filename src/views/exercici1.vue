

<template>
    <div>
        <h1>Llistat de productes</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <RouterLink :to="{name: 'ProductDetail', params: { product:id: product.id}}"></RouterLink>
            </li>
        </ul>
    </div>
</template>

