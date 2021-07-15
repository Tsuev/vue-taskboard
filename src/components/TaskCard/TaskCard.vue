<template>
    <div class="card mb-3 bg-light cursor-grab border">
        <div class="card-body p-3">
            <h4 class="mb-5">
                {{ discription }}
            </h4>
            <div class="float-end mt-n1">

            </div>
            <a class="btn btn-primary btn-sm" href="#">Посмотреть</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['discription']
}
</script>

<style>

</style>