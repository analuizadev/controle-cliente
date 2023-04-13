function Input({ type, name, placeholder, handleOnChange, value, maxLength }){
    return(
        <>
            <input 
            type={type}
            name={name}
            id={name}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
            />
        </>
    )
}

export default Input