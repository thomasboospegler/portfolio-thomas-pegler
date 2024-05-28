import React, {
  useContext, lazy, Suspense, useEffect,
} from 'react';
import Aos from 'aos';
import PortfolioContext from '../context/PortfolioContext';
import { Loading } from '.';
import '../styles/MyToolbox.css';
import 'aos/dist/aos.css';

function MyToolbox() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const { darkMode } = useContext(PortfolioContext);

  const FrontEndTools = lazy(() => import('./FrontEndTools'));
  const BackEndTools = lazy(() => import('./BackEndTools'));
  const GeneralTools = lazy(() => import('./GeneralTools'));

  return (
    <section
      className={darkMode ? 'toolbox-wrapper-dark' : 'toolbox-wrapper-light'}
      id="toolbox"
    >
      <section className="toolbox-title">
        <div>
          <span data-aos="fade-right" data-aos-once className="html-tag">
            {'<h2>'}
          </span>
          <h2 data-aos="flip-up" data-aos-once>
            My Toolbox
          </h2>
          <span data-aos="fade-left" data-aos-once className="html-tag">
            {'</h2>'}
          </span>
        </div>
        <div>
          <span
            data-aos="fade-down"
            data-aos-once
            className="html-tag html-trigger"
          >
            {'<p>'}
          </span>
          <p data-aos="flip-up" data-aos-once>
            The skills, tools and technologies I use to bring projects to life:
          </p>
          <span
            data-aos="fade-up"
            data-aos-once
            data-aos-anchor=".html-trigger"
            className="html-tag"
          >
            {'</p>'}
          </span>
        </div>
      </section>
      <section className="toolbox-skills">
        <span className="html-tag">{'<section>'}</span>
        <Suspense fallback={<Loading />}>
          <FrontEndTools />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <BackEndTools />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <GeneralTools />
        </Suspense> 
        <span className="html-tag">{'</section>'}</span>
      </section>
    </section>
  );
}

export default MyToolbox;
