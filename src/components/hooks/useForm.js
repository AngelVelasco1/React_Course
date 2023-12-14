import { useState } from "react"

export const useForm = (defaultValues= {}) => {
  const [formInfo, setFormInfo] = useState(defaultValues)

  const onChangeValue = (e) => {
    const { name, value } = e.target
    setFormInfo({
      ...formInfo,
      [name]: value
    })
  }
 
  return {
    ...formInfo,
    formInfo,
    onChangeValue
    
  }
}