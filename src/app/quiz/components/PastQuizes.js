
import Style from '../style/course.module.css'
function PastQuizes() {
    return ( 
<>
<section className={` ${Style.PastQuizes} `}>
    <div className={` ${Style.custome_container}  container`} >
        <div className='row jjustify-space-between align-items-center'>
            <div className='col-12'>
                <h2 className={` ${Style.PastQuizes_h2} text-center`}>Past Quizzes</h2>
            </div>
            <div className='col-md-6 '>
                <div  className={` ${Style.custome_card_past}`}>
                    <div className={` ${Style.custome_card_img_parent_past} position-relative`} >
                        <span>COMPLETED</span>
                    </div>
                    <h4>How much do you know about mutual funds?</h4>
                    <div className={` ${Style.card_footer_past} `} >
                        <div className={` ${Style.card_footer_past_first} col-8`}>
                                <h5>Congratulations you have score <span>192 points</span></h5>
                                <h6>View Answers</h6>
                        </div>
                        <div className={` ${Style.card_footer_past_second} col-4 text-end`}>
                            <span>100%</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-md-6 '>
                <div  className={` ${Style.custome_card_past}  ${Style.custome_card_past_yellow}`}>
                        <div className={` ${Style.custome_card_img_parent_past} position-relative`} >
                            <span>COMPLETED</span>
                        </div>
                        <h4>How much do you know about mutual funds?</h4>
                        <div className={` ${Style.card_footer_past} `} >
                            <div className={` ${Style.card_footer_past_first} col-8`}>
                                    <h5>Congratulations you have score <span>192 points</span></h5>
                                    <h6>View Answers</h6>
                            </div>
                            <div className={` ${Style.card_footer_past_second} col-4 text-end`}>
                                <span>100%</span>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>


    </>
     );
}

export default PastQuizes;