const { createApp, ref } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Import Quasar
Quasar.lang.set(Quasar.lang.fr);

// NavLink component
const NavLink = {
  props: {
    title: { type: String, required: true },
    link: { type: String, default: '#' },
    icon: { type: String, default: '' }
  },
  template: `
    <q-item clickable class="text-white" tag="a" :to="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  `
};

// Router routes
const routes = [
  {
    path: '/',
    component: {
      template: `
        <q-page class="q-pa-md">
          <div class="text-h4 q-mb-md">Entries</div>
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Financial tracking</div>
              <p>Manage your income and expenses here.</p>
            </q-card-section>
          </q-card>
        </q-page>
      `
    }
  },
  {
    path: '/settings',
    component: {
      template: `
        <q-page class="q-pa-md">
          <div class="text-h4 q-mb-md">Settings</div>
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Application Settings</div>
              <p>Configure your preferences here.</p>
            </q-card-section>
          </q-card>
        </q-page>
      `
    }
  }
];

// Create router
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Main App component
const App = {
  components: { NavLink },
  setup() {
    const leftDrawerOpen = ref(false);
    const navLinks = [
      { title: 'Entries', icon: 'savings', link: '/' },
      { title: 'Settings', icon: 'settings', link: '/settings' }
    ];

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      navLinks,
      toggleLeftDrawer
    };
  },
  template: `
    <q-layout view="hHh lpR lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-toolbar-title>
            <div class="absolute-center">
              <div class="toolbar-title-text">
                <q-icon name="savings" />
                Moneyballs
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        class="bg-primary"
        :width="250"
        :breakpoint="767"
        show-if-above
        bordered
      >
        <q-list>
          <q-item-label class="text-white" header>
            Navigation
          </q-item-label>

          <NavLink
            v-for="link in navLinks"
            :key="link.title"
            :title="link.title"
            :icon="link.icon"
            :link="link.link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  `
};

// Create and mount the app
const app = createApp(App);

// Use Quasar
app.use(Quasar, {
  config: {
    brand: {
      primary: '#00695c',
      secondary: '#26A69A',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      positive: '#7eb004',
      negative: '#D73F01',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
});

// Use router
app.use(router);

// Mount the app
app.mount('#q-app');
