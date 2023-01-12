import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="postavy">
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Charlie_Harper_(Two_and_a_Half_Men)">
              charlie
            </a>
          </li>
          <li>
            <a href="https://twoandahalfmen.fandom.com/wiki/Alan_Harper">
              alan
            </a>
          </li>
          <li>
            <a href="https://twoandahalfmen.fandom.com/wiki/Berta">berta</a>
          </li>
          <li>
            <a href="https://twoandahalfmen.fandom.com/wiki/Jake_Harper?so=search">
              jake
            </a>
          </li>
          <li>
            <a href="https://twoandahalfmen.fandom.com/wiki/Evelyn_Harper?so=search">
              evelyn
            </a>
          </li>
          <li>
            <a href="https://twoandahalfmen.fandom.com/wiki/Herb_Melnick?so=search">
              herb
            </a>
          </li>
        </ul>
      </div>
      <div className="kontakt">
        &copy; 2022 Dawid Lebeda | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
