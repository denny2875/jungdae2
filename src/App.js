import './App.css';
import Money from './features/Money';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './store/MoneySlice';

function App() {

  const dispatch = useDispatch();

  const list = useSelector(state => state.money.list);

  const total = useSelector(state => state.money.total);

  return (
    <div>
      <h2>가계부</h2>
      <Money></Money>
      {/* 리스트 */}
      <h3>총금액: {total}</h3>
      <ul>
        {
          list !== null &&
          list.map((m) => {
            return (<li>({m.type}){m.price}
              <button className='removeBtn' onClick={() => {
                dispatch(remove(m.id));
              }}>삭제</button>
            </li>);
          })
        }
      </ul>
    </div >
  );
}

export default App;