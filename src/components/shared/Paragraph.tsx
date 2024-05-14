
type ParagraphType<T> = {
  label: string,
  countryInfo: T
}

export const Paragraph = <T extends React.ReactNode>({ label, countryInfo }: ParagraphType<T>) => {
  return (
    <p className="font-medium">
      {label}: <span className="font-normal dark:text-gray-400"> {countryInfo ?? 'NA'}</span>
    </p>
  )
}
