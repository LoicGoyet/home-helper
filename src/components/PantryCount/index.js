import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PantryCount = ({ counts, className }) => (
  <Wrapper className={className}>
    <Row>
      {counts.map(count => {
        const style = {
          '--font-weight': count.isTotal ? 'bold' : '100',
        };

        return (
          <Col key={count.label} style={style}>
            <Value>{count.value}</Value>
            <Label>{count.label}</Label>
          </Col>
        );
      })}
    </Row>
  </Wrapper>
);

PantryCount.propTypes = {
  className: PropTypes.string,
  counts: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      isTotal: PropTypes.bool,
    })
  ).isRequired,
};

PantryCount.defaultProps = {
  className: undefined,
};

export default PantryCount;

const Wrapper = styled.section`
  padding: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  padding: 0 15px;
  flex-grow: 1;
  flex-basis: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Value = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: var(--font-weight);
`;

const Label = styled.span`
  display: block;
  font-weight: var(--font-weight);
  font-size: 0.75rem;
  letter-spacing: 0.0625em;
`;
