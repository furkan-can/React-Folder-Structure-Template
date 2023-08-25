import { useSelector } from 'react-redux';
// import { increment, decrement } from '../app/store/slices/counterSlice';

const About = () => {
  const counterValue = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div className='flex flex-col'>
      About
      <p>Counter Value: {counterValue}</p>
    </div>
  )
}

export default About
