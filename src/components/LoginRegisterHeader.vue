<template>
    <div id="main">
        <header>
            <nav class="navbar navbar-expand-md container navbar-dark">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.svg"/>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-colors" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-colors" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-colors" to="/register">Register</router-link>
                    </li>
                </ul>
            </div>
            </nav>
        </header>
    </div>
</template>