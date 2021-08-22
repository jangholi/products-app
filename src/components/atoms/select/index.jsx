import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function SelectBox({
  label, options, handleChange, disabled,
}) {
  const [val, setVal] = useState('');

  const handleSelectChange = (e) => {
    setVal(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="label">{label}</InputLabel>
      <Select
        labelId="label"
        value={val}
        onChange={handleSelectChange}
        disabled={disabled}
      >
        {options.map((e) => (
          <MenuItem key={e} value={e}>{e}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectBox;
