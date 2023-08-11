import './TodoSearch.css';
function TodoSearch({ searchValue, setSearchValue }) {
    //console.log(searchValue);
    return (
        <input placeholder="Buscar Tarea"
            className="TodoSearch"
            value={searchValue}
            //onChange={console.log('Escribiste algo')}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}
export { TodoSearch };

