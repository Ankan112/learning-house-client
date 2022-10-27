import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='w-75 m-auto mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen className='text-start'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why online learning is an effective way to learn?</Accordion.Header>
                    <Accordion.Body>
                        5 Reasons Why Online Learning is More Effective
                        #1. Students learn more than they do in traditional courses.
                        #2. Retention rates are higher with online learning.
                        #3. Online learning requires less of a time investment.
                        #4. More frequent assessments can reduce distractions.
                        #5. eLearning is the greener option.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What's the meaning of online education?</Accordion.Header>
                    <Accordion.Body>
                        Online learning is education that takes place over the Internet. It is often referred to as “e- learning” among other terms. However, online learning is just one type of “distance learning” - the umbrella term for any learning that takes place across distance and not in a traditional classroom.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why skill development is important?</Accordion.Header>
                    <Accordion.Body>
                        The development of skills can contribute to structural transformation and economic growth by enhancing employability and labor productivity and helping countries to become more competitive.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Disadvantages of online learning?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Online courses require more time than on-campus classes. ...</li>
                            <li>Online courses make it easier to procrastinate. ...</li>
                            <li>Online courses require good time-management skills. ...</li>
                            <li>Online courses may create a sense of isolation. ...</li>
                            <li>Online courses allow you to be more independent.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;