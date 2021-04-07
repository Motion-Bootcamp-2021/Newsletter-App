import Header from './Header';
import ComingSoonMain from './ComingSoonMain';
import './ComingSoon.scss';


function ComingSoon(){

    return (
        <div className="page">
            <Header/>

            <main>
                <div className="main-container">
                    <ComingSoonMain />
                </div>
            </main>

        </div>
    )
}

export default ComingSoon;