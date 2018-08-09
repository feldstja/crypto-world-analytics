import React from 'react';


export default class Faq extends React.Component {

  render() {
    return (
      <div className="page">
      <div className="allButtons">
        <button className="homebutton" onClick={() => this.props.redirect(0)}>Home</button>
        <button className="aboutbutton" onClick={() => this.props.redirect(1)}>About Crypto</button>
        <button className="startbutton" onClick={() => this.props.redirect(2)}>How To Start</button>
        <button className="techniquesbutton" onClick={() => this.props.redirect(3)}>Trading Techniques</button>
        <button className="toolsbutton" onClick={() => this.props.redirect(4)}>Trading Tools</button>
        <button className="faqbutton" style={{backgroundColor: 'black', color: 'white'}} onClick={() => this.props.redirect(5)}>FAQ</button>
      </div>
      <div>
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
        <h4><b>1. How much should I put into it?</b></h4>
        <p><i>A good rule of thumb is you should put however much you can afford to lose. This is not because you are going to lose it, but because you should not be relying on the money made from this. Your life should not change based on your losses in crypto. </i></p>
        <h4><b>2. Should I trade or hold?</b></h4>
        <p><i>The type of trader you are depends on not only your preference, but your time availability. If you do not have time or you do not want to keep checking up on your portfolio, then you should invest and hold. However, if you have time to do the research and handle the stress of the volatility, then day trading just might be for you. </i></p>
        <h4><b>3. Do I have to use technical analysis?</b></h4>
        <p><i>No, it is simply a tool that can help in your investments but it is not a guarantee of profit. Many people simply read the charts and base their investments of gut feelings and do just fine.</i></p>
        <h4><b>4. Is there a difference between a coin and a token?</b></h4>
        <p><i>Coins are just method of payment while tokens may present a company's share, give access to product or service, and perform many other functions. Coins are currencies that can be used for buying and selling things. You can buy a token with a coin, but not vice versa. Coin operates independently, while token has a specific use in the project's ecosystem.</i></p>
        <h4><b>5. Why are people against crypto?</b></h4>
        <p><i>There will always be skeptics of revolutionary movements. People were skeptical of the power of the internet as well and now they cannot live their lives without it.</i></p>
        <h4><b>6. At what point should I quit investing and take my money out?</b></h4>
        <p><i>
        It is all based on preference. It would be wise to pull money out occasionally to claim your profits, but you can take out all of your money if you please. However, imagine how the people who pulled out all of their money investing in Bitcoin back in 2011 feel today... </i></p>
        <h4><b>7. What are mistakes that everyone makes when trading?</b></h4>
        <p><i>The biggest mistake people make in my opinion is letting their emotions get to them. The crypto market is very volatile, and if you want to see your coins moon, then you also have to deal with the big dips. It is important to learn self-control and patience when trading crypto. Treat each mistake as a learning experience. Even better, learn from others' mistakes to save you time AND money.  </i></p>
      </div>
      </div>
    </div>
    )
  }
}
