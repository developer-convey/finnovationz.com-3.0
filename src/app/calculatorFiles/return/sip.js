import React from "react";
import "./../return/sip.css";

export function SIP() {
  return (
    <div className="mainhead">
      <div className="main2">
        <h1 className="title1">SIP Return Calculator</h1>

        <h2 className="title">What is SIP?</h2>
        <p className="text">
          A Systematic Investment Plan (SIP) is a method of mutual fund
          investment. </p>
          
        <p className="text">
          
          It involves making regular, fixed investments in a mutual
          fund scheme, which could be daily, weekly, monthly, or yearly. One of
          the key advantages of SIP is its accessibility. You can start
          investing with as little as Rs.500 or Rs.1000.</p>
          
        <p className="text">
        Over time, consistent
          SIP investments can lead to significant wealth accumulation.
        </p>

        <h2 className="title">Long term investment strategy</h2>
        <p className="text">
          SIP works on the principle of rupee cost averaging.</p>
          
        <p className="text">

           As the net asset
          value (NAV) of a mutual fund fluctuates with market conditions, you
          purchase units at different prices over time. This can help mitigate
          the impact of market volatility. This strategy has proved to be
          particularly beneficial for long-term investors.
        </p>

        <h2 className="title">What is an ideal SIP amount?</h2>
        <p className="text">
          An ideal amount for savings should be at least 20% of your annual
          income. You can choose to invest this sum in various investment
          schemes according to your requirement. SIP value can be as minimum as
          Rs.500 and maximum as Rs.1 lakh per day.
        </p>

        <h2 className="title">Where to invest through SIP?</h2>
        <p className="text">
          Usually, SIPs are made in mutual funds. You can also choose SIPs in
          new fund offers, and ETFs. Average Returns on Investment (ROI) in SIP
          varies depending on the type of fund. You can expect a return of 6 to
          8% in large-cap debt mutual funds and 12 to 16% in large-cap equity
          funds. Although the numbers are largely dependent on the stock market
          performance, planned investment spread across the year mitigates the
          impact of market crashes.
        </p>

        <h2 className="title">How to choose SIP?</h2>
        <p className="text">
          Before you start SIP, decide a goal for your investment. Are you
          planning to invest for your retirement benefits? Or are you planning
          for your child's future? Or is it for buying a new house? Each of the
          scenarios would require a different outcome and at a different time.
          The nature of risk in all these cases will also vary. Risk and returns
          are proportional to each other: High risk = High returns, Low risk =
          Low returns.
        </p>

        <h2 className="title">How long should I invest in SIP?</h2>
        <p className="text">
          Time also plays an important role in investment. You must be aware of
          the power of compound interest. Or in the words of Warren Buffett,
          “Building a little snowball and rolling it down a very long hill”.
          Continuing with our use case above, retirement benefit funds would be
          needed when you are almost 60. Your child's education fund would be
          needed in the near future, say in 15 years. Funds for buying a house
          would be needed in a shorter time.
        </p>

        <h2 className="title">How to use our SIP Calculator?</h2>
        <p className="text">In the calculator above, you need to enter:</p>

        <h3 className="heade">SIP amount</h3>
        <p className="text">The amount you would like to make a SIP of.</p>

        <h3 className="heade">No. of Years</h3>
        <p className="text">For which you would like to keep investing.</p>

        <h3 className="heade">Rate</h3>
        <p className="text">Your expected Rate of return.</p>

        <p className="text">
          For example, if you wish to invest Rs. 20,000/- per month for 5 years
          expecting a return of 10%. At the end of 5 years, your investment of
          12 lakhs will value approximately 15 lakhs.
        </p>

        <p className="text">
          You can choose SIP according to your investment goal and your
          risk-taking capacity. Remember to follow the 50:30:20 rule when
          planning your investment. This way, you always have your savings
          invested without worrying about your daily needs.
        </p>
      </div>
    </div>
  );
}

export default SIP;
