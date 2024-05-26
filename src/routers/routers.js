import HomePage from "../components/HomePage";
import Settings from "../components/Settings";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Title1 from "../components/Title1";
import Title2 from "../components/Title2";
import Title3 from "../components/Title3";

const Pages = [
    {
        title: 'Sign In',
        path: '/',
        component: SignIn
    },
    {
        title: 'Sign Up',
        path: 'SignUp',
        component: SignUp
    },
    {
        title: 'HomePage',
        path: 'HomePage',
        component: HomePage,
        nestedRoute: [
            {
                title: 'title1',
                path: '',
                component: Title1
            },
            {
                title: 'title2',
                path: 'title2',
                component: Title2
            },
            {
                title: 'title3',
                path: 'title3',
                component: Title3
            },
        ]
    }
]

export default Pages