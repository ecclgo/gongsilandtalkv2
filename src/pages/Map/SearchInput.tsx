import { SearchInputBox, SearchInputText } from "@/components/map/SubFunction"
import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchInput({ SearchMap, handleSearchAddress, state, searchAddress }: any) {

  console.log(state);
  console.log(searchAddress);
  return (
    <>
      <div>
        <SearchInputBox>
          <FaSearch className="search-icon" style={{ position: "absolute", top: "15px", left: "5px", zIndex: "999999", cursor: "pointer" }} onClick={SearchMap} />
          <SearchInputText type="search" onChange={handleSearchAddress} />
        </SearchInputBox>
      </div>
    </>
  )
}