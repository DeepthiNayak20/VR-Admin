import './QandA.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'

const QandA = () => {
  const [accordian, setAccordian] = useState(false)
  const items = [
    {
      uuid: 1,
      heading:
        'What is load balancing, and why is it important to system design?',
      content: 'SSSS',
    },
    { uuid: 2, heading: 'bbb', content: 'SSSS' },
    { uuid: 3, heading: 'ccc', content: 'SSSS' },
    { uuid: 4, heading: 'ddd', content: 'SSSS' },
  ]
  return (
    <div>
      <Accordion allowZeroExpanded>
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="QandA-QuestionContainer">
                  <div className="QandA-QuestionNo">
                    Question&nbsp;{item.uuid}
                  </div>
                  <div className="QandA-containerItem">
                    <div className="QandA-head">{item.heading}</div>
                    <div className="QandA-body">
                      {' '}
                      <div className="QandA-delete">
                        {' '}
                        <button type="button" className="QandA-button">
                          <svg
                            width={37}
                            height={36}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.296 13.5v15H12.148v-15h12.148zm-2.278-9h-7.593L12.907 6H7.592v3h21.259V6h-5.315l-1.518-1.5zm5.314 6H9.111v18c0 1.65 1.366 3 3.037 3h12.148c1.67 0 3.037-1.35 3.037-3v-18z"
                              fill="#000"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="QandA-head">
                        {accordian ? (
                          <div
                            className="QandA-plus"
                            onClick={() => {
                              setAccordian(false)
                            }}
                          >
                            <svg
                              width={37}
                              height={36}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x={3.199}
                                y={16.5}
                                width={28.851}
                                height={3}
                                rx={1.5}
                                fill="#111"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="QandA-minus">
                            <div>
                              <svg
                                width={37}
                                height={36}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M29.013 19.5h-9.11v9h-3.038v-9h-9.11v-3h9.11v-9h3.037v9h9.111v3z"
                                  fill="#000"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default QandA