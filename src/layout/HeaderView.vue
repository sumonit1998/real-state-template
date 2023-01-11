<template>
   <section id="header">
        <div class="top-bar">
            <div class="container">
                <div class="header-top">
                    <div class="brand-name me-auto">
                        <img src="@/assets/images/logo.png" alt="Brand Name">
                    </div>
                    <div class="social-icon">
                        <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                        <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                        <a href=""><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                        <a href=""><font-awesome-icon icon="fa-brands fa-vimeo-v" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-menu">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container">
                    <!-- <a href="#" class="navbar-brand">Brand</a> -->
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav me-auto">
                            <a href="#" class="nav-item nav-link active">Home</a>
                            <a href="#" class="nav-item nav-link">Profile</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                                <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">Inbox</a>
                                    <a href="#" class="dropdown-item">Sent</a>
                                    <a href="#" class="dropdown-item">Drafts</a>
                                </div>
                            </div>
                            <a href="#" class="nav-item nav-link" tabindex="-1">Reports</a>
                        </div>
                        <div class="navbar-nav">
                            <a href="#" class="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
   </section>
</template>