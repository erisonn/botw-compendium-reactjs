import './Loading.scss'
import LoadingSVG from '../../static/loading.svg'

const Loading = () => {
    return ( 
        <div className="loading">
            <img src={LoadingSVG} alt="Loading..."/>
        </div>
    );
}
 
export default Loading;