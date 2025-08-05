import LeaderboardStyle from "../style/leaderboard.module.css";

function LeaderBoardTable() {
  return (
    <>
      <div className={`${LeaderboardStyle.Leaderboard_table_content}`}>
        <div className={`${LeaderboardStyle.Leaderboard_table_content_head}`}>
          <div className={`${LeaderboardStyle.first_col_head}`}>
            <span>Place</span>
          </div>
          <div className={`${LeaderboardStyle.second_co_headl}`}>
            <span>Player</span>
          </div>
          <div className={`${LeaderboardStyle.third_col_head}`}>
            <span>Points</span>
          </div>
        </div>

        <div className={`${LeaderboardStyle.Leaderboard_table_content_inner}`}>
          <div className={`${LeaderboardStyle.first_col}`}>
            <img src="/trophy.svg" />
            <span>4</span>
          </div>
          <div className={`${LeaderboardStyle.second_col}`}>
            <img src="/images/second_win.svg" />
            <span>Ramesh Yadav</span>
          </div>
          <div className={`${LeaderboardStyle.third_col}`}>
            <span>1114</span>
          </div>
        </div>

        <div className={`${LeaderboardStyle.Leaderboard_table_content_inner}`}>
          <div className={`${LeaderboardStyle.first_col}`}>
            <img src="/trophy.svg" />
            <span>5</span>
          </div>
          <div className={`${LeaderboardStyle.second_col}`}>
            <img src="/images/second_win.svg" />
            <span>Ramesh Yadav</span>
          </div>
          <div className={`${LeaderboardStyle.third_col}`}>
            <span>1114</span>
          </div>
        </div>

        <div className={`${LeaderboardStyle.Leaderboard_table_content_inner}`}>
          <div className={`${LeaderboardStyle.first_col}`}>
            <img src="/trophy.svg" />
            <span>6</span>
          </div>
          <div className={`${LeaderboardStyle.second_col}`}>
            <img src="/images/second_win.svg" />
            <span>Ramesh Yadav</span>
          </div>
          <div className={`${LeaderboardStyle.third_col}`}>
            <span>1114</span>
          </div>
        </div>

        <div className={`${LeaderboardStyle.Leaderboard_table_content_inner}`}>
          <div className={`${LeaderboardStyle.first_col}`}>
            <img src="/trophy.svg" />
            <span>7</span>
          </div>
          <div className={`${LeaderboardStyle.second_col}`}>
            <img src="/images/second_win.svg" />
            <span>Ramesh Yadav</span>
          </div>
          <div className={`${LeaderboardStyle.third_col}`}>
            <span>1114</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoardTable;
