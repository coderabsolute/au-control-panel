export default [
    {   route: 'branches',
        name: 'branches',
        moduleId: './pages/branches/index',
        nav: true,
        title: 'Branches',
        auth: true
    },{
        route: ['', 'dashboard'],
        name: 'welcome',
        moduleId: './pages/dashboard/index',
        nav: true,
        title: 'Welcome',
        auth: true
    },{
        route: 'audit',
        name: 'audit',
        moduleId: './pages/audit/index',
        nav: true,
        title: 'Audit',
        auth: true
    },{
        route: 'login',
        name: 'login',
        moduleId: './pages/auth/login',
        nav: false,
        title: 'Login',
        auth: false
    },{
        route: 'logout',
        name: 'logout',
        moduleId: './pages/auth/logout',
        nav: false,
        title: 'Logout',
        auth: false
    }
];
