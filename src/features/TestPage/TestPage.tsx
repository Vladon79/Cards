import SuperCheckbox from "../../ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../ui/common/c1-SuperInputText/SuperInputText";
import s from './TestPage.module.scss'
import blockStyle from '../../styles/container.module.scss'
import Preloader from "../../ui/common/Preloader/Preloader";

const TestPage = () => {
    return (
        <div className={`${s.testContainer} ${blockStyle.container}`}>
            <h2>Test page</h2>
            <SuperCheckbox children={'hello'}/>
            <div className={s.buttonInputBlock}>
                <SuperInputText></SuperInputText>
                <SuperButton >Button</SuperButton>
            </div>
            <div className={s.buttonInputBlock}>
                <SuperInputText error={'error'}></SuperInputText>
                <SuperButton red={true}>Red</SuperButton>
            </div>
        </div>
    )
}

export default TestPage