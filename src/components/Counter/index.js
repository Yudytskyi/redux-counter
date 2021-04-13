import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createIncrementAction,
  createDecrementAction,
  createSetStepAction,
} from '../../actions';

function Counter(props) {
  const { value, increment, decrement, setStep } = props;
  return (
    <article style={{ margin: '20% 30%', fontSize: '50px' }}>
      <h1>{value}</h1>
      <input
        type="number"
        onChange={({ target: { value: step } }) => setStep(+step)}
      />
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = state => {
  return state.counter;
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(createIncrementAction()),
    decrement: () => dispatch(createDecrementAction()),
    setStep: v => dispatch(createSetStepAction(v)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
