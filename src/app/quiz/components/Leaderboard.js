import LeaderboardStyle from '../style/leaderboard.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LeaderBoardWeekly from './LeaderBoardWeekly';

function Leaderboard() {
    return (
<>
<section className={`${LeaderboardStyle.Leaderboard}` }>
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h2>Leaderboard</h2>
            </div>
            <div className='col-12 '>
                <div className='Leaderboard_Tab'>
                    <Tabs
                        defaultActiveKey="Weekly"
                        id="leaderboard"
                        className={`${LeaderboardStyle.Leaderboard_Tab} mb-3 justify-content-center border-0  ms-auto me-auto` }
                        >
                        <Tab eventKey="Weekly" title="Weekly">
                            <LeaderBoardWeekly />
                        </Tab>
                        <Tab eventKey="Monthly" title="Monthly">
                        <LeaderBoardWeekly />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</section>
</>



);
}

export default Leaderboard;