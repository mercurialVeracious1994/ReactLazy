import {memo} from 'react';
const Book = ({title})=>{
    return <section className="book">
        <p>{title}</p>
    </section>
}
export default memo(Book);