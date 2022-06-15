import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../App.css"

export default function SelectVariants() {
  const [list, setList] = React.useState('');

  const handleChange = (event) => {
    setList(event.target.value);
  };

  return (
    <div className="selectVariants">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">정렬</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={list}
          onChange={handleChange}
          label="정렬"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>거래제안순</MenuItem>
          <MenuItem value={20}>조회수순</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
