import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [tabClicked, setTabClicked] = useState<number>(0);

  return <></>;
}
