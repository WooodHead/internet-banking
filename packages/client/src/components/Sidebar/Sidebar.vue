<template>
    <div class="app-sidebar">
        <el-menu
            mode="vertical"
            style="height: 100%;"
            router
            :default-active="$route.path"
            background-color="rgb(var(--vs-dark)"
            text-color="rgb(var(--vs-light))"
        >
            <el-menu-item index="/home">
                <i class="el-icon-bank-card"></i>
                <template #title>Accounts</template>
            </el-menu-item>
            <el-menu-item index="/receivers">
                <i class="el-icon-s-order"></i>
                <template #title>Receiver List</template>
            </el-menu-item>
            <el-menu-item index="/history">
                <font-awesome-icon
                    fixed-width
                    style="width: 24px;"
                    icon="exchange-alt"
                />
                <template #title>History</template>
            </el-menu-item>
            <el-menu-item index="/debt">
                <font-awesome-icon
                    fixed-width
                    style="width: 24px;"
                    icon="hand-holding-usd"
                />
                <template #title>Debt</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Menu, MenuItem, Submenu } from "element-ui";
import {
    faExchangeAlt,
    faHandHoldingUsd,
    faShare,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);

library.add(faExchangeAlt);
library.add(faShare);
library.add(faHandHoldingUsd);

@Component({
    name: "app-sidebar",
})
export default class AppSidebar extends Vue {}
</script>

<style lang="scss">
.app-sidebar {
    height: 100%;
    [data-prefix="fas"] {
        margin-right: 5px;
    }
}
</style>
