<template>
  <section class="sidebar">
        <a href="#" class="logo">
            <i class="fab fa-slack"></i>
            <span class="text">Admin Panel</span>
        </a>

        <ul class="side-menu top">
            <li class="active">
                <a href="#" class="nav-link">
                    <i class="fas fa-border-all"></i>
                    <router-link :to="{ name: 'dashboard'}"><span class="text">Dashboard</span></router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fas fa-shopping-cart"></i>
                    <router-link :to="{ name: 'admins'}"><span class="text">Admins</span></router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fas fa-chart-simple"></i>
                    <router-link :to="{ name: 'zones'}"><span class="text">Zones</span></router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fas fa-message"></i>
                    <router-link :to="{ name: 'SubscriptionTrip'}"><span class="text">Subscription Trip</span></router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fas fa-people-group"></i>
                    <router-link :to="{ name: 'users'}"><span class="text">Users</span></router-link>
                </a>
            </li>
            <li>
                <a href="#" class="nav-link">
                    <i class="fas fa-people-group"></i>
                    <router-link :to="{ name: 'captains'}"><span class="text">Captains</span></router-link>
                </a>
            </li>
        </ul>

        <ul class="side-menu">
            <li>
                <a href="#">
                    <i class="fas fa-cog"></i>
                    <span class="text">Settings</span>
                </a>
            </li>
            <li>
                <a href="#" class="logout">
                    <i class="fas fa-right-from-bracket"></i>
                    <span class="text">Logout</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped>

</style>
