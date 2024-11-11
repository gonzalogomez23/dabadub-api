const PrimaryButton = ({children}) => {
  return (
    <button type="button" class="text-white bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5">{children}</button>
  )
}

export default PrimaryButton
