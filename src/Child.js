import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Child = forwardRef((props, ref)=>{
    const childRef = useRef(null); //전달하고자 하는 참조값

    //설정              어떤것을 참조할 것인가, 함수
    useImperativeHandle(ref,()=>({
        focus:()=>{
            childRef.current.focus();
        }
    }));
    // child가 가지고 있는 어떤 함수를 useim어쩌고 2번째 인수에다가 집어넣고 1번인수는 input을 가리키는 ?
    return <input ref={childRef}/> //반환값
})

export default Child

// const Child = () => {
//   return (
//     <div>Child</div>
//   )
// }
