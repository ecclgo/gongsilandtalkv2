import { TopBox } from '@/components/alarm/Alarm';
import { MainText } from '@/components/myBoard/BoardText';
import { BoardListBox } from '@/components/myBoard/Box';
import {
  AllCheckBox,
  BoardCheckBox,
  BottomUnderline,
  DeleteBtn,
  SelectAllText,
  SelectBox,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
  TableTitleCell,
  Underline,
} from '@/components/myBoard/Table';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from './Paging';

export const GlobalStyle = styled.div`
  width: 1920px;
  height: 1100px;
  background-color: #ffffff;
`;

type Object = {
  id: number;
  title: string;
  replCnt: string;
  Date: string;
  view: string;
};

const dataDummy = [
  {
    id: 123,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 456,
    title: '[자유글]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 789,
    title: '[후기]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 999,
    title: '[노하우]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 333,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 2322,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 111,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 7890,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 3636,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 1233,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
  {
    id: 1235,
    title: '[질문/답변]이럴 경우 법적으로 어떻게 해결해야할까요?',
    replCnt: '8',
    Date: '2023.05.18',
    view: '1000',
  },
];

export default function MyBoard() {
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const [post, setPost] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);
  const [data, setData] = useState(dataDummy);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = (posts: any) => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckItems((prev: any) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el: number) => el !== id));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      const idArray: number[] = [];

      data.forEach((el: Object) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      setPost(currentPosts(data));
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      <GlobalStyle>
        <TopBox>
          <MainText>커뮤니티 게시글 관리</MainText>
        </TopBox>
        <SelectBox>
          <AllCheckBox
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems?.length === data.length ? true : false}
          />
          <SelectAllText>전체선택</SelectAllText>
          <DeleteBtn>선택 삭제</DeleteBtn>
        </SelectBox>
        <BoardListBox>
          <TableContainer>
            <Underline />
            <TableHeader>
              <TableCell>번호</TableCell>
              <TableTitleCell>제목</TableTitleCell>
              <TableCell>날짜</TableCell>
              <TableCell>조회수</TableCell>
            </TableHeader>
            {post?.map((row: any, index: number) => (
              <div key={index}>
                <TableRow even={index % 2 == 0}>
                  <BoardCheckBox
                    onChange={(e) =>
                      handleSingleCheck(e.target.checked, row.id)
                    }
                    checked={checkItems.includes(row.id) ? true : false}
                  />
                  <TableCell>{row.id}</TableCell>
                  <TableTitleCell>{row.title}</TableTitleCell>
                  <TableCell>{row.Date}</TableCell>
                  <TableCell>{row.view}</TableCell>
                </TableRow>
                <BottomUnderline />
              </div>
            ))}
          </TableContainer>
        </BoardListBox>
        <Paging totalPosts={data.length} paginate={setCurrentPage} />
      </GlobalStyle>
    </>
  );
}
