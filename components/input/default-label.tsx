interface DefaultLabelProps {
    htmlFor: string;
    labelName: string;
}

export default function DefaultLabel({ htmlFor, labelName }: DefaultLabelProps) {
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-500">
            {labelName}
        </label>
    );
}
