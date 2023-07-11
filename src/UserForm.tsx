import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string
  lastName: string
  age: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
      className="border border-black rounded-md p-1"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
      className="border border-black rounded-md p-1"
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
      className="border border-black rounded-md p-1"
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}
