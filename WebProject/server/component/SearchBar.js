import * as React from "react";
import "../App.css"
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";


function SearchBar() {
  return (
    <div className="searchBar" style={{ margin: 20, padding: 20 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <NativeSelect
            defaultValue={"none"}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={"none"}>통합검색</option>
            <option value={"title"}>제목</option>
            <option value={"publisher"}>ID</option>
            <option value={"local"}>위치</option>
          </NativeSelect>
        </FormControl>
        <TextField id="standard-search" type="search" variant="standard" placeholder={"희망 구매 물건 or 희망 거래 지역"}/>
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchBar;
