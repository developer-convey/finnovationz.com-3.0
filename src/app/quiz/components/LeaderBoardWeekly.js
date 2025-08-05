import { Badge } from 'react-bootstrap';
import LeaderboardStyle from '../style/leaderboard.module.css'
import LeaderBoardTable from './LeaderBoardTable';
function LeaderBoardWeekly() {
    return (
<>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <div className={`${LeaderboardStyle.Leaderboard_img_parent} position-relative` }>
                    <div className={`${LeaderboardStyle.second_win} ${LeaderboardStyle.lead_win}` }>
                        <img src='/images/second_win.svg' />
                        <p>Rohit Verma</p>
                        <span >1201 Pts</span>
                    </div>
                    <div className={`${LeaderboardStyle.first_win} ${LeaderboardStyle.lead_win}` }>
                        <img src='/images/second_win.svg' />
                        <p>Rohit Verma</p>
                        <span >1201 Pts</span>
                    </div>
                    <div className={`${LeaderboardStyle.third_win} ${LeaderboardStyle.lead_win}` }>
                        <img src='/images/second_win.svg' />
                        <p>Rohit Verma</p>
                        <span >1201 Pts</span>
                    </div>
                    <img src='/images/leaderboard_winners.svg' className={`${LeaderboardStyle.Leaderboard_img}` } />
                </div>
            </div>
            <div className='col-12'>
                <div className={`${LeaderboardStyle.Leaderboard_table}` }>
                    <LeaderBoardTable />
                </div>
            </div>
        </div>
</>



);
}

export default LeaderBoardWeekly;