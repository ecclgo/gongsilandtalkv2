import Header from "./Header";
import SearchInput from "./SearchInput";
import SideFuntion from "./SideFunction";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div>
        <Header />
        {children}
        <SideFuntion />
      </div>
    </>
  )
}