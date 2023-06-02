import { MContents, MTabBox, TabBox } from '@/components/community/TabBox';
import { useState } from 'react';
import Contents from './Contents';
import Board from './Board';
import {
  Label,
  Option,
  SelectBox,
  SelectOptions,
} from '@/components/community/SelectBox';
import MTabContentsComponent from './Contents/MTabContents';
import MTabBoardComponent from './Board/MTabBoard';

export default function Community() {
  const [tabClicked, setTabClicked] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState('공톡컨텐츠');
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e: any) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <>
      <TabBox>
        <Contents tabClicked={tabClicked} setTabClicked={setTabClicked} />
        <Board tabClicked={tabClicked} setTabClicked={setTabClicked} />
      </TabBox>
      <MTabBox>
        <MContents>
          <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label>{currentValue}</Label>
            <SelectOptions show={showOptions}>
              <Option onClick={handleOnChangeSelectValue}>공톡컨텐츠</Option>
              <Option onClick={handleOnChangeSelectValue}>커뮤니티</Option>
            </SelectOptions>
          </SelectBox>
        </MContents>
        {currentValue == '공톡컨텐츠' ? (
          <MTabContentsComponent
            tabClicked={tabClicked}
            setTabClicked={setTabClicked}
          />
        ) : (
          <MTabBoardComponent />
        )}
      </MTabBox>
    </>
  );
}
