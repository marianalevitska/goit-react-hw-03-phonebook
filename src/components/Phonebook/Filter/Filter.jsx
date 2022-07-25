import stl from './filter.module.css';

function Filter({ filter, onFilter }) {
    return (
        <>
            <label htmlFor='filter' className={stl.label}>Find contacts</label>
            <input
                value={filter}
                type='text'
                placeholder='Find contacts by name'
                id='filter'
                className={stl.input}
                onChange={onFilter}
            />
        </>
    )
}

export default Filter;
