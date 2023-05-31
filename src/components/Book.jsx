export function Book(props) {
    return (
        <tr>
            <td>{props.bookName}</td>
            <td>{props.bookAuthor}</td>
            <td>{props.bookISBN}</td>
            <td><img src={props.bookCover} height={100} alt={props.bookName} /></td>
            <td>{props.isBorrowed}</td>
        </tr>
    )
}