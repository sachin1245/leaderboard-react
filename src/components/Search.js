const Search = ({ searchHandler }) => {

    return (
        <input onKeyUp={searchHandler} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mt-6" placeholder="search name" id="search" />
    )
}

export default Search;
