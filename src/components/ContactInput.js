import React from "react"
import "../styles/ContactInput.css"

export function TextInput({ isPhone, title, name }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {title}
      </label>
      {isPhone ? (
        <input
          title="format: xxx-xxx-xxxx"
          type="tel"
          id={name}
          name={name}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      ) : (
        <input type="text" name={name} id={name} />
      )}
    </div>
  )
}

export function TextArea({ title, name }) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {title}
      </label>
      <textarea name={name} id={name} cols="30" rows="15"></textarea>
    </div>
  )
}

export function CheckboxInputs({ title, name, inputNames }) {
  return (
    <fieldset className="input-wrapper">
      <h3 className="input-label">{title}</h3>
      {inputNames.map(text => {
        return (
          <label className="checkbox-label">
            <input type="checkbox" name={name} id={text} value={text} /> {text}
          </label>
        )
      })}
    </fieldset>
  )
}
