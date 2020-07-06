import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }
    return (
        <section id="mainer" className="mt-5 mb-5 containter-fluid p-5">
            <div className="container">
                <form>
                    <input type="text" value={text} onChange={(e)=>{
                        onChange(e.target.value)
                    }} autoFocus placeholder="Search for characters ..... " className="form-control inpdes"/>
                </form>
            </div>
        </section>
    )
}

export default Search
