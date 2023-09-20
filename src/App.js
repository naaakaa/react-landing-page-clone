import './App.css';
import amazon from './amazon.jpeg';
import book from './bookcover.png';
import fbicon from './fb-icon.svg';
import instaicon from './instaicon.svg';
import logo from './logo.svg';
import star from './star.jpg';
import xicon from './xIcon.svg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button id="amazon">
          <img src={amazon} className="Amazon-logo" alt="amazon" />
          Purchase
        </button>
      </header>
      <img src={book} className="Book" alt="bookcover" />
      <p class="blue">Calm the mind. Change the world</p>
      <p>
        Modern life is hectic and relentless: trains delayed, endless emails
        filling the inbox, kids squabbling before bedtime… There has never been
        a more important time to rediscover your pause button. Calm is the book
        that will show you how to take back a little bit of peace, space and
        all-important calm. This book contains the simple tools, tricks and
        habits that will change the rest of your life. It is a practical and
        pleasurable guide to twenty-first century mindfulness.
      </p>
      <img src={star} className="" alt="bplaceholder" />
      <div class="review">
        <ul>
          <li>
            “Great collage of ideas and practical advice of how to reduce stress
            in this fast paced world. A beautifully presented book which even
            calms you down when you pick it up. I would recommend it to
            everyone.”
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
          </li>
          <li>
            “A beautifully presented book that is as lovely to look at as it is
            to read. Simple tips and inspiration on how to bring calm into your
            life. Highly recommend.”
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
            <img src={star} className="star" alt="star" />
          </li>
        </ul>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <footer>
        <table>
          Company About Careers Press Blog Meet our Instructor Calm Science
          Offers Buy a Gift Redeem a Gift Family Plan Calm Health Calm Business
          Help FAQ Contact Us Terms Privacy CCPA Notice Accessibility Statement
          Opt Out of Targeted Ads Cookies
          <img
            src={fbicon}
            className="Fb-icon"
            alt="facebook"
            height="20px"
            width="20px"
          />
          <img
            src={instaicon}
            className="Insta-icon"
            alt="Instagram"
            height="20px"
            width="20px"
          />
          <img
            src={xicon}
            className="X-icon"
            alt="X"
            height="20px"
            width="20px"
          />
        </table>
        <p>Copyright © 2023 Calm. All rights reserved</p>
      </footer>
    </div>
  );
}
