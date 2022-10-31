import React, { Component } from 'react'
import Input from '../../Input/Input'

export default class EmailsFromInstagram extends Component {
  render() {
    return (
      <>
        <section className='EmailsFromInstagram mx-10'>
            <div className='mb-3'><h3>Emails from Instagram</h3></div>
            <div>
                <div className="mytabs">
                    <Input type="radio" id="tabfree" name="mytabs"  />
                    <label htmlFor="tabfree">Security</label>
                    <div className="tab">
                        <p>Security and login emails from Instagram in the last 14 days will appear here. You can use it to verify which emails are real and which are fake. Learn more.</p>
                </div>
                    <Input type="radio" id="tabsilver" name="mytabs" />
                    <label htmlFor="tabsilver">Other</label>
                    <div className="tab">
                        <p>Other emails from Instagram in the last 14 days that aren't about security or login will appear here. You can use it to verify which emails are real and which are fake. Learn more..</p>
                    </div>
                   
                </div>
            </div>
        </section>
      </>
    )
  }
}
