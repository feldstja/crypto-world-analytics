import React from 'react';

export default class HowToStart extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="allButtons">
          <button className="homebutton" onClick={() => this.props.redirect(0)}>Home</button>
          <button className="aboutbutton" onClick={() => this.props.redirect(1)}>About Crypto</button>
          <button className="startbutton" style={{backgroundColor: 'black', color: 'white'}} onClick={() => this.props.redirect(2)}>How To Start</button>
          <button className="techniquesbutton" onClick={() => this.props.redirect(3)}>Trading Techniques</button>
          <button className="toolsbutton" onClick={() => this.props.redirect(4)}>Trading Tools</button>
          <button className="faqbutton" onClick={() => this.props.redirect(5)}>FAQ</button>
      </div>
      <h1>How To Start</h1>
      <br></br>
      <h3>Coinbase</h3>
      <p>The best and most popular way to start investing into cryptocurrency is through the exchange "Coinbase." Coinbase is the most user-friendly exchange that provides access to only four cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and Bitcoin Cash (BCH). </p>
      <p>As the leading Bitcoin exchange service, Coinbase can now do services like Ethereum exchange and Litecoin exchange. Beginners immediately buy coins at this company because of its reputation and popularity. This exchange gives away bitcoins easily that is why it is user-friendly to first timers. You can now buy bitcoins using your PayPal and other major credit cards.</p>
      <p>The best part about this exchange is if it were to suffer a breach of its online storage, the insurance policy would pay out to cover any customer funds lost as a result.</p>
      <p>Once you feel more confident trading the bigger volume coins, you can transfer however much crypto into other exchanges to trade other coins that have more volatility. However, it is important to keep in mind that not everyone benefits from the volatility. Understanding how to trade responsibly is crucial before you work your way into other exchanges with more cryptocurrencies.</p>
      <img src='https://lh3.googleusercontent.com/jEZYhjYnQHnLdwJyCqU0xCIZtR9fVXyZIuCvb8xm8Hm6QGLIwlf-oYI1i5Yb-JvAWYMfL97-r1jXhpo0-GYOoyaOdXhX4lQJV1Kz4SJ7NRlNhtFJ0Xyydf5AateEtBNSqP57-cyzuA=s246-p-k' />
    </div>
      )
    }
  }
