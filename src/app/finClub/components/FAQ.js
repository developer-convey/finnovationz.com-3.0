import React from 'react';
import Style from '../style/finance.module.css'
import Accordion from 'react-bootstrap/Accordion';
function FAQ(props) {
    return (
        <section className={` ${Style.faqsec}`} id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='mb-md-4'>Frequently Asked Questions</h2>


                        <Accordion   className="faqaccordion">
                        {props.data.map((item,index)=>{
                            return(
                                <>
                                 <Accordion.Item eventKey={`${index}`} key={index}>
                                    <Accordion.Header>{item.question}</Accordion.Header>
                                    <Accordion.Body>
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }}/>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </>
                            )
                        })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;