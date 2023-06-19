import { Provider } from "react-redux";
import { mainLayout } from "src/layouts/Main";
import { Calculator } from "../src/components/Calculator";
import store from "../src/store";

function MainIndexPage(): JSX.Element {
    return <>
        <Provider store={ store} >
            <Calculator />
        </Provider>
    </>
}

MainIndexPage.getLayout = mainLayout;

export default MainIndexPage;