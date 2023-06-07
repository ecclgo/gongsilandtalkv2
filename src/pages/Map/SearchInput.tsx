import { SearchInputBox, SearchInputText } from "@/components/map/SubFunction"
import React from "react"

export default function SearchInput({ handleConvertClick, handleSearchAddress }: any) {

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConvertClick();
    }
  };

  return (
    <>
      <div>
        <SearchInputBox>
          <SearchInputText type="search" onChange={(e) => {handleSearchAddress(e);}} onKeyPress={handleOnKeyPress} />
        </SearchInputBox>
      </div>
    </>
  )
}