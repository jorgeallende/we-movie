import { LoadingImage, LoadingWrapper } from './style'
import LoaderImg from "../../assets/loader.png"

const Loader = () => {
    return (
        <LoadingWrapper>
            <LoadingImage src={LoaderImg} />
        </LoadingWrapper>
    )
}

export default Loader