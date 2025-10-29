<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li class="rounded-box">
                        <router-link to="/" class="hover:text-primary">Accueil</router-link>
                    </li>

                    <li class="rounded-box">
                        <router-link to="/contact" class="hover:text-primary">Contact</router-link>
                    </li>
                    <li class="rounded-box">
                        <a href="#" class="hover:text-primary">Services</a>
                    </li>
                    <li class="rounded-box">
                        <router-link to="/about" class="hover:text-primary">About</router-link>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <nav class="flex-none hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li class="rounded-box">
                        <router-link to="/" class="hover:text-primary">Accueil</router-link>
                    </li>

                    <li class="rounded-box">
                        <router-link to="/contact" class="hover:text-primary">Contact</router-link>
                    </li>
                    <li class="rounded-box">
                        <a href="#" class="hover:text-primary">Services</a>
                    </li>
                    <li class="rounded-box">
                        <router-link to="/about" class="hover:text-primary">About</router-link>
                    </li>
                    <details class="dropdown">
                        <summary class=" m-1">Lessons</summary>
                        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li class="rounded-box">
                                <router-link to="/TextInt" class="hover:text-primary">Texte Interpolation</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/inlineTemp" class="hover:text-primary">Comprendre la Directive
                                    v-html</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/attrBind" class="hover:text-primary">Apprendre la directive
                                    v-bind</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/evntBind" class="hover:text-primary">Event Binding</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/twoWayBind" class="hover:text-primary">Two Way Binding</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/compProp" class="hover:text-primary">Les Computed Properties</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/watchers" class="hover:text-primary">Les Watchers</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/dynStyling" class="hover:text-primary">Dynamic Styling</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/condiRender" class="hover:text-primary">Conditional Rendering</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/listRender" class="hover:text-primary">List Rendering</router-link>
                            </li>
                        </ul>
                    </details>
                    <details class="dropdown">
                        <summary class=" m-1">Exos</summary>
                        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li class="rounded-box">
                                <router-link to="/ExoInt" class="hover:text-primary">Exo Texte
                                    Interpolation</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/ExoBind" class="hover:text-primary">Exo Binding</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/exoEvntBind" class="hover:text-primary">Exo Event
                                    Binding</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/exoWatch" class="hover:text-primary">Exo Watchers</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/exoDynStyl" class="hover:text-primary">Exo Dynamic Styling</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/exoDynStyl2" class="hover:text-primary">Exo Dynamic Styling correction</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/tpDynStyl" class="hover:text-primary">TP Dynamic Styling</router-link>
                            </li>
                            <li class="rounded-box">
                                <router-link to="/exoListRender" class="hover:text-primary">Exo List Rendering</router-link>
                            </li>
                        </ul>
                    </details>
                </ul>
            </nav>
        </div>
        <div class="navbar-end">
            <a class="btn">Button</a>
        </div>
    </div>
</template>