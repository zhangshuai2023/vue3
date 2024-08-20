function fnPointDiv(slots:{one?: JSX.Element, tow?: JSX.Element}){
  function move(event: any){
    console.log(event.clientX);
  }
  return <div onMousemove={move} style="width:500px; height:500px; border:1px solid red;">
    { slots?.one }
    { slots?.tow }
  </div>
}
export default fnPointDiv