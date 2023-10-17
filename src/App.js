import { useRef } from "react";
import Child from "./Child";

function App() {
	const childRef = useRef(null);
	// 웬만하면 자식컴포에서 사용했던 변수명을 사용하는 것이 좋다
	const handleBtnClick = ()=>{
		childRef.current.focus();
		// 원래 handle어쩌고 함수 안 써도 되지만 익숙해지면 이거 한 줄만 적으면 됨
	}
	return (
		<div>
			<Child ref={childRef}/>
			<button onClick={handleBtnClick}>포커스</button>
		</div>
	);
}

export default App;

// 정리
/*
일반적으로 리액트에서 컴포넌트는 자신의 내부상태와 렌더링을 스스로 관리한다
부모컴포넌트는 자식컴포넌트에게 일방적으로 데이터나 함수를 props라고 하는 것을 통해서 전달한다
그러나 때로는 자식컴포넌트의 돔 요소에 부모가 직접 접근해야할 때가 있다
	이때 forwardRef를 사용한다

	사용해야하는 경우의 수
1. 부모가 자식컴포의 DOM요소에 직접 접근해야할 때
2. 부모가 자식컴포의 메소드를 직접 호출해야할 때

순서
1. 자식 컴포를 rafce (화살표함수 표현식)으로 만들어야 한다.
2. forwardRef로 해당 컴포넌트함수를 감싸준다
3. forwardRef 함수에 콜백함수를 써서 전달된 참조값과 인스턴스(child에 적혀있는 설정과 반환값)을 참조설정으로 부모컴포넌트에 반환
4. 부모컴포넌트에서 자식컴포넌트를 사용하게 될 ref값과 prop을 사용해서 부모에게 전달한다


*/ 
