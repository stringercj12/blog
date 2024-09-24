import "./core/styles/global.css";
import {Header} from "./components/Header";
import {NewPost} from "./pages/NewPost";

export function App() {

    return (
        <>
            <Header/>
            <NewPost/>
        </>
    )
}