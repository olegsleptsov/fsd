export const ToggleTaskCheckbox = ({
  isDone,
  onToggle,
                         }: {
  isDone: boolean,
  onToggle: () => void
}) => {
  return (
    <label>
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      done
    </label>
  )
}