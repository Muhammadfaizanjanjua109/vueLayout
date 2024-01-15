<script>
export default {
    name:'sidebar'
}
</script>
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px; min-height:100vh ">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Faizan</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link" :class="{ 'active': $route.path === '/dashboard' }">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/product" class="nav-link" :class="{ 'active': $route.path === '/product' }">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Product
        </router-link>
      </li>
      <li>
        <router-link to="/customers" class="nav-link" :class="{ 'active': $route.path === '/customers' }">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Customer
        </router-link>
      </li>
      
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>