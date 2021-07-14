<template>
  <div class="container-fluid p-0">
    <a href="#" class="btn btn-primary float-end mt-n1">
      <i class="fas fa-plus"></i> 
      New task
    </a>
    
    <h1 class="h3 mb-3">Tasks</h1>

    <div class="row">
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
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <h5 class="card-title">Upcoming</h5>
            <h6 class="card-subtitle text-muted">
              Nam pretium turpis et arcu. Duis arcu.
            </h6>
          </div>
          <div class="card-body p-3">
            <div id="tasks-upcoming">
              <div class="card mb-3 bg-light cursor-grab border">
                <div class="card-body p-3">
                  <p>
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Maecenas malesuada.
                  </p>
                  <div class="float-end mt-n1">

                  </div>
                  <a class="btn btn-primary btn-sm" href="#">View</a>
                </div>
              </div>
            </div>
            <div class="d-grid">
              <a href="#" class="btn btn-primary">Add new task</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>