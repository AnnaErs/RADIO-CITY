import {memo} from 'react';

import Container from '@ui-kit/layout/container';

import arrow from './arrow.png';
import mg from './mg.gif';
import {MainSectionType} from './types';

const MainSectionHeadings = {
  mainTitle: {
    firstPart: 'радио',
    secondPart: 'сити'
  },
  subTitle: 'Крупнейший оператор радиосвязи  Свердловской области с 1995 года.',
  buttonTitle: 'Узнать больше'
};

const MainSection: MainSectionType = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-9 justify-end">
          <div className="flex flex-col justify-center gap-10 w-5/12">
            <div className="flex flex-row text-3xl uppercase">
              <p>{MainSectionHeadings.mainTitle.firstPart}</p>
              <p className="text-blue ">—</p>
              <p>{MainSectionHeadings.mainTitle.secondPart}</p>
            </div>
            <div className="text-2xl flex-wrap w-3/4">{MainSectionHeadings.subTitle}</div>
            <div>
              <button className="rounded-[1.25rem] bg-blue ease-in-out duration-200 hover:bg-lavender active:bg-pink">
                <a href="/#about-us" className="flex flex-row items-center justify-center gap-2 text-2xl px-6 py-3">
                  {MainSectionHeadings.buttonTitle}
                  <img src={arrow} width={30} alt="arrow" />
                </a>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={mg} alt="Radiowaves" className="w-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(MainSection);
