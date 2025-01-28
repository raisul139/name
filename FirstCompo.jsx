function FirstCompo({props})
{
    console.log(props);
    const {strCategory,strCategoryThumb}=props
    console.log(strCategory)

    return(


       <div>
       <div style={{ backgroundColor: 'pink',margin:'20px', padding: '20px', borderRadius: '10px' }}>
       <h1>Name:{props.strCategory}</h1>
       <img src={props.strCategoryThumb}></img>
       <p> About item: {props.strCategoryDescription}</p>
       </div>
       </div>

    )
}
export default FirstCompo