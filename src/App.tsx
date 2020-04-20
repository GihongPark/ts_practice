import React from 'react';
// import Counter from './Counter';
// import MyForm from './MyForm';
// import ReducerSample from './ReducerSample';
// import { SampleProvider } from './SampleContext';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

function App() {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form)
  // }
  return (
    <>
      {/* <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />

      <SampleProvider>
        <ReducerSample />
      </SampleProvider> */}
      <CounterContainer />
      <TodoApp />
    </>
  );
}

export default App;
