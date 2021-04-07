import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import store from './utils/store';
import './App';
import ComingSoon from './components/ComingSoon';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Onboarding from './components/OnboardingPage';
import ForgotPassword from './components/ForgotPassword';
import MainLayout from './components/layouts/MainLayout';

const Navigation = () => {

    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ComingSoon} />
                        <Route path="/main" component={MainLayout} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/onboarding" component={Onboarding} />
                        <Route path="/forgotpassword" component={ForgotPassword} />
                        <Route path="/read-later" component={MainLayout} />
                    </Switch>
                </Router>
            </AuthProvider>
        </Provider>
    );
};

export default Navigation;
