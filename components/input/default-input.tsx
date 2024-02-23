interface DefaultInputProps {
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
}

export default function DefaultInput({ type, id, name, placeholder, required }: DefaultInputProps) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            className="mt-1 pl-4 h-10 block w-full rounded-lg border-gray-300 shadow-sm outline-none"
            placeholder={placeholder}
            required={required ? required : false}
        />
    );
}
