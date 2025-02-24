
function InputField(props: any) {
    return <input 
            type={props.type}
            id={props.id}
            name={props.name}
            className="border rounded-md text-center"
             />
}

export default InputField;