import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  const [className, setClassName] = useState(null)

  return (
    <section className='v-wrapper'>
      <div className="paddings innerwidth flexcenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Value" />
          </div>
        </div>
        <div className="flexcolstart v-right">
          <span className='orangetext'>Our Values</span>
          <span className="primarytext">Values We Give to You</span>
          <span className='secondarytext'>We are always ready to help by providing the best services for
            <br />
            We believe a good place to live and make your life better
          </span>
          <Accordion className='accordion' allowMultipleExpanded={false} 
          preExpanded={[0]}>


                   
                
            {data.map((item, i) =>  {

              
              
           
           return (
            
              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordionbutton flexcenter'>

                        <AccordionItemState>
                          {({
                            expanded})=> expanded 
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                            }
                        </AccordionItemState>


                    <div className="flexcenter icon"> {item.icon}</div>
                    <span className="primarytext">{item.heading}</span>

                    <div className="flexcenter icon">
                      <MdOutlineArrowDropDown size = {20}/>
                    </div>

                    <AccordionItemPanel>
                      <p className='secondarytext'> {item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItemButton>
                </AccordionItemHeading>
              </AccordionItem>
            );
                          })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
