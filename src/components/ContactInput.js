import React from "react"
import "../styles/ContactInput.css"

export function TextInput({ isPhone, name }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor="">
        {name}
      </label>
      {isPhone ? (
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      ) : (
        <input type="text" name="" id="" />
      )}
    </div>
  )
}

export function TextArea({ name }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {name}
      </label>
      <textarea name={name} id={name} cols="30" rows="15"></textarea>
    </div>
  )
}

export function CheckboxInputs({ question, inputNames }) {
  return (
    <div className="input-wrapper">
      <h3 className="input-label">{question}</h3>
      {inputNames.map(name => {
        return (
          <div>
            <input type="checkbox" id={name} name={name} />
            <label for={name}>{name}</label>
          </div>
        )
      })}
    </div>
  )
}
