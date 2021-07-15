<template>
    <div class="col-12 col-lg-6 col-xl-3">
    <div class="card">
        <div class="card-header">
        <div class="card-actions float-end">
            <div class="dropdown show">
            <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-more-horizontal align-middle"
                >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
                </svg>
            </a>

            <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Удалить</a>
            </div>
            </div>
        </div>
        <h5 class="card-title">{{ title }}</h5>
        </div>
        <div class="card-body p-3">
        <div id="tasks-upcoming">
            <TaskCard
                v-for="item in tasks"
                :key="item.id"
                :discription="item.discription"
            />
        </div>
        <div class="d-grid">
            <a href="#" class="btn btn-primary">Добавить новое задание</a>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import TaskCard from '@/components/TaskCard/TaskCard.vue'

export default {
    components: {
        TaskCard
    },
    props: ['id', 'tasks', 'title']
}
</script>

<style>

</style>