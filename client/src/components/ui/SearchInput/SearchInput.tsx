import { Search, SearchIconWrapper, StyledInputBase } from "./SearchTheme";
import SearchIcon from "@mui/icons-material/Search";
const SearchInput = () => {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          id="search"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
};

export default SearchInput;
