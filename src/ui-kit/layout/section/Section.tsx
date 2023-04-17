import {memo} from 'react';

import Container from '@ui-kit/layout/container';
import Title from '@ui-kit/layout/title';

import {SectionType} from './types';

const Section: SectionType = ({title, children}) => {
  return (
    <div className="py-20">
      <Container>
        {title && <Title title={title} />}
        {children}
      </Container>
    </div>
  );
};

export default memo(Section);
