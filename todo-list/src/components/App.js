import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input : '', //input 값
    todos : [
      {id : 0, text : '리액트공부하기', done : true},
      {id : 1, text : '컴포넌트 스타일링 해보기', done : false }
    ]
  }

  //일정 데이터 안에 들어가는 id 값 
  id = 1
  getId = () => {
    return ++this.id; //현재 값에서 1을 더한 값을 반환
  }

  //새 데이터 추가 
  handleInsert = () => {
    const { todos , input } = this.state;
    //새 데이터 객체 만들기
    const newTodo = {
      text : input,
      done : false,
      id : this.getId()
    }
    this.setState({
      todos : [...todos, newTodo],
      input : ''
    })
  }

  //todo 아이템 토글
  handleToggle = (id) => {
    //id로 배열의 인덱스를 찾습니다.
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    //찾은 데이터의 done 값을 반전시킵니다. 
    const toggled = {
      ...todos[index],
      done : !todos[index].done
    }

    // slice 사용으로 index 전후의 데이터 복사 후 사이의 변경된 객체 삽입
    this.setState({
      todos : [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    })

  }

  //데이터 삭제
  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    //slice로 전후 데이터 복사 해당 id는 제외
    this.setState({
      todos : [
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    })
  }
  //input 값 변경
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input : value
    })
  }


  render() {
    const { input , todos } = this.state;
    const {handleChange , handleInsert , handleToggle , handleRemove } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} value = {input} onInsert={handleInsert} />
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} /> 
      </PageTemplate>
    );
  }
}

export default App;
