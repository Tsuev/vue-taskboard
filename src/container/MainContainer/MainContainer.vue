<template>
  <div class="container-fluid p-0">
    <a data-bs-toggle="modal" data-bs-target="#defaultModalPrimary" class="btn btn-primary float-end mt-n1">
      <i class="fas fa-plus"></i> 
      New task
    </a>
    
    <h1 class="h3 mb-3">Tasks</h1>

    <div class="row">
      <TaskColumn
        v-for="(item, index) in getTasks"
        :key='index'
        :id='item.id'
        :tasks='item.tasks'
        :title='item.title'
      />
    </div>

    <div class="modal fade" id="defaultModalPrimary" tabindex="-1" style="display: none;" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Default modal</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body m-3">
            <input v-model='titleCol' type="text" class="form-control" placeholder="Input">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" >Close</button>
            <button @click='addColumn({title: titleCol, tasks: []})' data-bs-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TaskColumn from '@/container/TasksColumn/TasksColumn.vue'
export default {
  data(){
    return {
      titleCol: ''
    }
  },
  computed: mapGetters(['getTasks']),
  methods: mapActions(['addColumn']),
  components: {
    TaskColumn
  }
};
</script>

<style>
</style>